import * as React from "react";
import components from "./components";
// 일렉트론 이벤트 수신용
const electron = window.require("electron");

type NodeListData = {
  clientIP: string,
  socketID: string,
  cpu: number,
  ram: number,
  vga: number,
};

type logData = {
  date:string,
  logType:string,
  content:string
};

interface AppState {
  NodeDataList: Array<NodeListData> | undefined;
  totalNodeCount: number;
  logData: Array<logData>;
}

class App extends React.Component {

  state: AppState = {
    NodeDataList: undefined,
    totalNodeCount: 0,
    logData: [{  date:"[√]",
      logType:"System",
      content:"System loading complete"}]
  };

  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.setTotalNodeCount = this.setTotalNodeCount.bind(this);
    this.addNodeCount = this.addNodeCount.bind(this);
    this.subNodeCount = this.subNodeCount.bind(this);
    this.allUserShutdown = this.allUserShutdown.bind(this);
    this.allUserReboot = this.allUserReboot.bind(this);

    // Electron Event Listener
    this.isOnline();
    this.isOffline();
  }
   /**
   * 
   * 일렉트론 이벤트 처리
   * Electron -> React
   * 
   */
  protected isOnline(): void {
    electron.ipcRenderer.on("isOnline", (event: any, data: any) => {
      // NodeDataList를 로드합니다
      let NodeListData: NodeListData[] | undefined = this.state.NodeDataList;
      let newUserData: NodeListData = {
        "clientIP": `${data.clientIP}`,
        "socketID": `${data.socketID}`,
        "cpu": 0,
        "ram": 0,
        "vga": 0,
      }

      if(!!NodeListData){
        console.log("유저 데이터를 추가합니다");
        NodeListData.push(newUserData);
        this.setState({...this.state,NodeDataList:NodeListData})
      }else{
        console.log("유저 리스트를 새로 생성합니다");
        this.setState({...this.state,NodeDataList:[newUserData]});
      }
      console.log(this.state);
      //console.log(data);

      this.addNodeCount();
      this.addLogContent("System",`${data.socketID} - ${data.clientIP} is Online`);
    });
  }
   protected isOffline(): void {
    electron.ipcRenderer.on("isOffline", (event: any, data: any) => {
        // NodeDataList를 로드합니다
        let NodeListData: NodeListData[] | undefined = this.state.NodeDataList;
        if(!!NodeListData){
          NodeListData = NodeListData.filter((object)=>{
            return object.socketID !== data;
          })
          this.setState({...this.state,NodeDataList:NodeListData})
        }
        console.log(this.state);
      this.subNodeCount();
      this.addLogContent("System",`${data} - ${data.userName} is Offline`);
      //console.log(data);
    })
  }
  /**
   * 
   * 유저 카운트 변경
   * 
   */
  protected setTotalNodeCount(count: number): void {
    this.setState({ ...this.state, totalNodeCount: count });
  }
  protected addNodeCount(): void {
    let nowTotalNodeCount: number = this.state.totalNodeCount + 1;
    this.setState({ ...this.state, totalNodeCount: nowTotalNodeCount });
  }
  protected subNodeCount(): void {
    let nowTotalNodeCount: number = this.state.totalNodeCount - 1;
    this.setState({ ...this.state, totalNodeCount: nowTotalNodeCount });
  }
   /**
   * 
   * 유저 전체 제어 이벤트
   * 
   */
  protected allUserShutdown(): void {
    electron.ipcRenderer.send("all-users", "shutdown");
    this.addLogContent("System","all User Shutdown");
  }
  protected allUserReboot(): void {
    electron.ipcRenderer.send("all-users", "reboot");
    this.addLogContent("System","all User Reboot");
  }
   /**
   * 
   * 로깅
   * 
   */
  protected addLogContent(logtype: string,content: string): void{
    
    let logData = this.state.logData;
    const date: Date = new Date();
    const contentData:logData = {
      date: `${date.getHours()}:${date.getMinutes()}`,
      logType:logtype,
      content:content
    }

    logData.push(contentData)
    this.setState({...this.state,logData:logData})

    let scrollBar = window.document.getElementById("console");
    if(scrollBar){
      scrollBar.scrollTop = scrollBar.scrollHeight;
    }

  }

  render() {
    let logList:any;
    logList = this.state.logData.map((logListData)=>{
      return (
        <p className="pb-1">{logListData.date} [{logListData.logType}] {logListData.content}</p>
      );
    });

    return (
      <div className="w-full h-full bg-gray-50 font-main-font">
        <components.Navbar />

        <div className="flex flex-row-reverse m-3">
          {/* logging component */}
          <div className="w-full mx-auto">
            <div className="w-full shadow-2xl subpixel-antialiased rounded-lg h-64 bg-black border-black mx-auto overflow-hidden">
              <div
                className="flex items-center h-6 rounded-lg-t bg-gray-200 border-b border-gray-500 text-center text-black"
                id="headerTerminal"
              >
                <div
                  className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
                  id="closebtn"
                ></div>
                <div
                  className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
                  id="minbtn"
                ></div>
                <div
                  className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
                  id="maxbtn"
                ></div>
                <div className="mx-auto pr-16" id="terminaltitle">
                  <p className="text-center text-sm">System Log</p>
                </div>
              </div>
              <div
                className="pl-3 pt-3 pb-12 h-full overflow-y-auto overscroll-contain text-green-200 font-mono text-xs bg-black"
                id="console"
              >
                <p className="pb-1 pt-2">Hamster Dashboard Manager @ 2021</p>
                {logList}
              </div>
            </div>
          </div>
          {/* logging component */}
          <components.CounterWiget
            counterType="Online"
            counterData={this.state.totalNodeCount}
          />
        </div>

        {/* utility buttons */}
        <div className="flex flex-row-reverse m-3">
          {/* shutdown buttons */}
          <div
            className="inline-block mr-2 mt-2"
            onClick={this.allUserShutdown}
          >
            <button
              type="button"
              className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg flex items-center"
            >
              <svg
                className="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                />
              </svg>
              All User shutdown
            </button>
          </div>
          {/* reboot buttons */}
          <div className="inline-block mr-2 mt-2" onClick={this.allUserReboot}>
            <button
              type="button"
              className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-yellow-500 hover:bg-yellow-600 hover:shadow-lg flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clipRule="evenodd"
                />
              </svg>
              All User reboot
            </button>
          </div>
        </div>

        <components.NodeList NodeListData={this.state.NodeDataList} />
      </div>
    );
  }
}
export default App;

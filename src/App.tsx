import * as React from "react";
import components from "./components";
// 일렉트론 이벤트 수신용
const electron = window.require("electron");

/**
 * Data Type Declaration
 */

// Online Node DataType
type NodeListData = {
  clientIP: string;
  socketID: string;
};

// Log Data DataType
type logData = {
  date: string;
  logType: string;
  content: string;
};

// React state Interface
interface AppState {
  NodeDataList: Array<NodeListData> | undefined;
  totalNodeCount: number;
  logData: Array<logData>;
  modal: boolean;
  modalType: string;
  modalMessage: string;
  modalTargetSocketID: string;
}

class App extends React.Component {
  state: AppState = {
    NodeDataList: undefined,
    totalNodeCount: 0,
    logData: [
      { date: "[√]", logType: "System", content: "System loading complete" },
    ],
    modal: false,
    modalType: "",
    modalMessage: "",
    modalTargetSocketID: "",
  };

  constructor(props: {} | Readonly<{}>) {
    super(props);

    // scope
    this.setTotalNodeCount = this.setTotalNodeCount.bind(this);
    this.addNodeCount = this.addNodeCount.bind(this);
    this.subNodeCount = this.subNodeCount.bind(this);
    this.allUserShutdown = this.allUserShutdown.bind(this);
    this.allUserReboot = this.allUserReboot.bind(this);
    this.userCommandRun = this.userCommandRun.bind(this);
    this.userFileDownload = this.userFileDownload.bind(this);
    this.userReboot = this.userReboot.bind(this);
    this.userShutdown = this.userShutdown.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
    this.isOffline = this.isOffline.bind(this);
    this.isOnline = this.isOnline.bind(this);
    this.logEvent = this.logEvent.bind(this);
    this.socketServerOffline = this.socketServerOffline.bind(this);
  }
  componentDidMount() {
    this.isOnline();
    this.isOffline();
    this.logEvent();
    this.socketServerOffline();
  }
  componentWillUnmount() {
    electron.ipcRenderer.removeListener("isOnline");
    electron.ipcRenderer.removeListener("isOffline");
    electron.ipcRenderer.removeListener("logEvent");
    electron.ipcRenderer.removeListener("socketServerOffline");
  }
  protected logEvent(): void {
    electron.ipcRenderer.on("logEvent", (event: any, data: any) => {
      console.log(data);
      //data.log = data.log.replace(new RegExp('\r?\n','g'), '<br />');
      this.addLogContent(
        "System",
        `${data.clientIP}/${data.socketID}
      ${data.log}`
      );
    });
  }
  /**
   *
   * 일렉트론 이벤트 처리
   * Electron -> React
   *
   */
  protected isOnline(): void {
    electron.ipcRenderer.on("isOnline", (event: any, data: any) => {
      console.log(event);

      // NodeDataList를 로드합니다
      let NodeListData: NodeListData[] | undefined = this.state.NodeDataList;
      console.log(data);

      let newUserData: NodeListData = {
        clientIP: `${data.clientIP}`,
        socketID: `${data.socketID}`,
      };
      console.log(newUserData);

      if (!!NodeListData) {
        console.log("유저 데이터를 추가합니다");
        NodeListData.push(newUserData);
        this.setState({ ...this.state, NodeDataList: NodeListData });
      } else {
        console.log("유저 리스트를 새로 생성합니다");
        this.setState({ ...this.state, NodeDataList: [newUserData] });
      }
      console.log(this.state);
      //console.log(data);

      this.addNodeCount();
      this.addLogContent(
        "System",
        `${data.socketID} - ${data.clientIP} is Online`
      );
    });
  }
  protected isOffline(): void {
    electron.ipcRenderer.on("isOffline", (event: any, data: any) => {
      console.log(data);

      // NodeDataList를 로드합니다
      let NodeListData: NodeListData[] | undefined = this.state.NodeDataList;
      // 데이터가 있다?
      if (!!NodeListData) {
        NodeListData = NodeListData.filter((object) => {
          if (object.socketID === data) {
            this.subNodeCount();
            this.addLogContent("System", `${data} is Offline`);
          }
          return object.socketID !== data;
        });
        this.setState({ ...this.state, NodeDataList: NodeListData });
      }
      console.log(this.state);
      //console.log(data);
    });
  }
  protected socketServerOffline(): void {
    electron.ipcRenderer.on("socketServerOffline", (event: any, data: any) => {
      this.setState({ ...this.state, NodeDataList: null });
      this.cleanNodeCount();
      this.addLogContent("System", `disconnect SocketServer`);
    });
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
  protected cleanNodeCount(): void {
    this.setState({ ...this.state, totalNodeCount: 0 });
  }
  /**
   *
   * 유저 전체 제어 이벤트
   *
   */
  protected allUserShutdown(): void {
    electron.ipcRenderer.send("all-users", "shutdown");
    console.log("shutdown");

    this.addLogContent("System", "all User Shutdown");
  }
  protected allUserReboot(): void {
    electron.ipcRenderer.send("all-users", "reboot");
    this.addLogContent("System", "all User Reboot");
  }
  protected allUserStartTrex(): void {
    const UserList: any = this.state.NodeDataList;
    let sortUserList = {};
    sortUserList = UserList.filter((object: any) => {
      console.log(object);
    });
  }
  /**
   *
   * 특정 유저 제어 이벤트
   *
   */
  // 특정 유저 커맨드 실행 요청
  protected userCommandRun(socketID: string, command?: string) {
    if (!!command) {
      // 매개변수 커맨드가 존재할경우
      this.addLogContent(
        "System",
        `${socketID}/Command Execution $ ${command}`
      );
      electron.ipcRenderer.send("single-user", {
        socketID: socketID,
        type: "commnand",
        command: command,
      });
    } else {
      // 매개변수 커맨드가 존재하지 않을경우
      // 커맨드 입력을 위해 모달 컴포넌트를 호출한다
      this.modalOpen("Command Execution", `${socketID} run command`, socketID);
    }
  }
  // 특정 유저 시스템 종료 요청
  protected userShutdown(socketID: string): void {
    this.addLogContent("System", `${socketID}/User Shutdown $`);
    electron.ipcRenderer.send("single-user", {
      socketID: socketID,
      type: "shutdown",
    });
  }
  // 특정 유저 재부팅 요청
  protected userReboot(socketID: string): void {
    this.addLogContent("System", `${socketID}/User Reboot $`);
    electron.ipcRenderer.send("single-user", {
      socketID: socketID,
      type: "reboot",
    });
  }
  // 특정 유저 파일 다운로드 요청
  protected userFileDownload(socketID: string, url?: string) {
    if (!!url) {
      // 매개변수 커맨드가 존재할경우
      console.log(url);
      this.addLogContent("System", `${socketID}/FileDownload@${url}`);
      electron.ipcRenderer.send("single-user", {
        socketID: socketID,
        type: "filedown",
        url: url,
      });
    } else {
      // 매개변수 커맨드가 존재하지 않을경우
      // 커맨드 입력을 위해 모달 컴포넌트를 호출한다
      this.modalOpen("File Download", `${socketID} file download`, socketID);
      console.log(`${socketID} run command ${socketID}`);
      //this.test();
    }
  }
  /**
   *
   * 모달 제어 이벤트
   * 유저 버튼 이벤트 -> 아래 모달 메서드 호출 modalOpen -> 모달 입력 -> 데이터 수신 modalInput
   *  -> 수신된 데이터 타입을 보고 다시 유저 버튼 이벤트 호출
   *
   */
  // 모달 실행
  protected modalOpen = (
    modalType: string,
    modalMessage: string,
    socketID: string
  ): void => {
    this.setState({
      ...this.state,
      modalType: modalType,
      modalMessage: modalMessage,
      modal: true,
      modalTargetSocketID: socketID,
    });
  };
  // 모달 종료
  protected modalClose = (): void => {
    this.setState({
      ...this.state,
      modalType: "",
      modalMessage: "",
      modal: false,
    });
  };
  // 모달 send 버튼 클릭시 호출되는 이벤트
  protected modalInput = (inputData: string, socketID: string): void => {
    // 이벤트 재호출
    const INPUT_TYPE = this.state.modalType;
    switch (INPUT_TYPE) {
      case "Command Execution":
        this.userCommandRun(socketID, inputData);
        break;
      case "File Download":
        this.userFileDownload(socketID, inputData);
        break;
      default:
        console.log("modalInput call event error");
        break;
    }
    // 모달 종료
    this.setState({
      ...this.state,
      modalType: "",
      modalMessage: "",
      modal: false,
    });
  };
  /**
   *
   * 로깅
   *
   */
  protected addLogContent(logtype: string, content: string): void {
    let logData = this.state.logData;
    const date: Date = new Date();
    const contentData: logData = {
      date: `${date.getHours()}:${date.getMinutes()}`,
      logType: logtype,
      content: content,
    };

    logData.push(contentData);
    this.setState({ ...this.state, logData: logData });

    let scrollBar = window.document.getElementById("console");
    if (scrollBar) {
      scrollBar.scrollTop = scrollBar.scrollHeight;
    }
  }

  render() {
    console.log("redner");

    let MODAL_STAGE = this.state.modal;
    let logList: any;
    logList = this.state.logData.map((logListData) => {
      return (
        <div className="pb-1 whitespace-pre-line">
          {logListData.date} [{logListData.logType}] {logListData.content}
        </div>
      );
    });
    return (
      <div className="w-full h-full bg-gray-50 font-main-font">
        <components.Modal
          modalTargetSocketID={this.state.modalTargetSocketID}
          modal={this.state.modal}
          modalType={this.state.modalType}
          modalMessage={this.state.modalMessage}
          modalInput={this.modalInput}
          modalClose={this.modalClose}
        />

        <components.Navbar />

        {/* utility buttons */}
        <div className="flex flex-row-reverse m-3 stop-dragging">
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
          {/* logging component */}
          <components.CounterWiget
            counterType="Online"
            counterData={this.state.totalNodeCount}
          />
        </div>

        <div className="flex m-4">
          {/* logging component */}
          <div className="w-full mx-auto">
            <div className="w-full shadow-2xl subpixel-antialiased rounded-lg h-96 bg-black border-black mx-auto overflow-hidden">
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
                <div className="pb-1 pt-2">
                  Hamster Dashboard Manager @ 2021
                </div>
                {logList}
              </div>
            </div>
          </div>
        </div>

        <components.NodeList
          NodeListData={this.state.NodeDataList}
          userCommandRun={this.userCommandRun}
          userShutdown={this.userShutdown}
          userReboot={this.userReboot}
          userFileDownload={this.userFileDownload}
        />
      </div>
    );
  }
}
export default App;

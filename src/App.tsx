import * as React from "react";
import components from "./components";
const electron = window.require("electron");


type NodeListData = {
  userName: string;
  cpu: number;
  ram: number;
  vga: number;
  status: string;
};

interface AppState {
  NodeDataList: Array<NodeListData> | undefined;
  totalNodeCount:number;
}


class App extends React.Component {

  state: AppState = {
    NodeDataList: undefined,
    totalNodeCount: 0,
  };
  constructor(props: {} | Readonly<{}>){
    super(props);

    this.setTotalNodeCount = this.setTotalNodeCount.bind(this);
    this.addNodeCount = this.addNodeCount.bind(this);
    this.subNodeCount = this.subNodeCount.bind(this);
  }

  componentDidMount(){
    //NodeFataList 검증 후 totalNodeCount 반영
    this.getUserData()
  }
  componentDidUpdate(){
    console.log(this.state.NodeDataList);
    
  }

  protected getUserData():void{
    electron.ipcRenderer.on('userinfo', (event: any, data: any) => {
      this.setState({...this.state.NodeDataList, NodeDataList: data});
    });
  }

  protected setTotalNodeCount(count:number):void{
    this.setState({...this.state,totalNodeCount:count});
  }
  protected addNodeCount():void{
    let nowTotalNodeCount:number = this.state.totalNodeCount + 1;
    this.setState({...this.state,totalNodeCount:nowTotalNodeCount});
  }
  protected subNodeCount():void{
    let nowTotalNodeCount:number = this.state.totalNodeCount - 1;
    this.setState({...this.state,totalNodeCount:nowTotalNodeCount});
  }

  render() {
    return (
      <div className="w-full h-full bg-gray-50 font-main-font">
        <components.Navbar />

        <div className="flex flex-row-reverse m-3">
          <components.CounterWiget counterType="Online" counterData={this.state.totalNodeCount} />
        </div>

        <components.NodeList NodeListData={this.state.NodeDataList} />
      </div>
    );
  }
}
export default App;

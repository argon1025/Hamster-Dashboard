import * as React from "react";
import components from "./components";


type NodeListData = {
  userName: string;
  cpu: number;
  ram: number;
  vga: number;
  status: string;
};

interface AppState {
  NodeDataList: Array<NodeListData> | undefined;
}


class App extends React.Component {

  state: AppState = {
    NodeDataList: undefined
  };

  render() {
    return (
      <div className="w-full h-full bg-gray-50 font-main-font">
        <components.Navbar />

        <div className="flex flex-row-reverse m-3">
          <components.CounterWiget counterType="player" counterData="3" />
        </div>

        <components.NodeList NodeListData={undefined} />
        
      </div>
    );
  }
}
export default App;

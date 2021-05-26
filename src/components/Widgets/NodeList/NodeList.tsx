import * as React from "react";
import Node from "./Node";

type NodeListData = {
  clientIP: string,
  socketID: string,
  cpu: number,
  ram: number,
  vga: number
};

interface NodeListProps {
  NodeListData: Array<NodeListData>|undefined;
  userCommandRun(socketID:string): void;
  userShutdown(socketID:string): void;
  userReboot(socketID:string): void;
  userFileDownload(socketID:string): void;
}

class NodeList extends React.Component<NodeListProps> {
  render() {
    let clientList:any;
    if(!!this.props.NodeListData){
      clientList = this.props.NodeListData.map((ListData)=>{
        return (
          <Node userName={ListData.clientIP} cpu={ListData.cpu} ram={ListData.ram} vga={ListData.vga} socketID={ListData.socketID} status="ACTIVATE" userCommandRun={this.props.userCommandRun} userShutdown={this.props.userShutdown} userReboot={this.props.userReboot} userFileDownload={this.props.userFileDownload}/>
        );
      })
    }else{
      clientList = <div className="flex text-gray-300 m-5">There are no connected users.</div>;
    }
    return (
        <div className=" bg-white my-6 rounded-lg overflow-hidden shadow-xl m-5">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gradient-to-r from-green-400 to-blue-500 text-white uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">UserName</th>
              <th className="py-3 px-6 text-left">Performance</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {clientList}
          </tbody>
        </table>
      </div>
    );
  }
}
export default NodeList;

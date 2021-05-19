import * as React from "react";
import Node from "./Node";

class NodeList extends React.Component {
  render() {
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
            <Node />
            <Node />
            <Node />
            <Node />
            <Node />
            <Node />
            <Node />
            <Node />
            <Node />
            <Node />
            <Node />
            <Node />
          </tbody>
        </table>
      </div>
    );
  }
}
export default NodeList;

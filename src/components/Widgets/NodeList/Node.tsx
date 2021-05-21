import * as React from "react";

interface NodeProps {
  userName: string;
  cpu: number;
  ram: number;
  vga: number;
  status: string;
  socketID: string;
  userCommandRun(socketID: string): void;
  userShutdown(socketID: string): void;
  userReboot(socketID: string): void;
  userFileDownload(socketID: string): void;
}

class Node extends React.Component<NodeProps> {
  protected userCommandRunButton = () => {
    this.props.userCommandRun(this.props.socketID);
  }
  protected userShutdownButton = () => {
    this.props.userShutdown(this.props.socketID);
  }
  protected userRebootButton = () => {
    this.props.userReboot(this.props.socketID);
  }
  protected userFileDownloadButton = () => {
    this.props.userFileDownload(this.props.socketID);
  }
  render() {
    return (
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <div className="flex items-center">
            <div className="mr-2">-</div>
            <span className="font-medium">{this.props.userName}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-left">
          <div className="flex items-center">
            <span>
              CPU : {this.props.cpu}% RAM: {this.props.ram}% VGA:{" "}
              {this.props.vga}%
            </span>
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
            {this.props.status}
          </span>
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex item-center justify-center">
            {/* file Download */}
            <div onClick={this.userFileDownloadButton} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd" />
              </svg>
            </div>
            {/* command Run */}
            <div onClick={this.userCommandRunButton} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            </div>
            {/* reboot */}
            <div onClick={this.userRebootButton} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
              </svg>
            </div>
            {/* shutdown */}
            <div onClick={this.userShutdownButton} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}
export default Node;

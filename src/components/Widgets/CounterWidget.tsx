import * as React from "react";

interface CounterWidgetProps {
  counterType: string;
  counterData: number | string;
}

class CounterWidget extends React.Component<CounterWidgetProps> {
  render() {
    return (
      <div className="w-full lg:w-1/5 rounded-lg shadow-md mr-3">
        <div className="widget w-full h-full p-4 rounded-lg bg-white border-l-4 border-blue-500">
          <div className="flex items-center">
            <div className="icon w-14 p-3.5 bg-gradient-to-r from-green-300 to-blue-500 text-white rounded-full mr-3">
              <svg className="" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <div className=" text-lg">{this.props.counterData}</div>
              <div className=" text-sm text-gray-400">{this.props.counterType}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CounterWidget;

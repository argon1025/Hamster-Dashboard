import * as React from "react";

interface CounterWidgetProps {
  counterType: string;
  counterData: number | string;
}

class CounterWidget extends React.Component<CounterWidgetProps> {
  render() {
    return (
      <div className="flex inline-block mr-2 mt-2 hover:shadow-lg">
        <button
          type="button"
          className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-400 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
  <path d="M13 7H7v6h6V7z" />
  <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
</svg>
          {this.props.counterType}
        </button>
        <div className="-ml-2 rounded-md bg-green-400 shadow-border py-2.5 px-3">
          <div className="w-4 h-4 text-white text-sm font-bold">{this.props.counterData}</div>
        </div>
      </div>
    );
  }
}
export default CounterWidget;

import * as React from "react";
import components from "./components";

type AppState = {
  count: number; // like this
};
class App extends React.Component {
  state: AppState = {
    // optional second annotation for better type inference
    count: 0,
  };
  render() {
    return (
      <div className="w-full h-full bg-gray-50 font-main-font">
        <components.Navbar />

        <div className="flex flex-row-reverse m-3">
          <components.CounterWiget />
        </div>

        <components.NodeList />
        
      </div>
    );
  }
}
export default App;

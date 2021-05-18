import * as React from "react";
import "./App.css";

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
        <div className="flex flwx-row p-5">
          <div>
            <svg
              className="fill-current text-gray-600 w-12"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <ellipse cx="449.475" cy="290.327" rx="7.836" ry="7.821" />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M271.844,147.105c-17.226-3.855-35.213-5.809-53.464-5.809c-111.907,0-197.291,68.01-217.526,173.265
			c-2.666,13.876,0.978,28.083,10.001,38.978c9.035,10.909,22.355,17.166,36.545,17.166h48.727c4.329,0,7.836-3.502,7.836-7.821
			s-3.508-7.821-7.836-7.821H47.4c-9.501,0-18.417-4.188-24.463-11.489c-6.034-7.287-8.473-16.789-6.689-26.067
			c9.117-47.42,32.584-87.565,67.866-116.094c35.984-29.097,82.412-44.476,134.267-44.476c17.098,0,33.933,1.827,50.035,5.431
			c4.219,0.944,8.414-1.706,9.361-5.92C278.723,152.232,276.067,148.05,271.844,147.105z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M300.406,355.063h-95.743v-21.6c0-29.559-18.777-56.087-46.722-66.01l-49.938-17.732
			c-4.075-1.448-8.559,0.677-10.011,4.747c-1.452,4.069,0.679,8.542,4.756,9.99l49.938,17.732
			c21.714,7.71,36.303,28.316,36.303,51.275v21.599h-37.888c-4.329,0-7.836,3.502-7.836,7.821s3.509,7.821,7.836,7.821h149.306
			c4.329,0,7.836-3.502,7.836-7.821S304.735,355.063,300.406,355.063z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M503.695,308.172l-7.231-11.19c-0.002-0.003-0.003-0.005-0.005-0.007l-12.676-19.62
			c-4.079-6.321-8.929-12.014-14.447-17.037c2.838-3.242,4.948-6.991,6.266-11.219c1.198-3.818,1.845-8.405,1.975-14.022
			c0.286-12.176-7.389-22.636-19.098-26.031c-7.761-2.248-15.684-0.916-21.992,3.262c-6.586-8.843-17.55-13.162-28.761-10.899
			c-7.577,1.53-13.867,5.798-17.965,11.702c-16.173-16.435-40.208-36.163-72.594-50.844c-3.94-1.787-8.586-0.046-10.376,3.886
			c-1.79,3.932-0.047,8.568,3.894,10.355c34.58,15.675,58.984,37.515,73.884,53.891c-0.163,5.086,0.161,9.39,0.987,13.091
			c1.613,7.228,5.29,13.411,10.927,18.376c5.315,4.682,12.006,7.17,18.968,7.169c1.945,0,3.911-0.194,5.875-0.589
			c6.641-1.337,12.418-4.81,16.574-9.819c5.13,2.111,9.994,4.808,14.513,8.065c7.242,5.211,13.362,11.648,18.194,19.135
			l8.728,13.509c-12.059,9.973-25.798,27.728-22.975,55.727h-53.62c-2.922-21.99-17.993-40.937-39.347-48.519l-56.786-20.164
			c-4.078-1.448-8.56,0.677-10.012,4.747c-1.449,4.069,0.679,8.542,4.756,9.99l56.786,20.164
			c15.109,5.365,25.958,18.426,28.744,33.783h-34.753c-4.328,0-7.836,3.502-7.836,7.821s3.508,7.821,7.836,7.821h113.404h12.455
			c0.586,0,1.169-0.015,1.748-0.044C497.682,369.75,512,354.918,512,336.814v-0.005v-0.495v-0.004
			C512,326.295,509.127,316.563,503.695,308.172z M427.544,245.986c-1.788,3.699-5.184,6.296-9.315,7.127
			c-4.133,0.832-8.282-0.251-11.372-2.974c-3.146-2.772-5.11-6.059-6-10.05c-0.628-2.813-0.805-6.604-0.527-11.264
			c0.444-7.437,5.719-11.119,10.506-12.086c0.894-0.18,1.839-0.281,2.809-0.281c4.237,0,8.918,1.91,11.615,7.361
			c0.784,1.584,1.459,3.078,2.023,4.478c0.039,0.103,0.076,0.205,0.119,0.307c0.86,2.175,1.455,4.12,1.761,5.802
			c0,0,0,0.001,0,0.002C429.897,238.43,429.368,242.217,427.544,245.986z M460.641,244.437c-0.774,2.482-2.034,4.585-3.833,6.38
			c-3.933-2.458-8.051-4.592-12.327-6.389c0.846-4.186,0.895-8.47,0.102-12.818c-0.281-1.541-0.685-3.147-1.208-4.825
			c3.175-3.317,7.455-3.667,10.732-2.717c3.866,1.12,7.945,4.505,7.8,10.645C461.813,238.788,461.389,242.055,460.641,244.437z
			 M496.326,336.809c0,9.436-7.231,17.222-16.465,18.159c-0.616,0.063-1.241,0.095-1.873,0.095h-5.862
			c-2.522-20.319,5.948-33.831,15.771-42.477l2.63,4.07c3.795,5.865,5.8,12.661,5.8,19.658V336.809z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </div>
          <p className=" text-gray-600 text-2xl pl-3 pt-3 font-semibold ">
            Hamster Dashboard
          </p>
        </div>

        <div className="flex flex-row-reverse m-3">
        <div className="w-full lg:w-1/5 rounded-lg overflow-hidden shadow-md m-3">
                <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-purple-400">
                    <div className="flex items-center">
                        <div className="icon w-14 p-3.5 bg-purple-400 text-white rounded-full mr-3">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className=" text-lg">10</div>
                            <div className=" text-sm text-gray-400">Online</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/5  rounded-lg overflow-hidden shadow-md m-3">
                <div className="widget w-full p-4 rounded-lg bg-white border-l-4 border-green-400">
                    <div className="flex items-center">
                        <div className="icon w-14 p-3.5 bg-green-400 text-white rounded-full mr-3">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="text-lg">$948'560</div>
                            <div className="text-sm text-gray-400">Revenue</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

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
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="mr-2">
                      - 
                    </div>
                    <span className="font-medium">coinmaster-102</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex items-center">
                    <span>CPU : 32% RAM: 10% VGA: 90%</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                    Active
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default App;

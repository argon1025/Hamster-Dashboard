import * as React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="flex flwx-row p-5 stop-dragging">
        <div>
          <svg
            id="Capa_1"
            enable-background="new 0 0 497.796 497.796"
            className="w-14"
            viewBox="0 0 497.796 497.796"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="m108.774 253.946-48.66 35.02c-9.97 7.17-15.23 18.39-15.23 29.76 0 7.86 2.52 15.79 7.75 22.5 9.02 11.56 25 15.03 38 8.25l1.36-.85 51-31.7v-85.7z"
                fill="#f9e2c2"
              />
              <path
                d="m114.219 326.401-1.36.85c-13 6.78-28.98 3.31-38-8.25-5.23-6.71-7.75-14.64-7.75-22.5 0-5.084 1.059-10.135 3.113-14.81l-10.108 7.275c-9.97 7.17-15.23 18.39-15.23 29.76 0 7.86 2.52 15.79 7.75 22.5 9.02 11.56 25 15.03 38 8.25l1.36-.85 51-31.7v-8.411z"
                fill="#fcd89f"
              />
              <circle cx="206.193" cy="45.166" fill="#fbc773" r="45.155" />
              <path
                d="m186.414 43.178c5.559-21.618 25.863-35.525 47.382-33.755-4.712-3.643-10.223-6.412-16.357-7.989-24.152-6.211-48.767 8.333-54.978 32.486-6.211 24.152 8.333 48.767 32.486 54.978 2.534.652 5.073 1.062 7.596 1.269-13.841-10.7-20.763-28.971-16.129-46.989z"
                fill="#fcb64d"
              />
              <circle cx="277.966" cy="62.321" fill="#fbce85" r="58.517" />
              <path
                d="m325.106 99.722c-.551-1.221-1.532-2.197-2.772-2.707l-103.61-42.6c-1.7-.65-3.42-1.26-5.14-1.84-14.52-4.9-29.77-7.41-45.16-7.41h-20.05c-19.48 0-38.5 5.91-54.54 16.96l-34.28 23.6c-4.92 3.39-8.86 7.89-11.56 13.03-2.71 5.14-4.18 10.94-4.18 16.92 0 4.23.74 8.4 2.15 12.32 1.42 3.92 3.51 7.6 6.2 10.86 17.56 21.21 42.05 35.53 69.14 40.44l7.81 1.41c1.431.259 2.862.484 4.297.679 1.832.248 3.191 1.82 3.187 3.669l-.019 10.778h-.035v19.644h60.597c5.294 0 9.933 9.741 9.933 9.933v-9.933h8.62c23.06 0 45.88-4.29 67.32-12.61l43.48-15.23c2.48-10.45 3.73-21.18 3.73-31.97v-32.12c0-8.323-1.781-16.427-5.118-23.823z"
                fill="#fbce85"
              />
              <g>
                <path
                  d="m129.114 180.706c1.431.259 2.862.484 4.297.679 1.832.248 3.191 1.82 3.187 3.669l-.019 10.778h-.035v19.644h45.748c.379-.438.753-.881 1.137-1.315l5.82-6.57v-19.644h.035l.011-6.353c.008-4.337-3.133-7.991-7.401-8.759-.025-.004-.05-.009-.075-.013l-7.81-1.41c-27.09-4.91-51.58-19.23-69.14-40.44-2.69-3.26-4.78-6.94-6.2-10.86-1.41-3.92-2.15-8.09-2.15-12.32 0-5.98 1.47-11.78 4.18-16.92 2.7-5.14 6.64-9.64 11.56-13.03l34.28-23.6c5.189-3.575 10.693-6.602 16.421-9.075h-14.586c-19.48 0-38.5 5.91-54.54 16.96l-34.28 23.6c-4.92 3.39-8.86 7.89-11.56 13.03-2.71 5.14-4.18 10.94-4.18 16.92 0 4.23.74 8.4 2.15 12.32 1.42 3.92 3.51 7.6 6.2 10.86 17.56 21.21 42.05 35.53 69.14 40.44z"
                  fill="#fdc36d"
                />
              </g>
              <circle cx="167.121" cy="79.911" fill="#aa9ea9" r="9.96" />
              <path
                d="m296.747 82.888c3.861-5.039 5.987-11.448 5.526-18.295-.938-13.939-12.628-25.066-26.597-25.279-14.083-.215-25.571 10.242-27.333 23.535-.379 2.863 1.28 5.611 3.949 6.714l36.935 15.272c2.659 1.1 5.769.339 7.52-1.947z"
                fill="#fcdfb3"
              />
              <g>
                <path
                  d="m112.061 108.731c-3.52 0-6.659-2.489-7.354-6.073-.789-4.066 1.868-8.002 5.934-8.792l16.903-3.279c4.062-.785 8.002 1.868 8.791 5.934s-1.868 8.002-5.934 8.792l-16.903 3.279c-.482.093-.963.139-1.437.139z"
                  fill="#fbc773"
                />
              </g>
              <g>
                <path
                  d="m131.328 142.309c-.395 0-.794-.031-1.196-.096l-17-2.725c-4.09-.655-6.874-4.502-6.218-8.592.655-4.089 4.502-6.872 8.592-6.218l17 2.725c4.09.655 6.874 4.502 6.218 8.592-.591 3.687-3.777 6.314-7.396 6.314z"
                  fill="#fbc773"
                />
              </g>
              <g>
                <g id="XMLID_184_">
                  <g>
                    <path
                      d="m82.464 69.956v27.71c0 9.62-6.1 18.17-15.2 21.29l-21.81 7.49h-.01c-1.07-3.46-1.63-7.09-1.63-10.77 0-5.98 1.47-11.78 4.18-16.92 2.7-5.14 6.64-9.64 11.56-13.03z"
                      fill="#aa9ea9"
                    />
                  </g>
                </g>
              </g>
              <path
                d="m231.293 451.533v-47.975c0-19.72 15.986-35.706 35.706-35.706h10.549c12.746 0 24.195 7.797 28.865 19.657"
            
              />
              <path
                d="m210.964 454.736-21.02-32.05c-6.05-9.21-10.68-19.21-13.8-29.66s-4.73-21.35-4.73-32.36c0-20.25 5.44-40.13 15.74-57.56l4.18-7.06c10.31-17.43 15.74-37.31 15.74-57.56v-13.077c0-5.486-4.447-9.933-9.933-9.933h-60.597l-5.82 6.57c-25.83 29.19-40.09 66.81-40.09 105.79 0 18.76 3.3 37.21 9.62 54.57s15.64 33.62 27.7 47.99l17.72 21.14 41.34 42.16 3.755 4.1h36.973v-31.057l-7.108-1.343z"
                fill="#efedef"
              />
              <path
                d="m180.659 422.511c-12.06-14.37-21.38-30.63-27.7-47.99s-9.62-35.81-9.62-54.57c0-38.4 13.847-75.474 38.953-104.475h-45.748l-5.82 6.57c-25.83 29.19-40.09 66.81-40.09 105.79 0 18.76 3.3 37.21 9.62 54.57s15.64 33.62 27.7 47.99l17.72 21.14 41.34 42.16 3.755 4.1h36.973v-24.199l-29.363-29.946z"
                fill="#e5e1e5"
              />
              <g id="XMLID_188_">
                <g>
                  <path
                    d="m222.494 497.756v.04h-14.22-74.87c-4.36 0-7.89-3.54-7.89-7.89v-16.32c0-11.55 8.86-21.03 20.16-22.01.64-.06 1.29-.09 1.94-.09h26.75 48.13z"
                    fill="#f9e2c2"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="m210.964 454.736-21.02-32.05c-6.05-9.21-10.68-19.21-13.8-29.66s-4.73-21.35-4.73-32.36c0-20.25 5.44-40.13 15.74-57.56l4.18-7.06c10.31-17.43 15.74-37.31 15.74-57.56v-23.01h8.62c23.06 0 45.88-4.29 67.32-12.61l43.48-15.23c-1.6 6.81-3.73 13.5-6.36 20.01-1.85 4.58-2.76 9.41-2.76 14.21 0 7.68 2.33 15.31 6.87 21.8l59.9 85.54c14.02 20.02 21.79 43.72 22.37 68.11l-21.1 65.89c-10.08 21.14-31.4 34.6-54.81 34.6h-74.88-47.45c-4.35 0-7.89-3.54-7.89-7.89v-16.32c0-7.98 4.23-14.97 10.58-18.85z"
                    fill="#fbce85"
                  />
                </g>
              </g>
              <path
                d="m297.653 274.016v24.082c0 4.011-1.232 7.925-3.529 11.213l-10.572 15.134c-7.047 10.088-20.204 13.851-31.52 9.016-15.169-6.482-20.541-25.273-11.089-38.793l3.706-5.301-.231-12.456c-.038-2.022 1.525-3.715 3.543-3.84l45.682-2.824c2.173-.135 4.01 1.592 4.01 3.769z"
                fill="#fef1dc"
              />
              <path
                d="m274.047 329.324c-15.169-6.482-20.541-25.273-11.089-38.793l3.706-5.301-.231-12.456c-.005-.293.031-.575.09-.85l-18.562 1.148c-2.019.125-3.581 1.818-3.543 3.84l.231 12.456-3.706 5.301c-9.452 13.52-4.08 32.311 11.089 38.793 8.627 3.686 18.315 2.363 25.558-2.938-1.193-.32-2.379-.703-3.543-1.2z"
                fill="#fcd89f"
              />
              <g id="XMLID_186_">
                <g>
                  <path
                    d="m406.514 397.306-21.1 65.89c-6.79 14.25-18.69 25-32.89 30.5v-.01l-24.83-19.37c-11.26-8.78-17.84-22.26-17.84-36.54 0-6.32 1.29-12.5 3.72-18.19s6-10.9 10.57-15.27l25.07-24.01c9.98-9.56 15.63-22.78 15.63-36.61v-40.26l.04-1.74 19.26 27.5c14.02 20.02 21.79 43.72 22.37 68.11z"
                    fill="#fdcf8a"
                  />
                </g>
              </g>
              <circle cx="415.421" cy="436.994" fill="#f9e2c2" r="38.561" />
              <path
                d="m408.339 436.257c0-15.368 8.992-28.633 22-34.829-4.589-1.927-9.628-2.994-14.918-2.994-21.297 0-38.561 17.264-38.561 38.561s17.264 38.561 38.561 38.561c5.929 0 11.543-1.341 16.561-3.732-13.889-5.833-23.643-19.56-23.643-35.567z"
                fill="#fcd89f"
              />
              <g>
                <path
                  d="m231.293 459.032c-4.143 0-7.5-3.358-7.5-7.5v-47.975c0-23.824 19.382-43.206 43.206-43.206h10.549c15.937 0 30.006 9.582 35.843 24.41 1.518 3.854-.377 8.208-4.231 9.726-3.851 1.519-8.209-.377-9.726-4.231-3.564-9.054-12.155-14.904-21.886-14.904h-10.549c-15.553 0-28.206 12.653-28.206 28.206v47.975c0 4.141-3.358 7.499-7.5 7.499z"
                  fill="#fbc773"
                />
              </g>
              <path
                d="m245.42 457.314c0-3.219-2.61-5.829-5.829-5.829h-19.586c-3.745 0-7.25 1.18-10.232 3.25-5.635 3.88-9.389 10.87-9.389 18.85v23.616c0 .328.236.594.527.594h44.508v-40.481z"
                fill="#fef1dc"
              />
            </g>
          </svg>
        </div>
        <p className=" text-gray-600 text-2xl  pt-3 font-semibold ">
          Hamster Dashboard
        </p>
      </div>
    );
  }
}
export default Navbar;

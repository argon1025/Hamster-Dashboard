import * as React from "react";

interface ModalProps {
  modal: boolean;
  modalType: string;
  modalMessage: string;
  modalTargetSocketID: string;
  modalInput(inputData:string,socketID:string):void;
  modalClose():void;
}

class Modal extends React.Component<ModalProps> {
    state:{inputData:string}={
        inputData:""
    };
    protected inputDataIsChange = (event:any):void =>{
       this.setState({...this.state,inputData:event.target.value})
    }
    protected sendButton = ():void =>{
        this.props.modalInput(this.state.inputData,this.props.modalTargetSocketID);
     }
  render() {
    let MODAL_STATE = this.props.modal;
    let MODAL_MESSAGE = this.props.modalMessage;
    return (
      <div>
        {MODAL_STATE ? (
          <div className="flex fixed h-full w-full items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="absolute w-3/5 max-w-7xl">
              <div className="flex flex-col w-full mx-auto rounded-lg border border-gray-300 shadow-xl">
                <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
                  <p className="font-semibold text-gray-800">Input</p>
                  
                </div>
                <div className="flex flex-col px-6 py-5 bg-gray-50">
                  <p className="mb-2 font-semibold text-gray-700">
                    {MODAL_MESSAGE}
                  </p>
                  <p className="mb-2 font-semibold text-gray-700">
                    Last Command : {this.state.inputData}
                  </p>
                  <textarea
                    onChange={this.inputDataIsChange}
                    name="inputData"
                    id="inputData"
                    placeholder="Type message..."
                    className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"
                  ></textarea>
                  
                </div>
                <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
                  <p onClick={this.props.modalClose} className="font-semibold text-gray-600 cursor-pointer">Cancel</p>
                  <button onClick={this.sendButton} className="px-4 py-2 text-white font-semibold bg-blue-500 rounded">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Modal;

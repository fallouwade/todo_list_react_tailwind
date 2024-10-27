import React from 'react';
import { IoMdClose } from "react-icons/io";

class Button_ajouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Modal: false,
      
      input: {
        firstName: '',
        lastName: '',
      },
    };
  }

  buttonModal = () => {
    this.setState((prevState) => ({
      Modal: !prevState.Modal,
    }));
  };
  

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      input: {
        ...prevState.input,
        [name]: value,
      },
    }));
  };

  buttonValider = (event) => {
    event.preventDefault();
    console.log("Valeurs soumises :", this.state);
    this.props.Partagedonne(this.state.input)
  };

  render() {
   
    return (
      <div>
        <div>
          <button className="py-2 px-5 bg-sky-500 text-white font-semibold rounded shadow-md" onClick={this.buttonModal}>
            Ajouter
          </button>
        </div>
        {this.state.Modal && (
          <div className="fixed inset-0 top-0 w-full flex justify-center bg-black bg-opacity-50">
            <div className="bg-white sm:w-2/5 w-5/6 h-3/4 rounded-lg p-2 mt-5 mx-auto">
              <div className="text-end">
                <button onClick={this.buttonModal} className="py-2 px-4 bg-slate-200 rounded-lg hover:bg-slate-400">
                  <IoMdClose />
                </button>
              </div>
              <h2 className="text-lg text-[#093545] font-bold bg-sky-300 rounded p-2 mt-3 shadow">Formulaire</h2>
              <div>
                <form className="mt-10" onSubmit={this.buttonValider}>
                  <label className="block mb-5">
                    <span className="block text-sm font-medium text-slate-700">First Name</span>
                    <input
                      type="text"
                      name="firstName"
                      value={this.state.input.firstName}
                      onChange={this.handleInputChange}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-300 invalid:text-pink-600
                        focus:invalid:border-pink-300 focus:invalid:ring-pink-300"
                    />
                  </label>

                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700">Last Name</span>
                    <input
                      type="text"
                      name="lastName"
                      value={this.state.input.lastName}
                      onChange={this.handleInputChange}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-300 invalid:text-pink-600
                        focus:invalid:border-pink-300 focus:invalid:ring-pink-300"
                    />
                  </label>
                  <div className="flex justify-end mt-5 mx-5">
                    <button type="submit" className="py-2 px-5 bg-sky-500 text-white font-semibold rounded shadow-md">
                      Envoyer
                    </button>
                    <button  
                       onClick={this.buttonModal1}
                    className="py-2 px-5 bg-sky-500 text-white font-semibold rounded shadow-md">
                      Envoyer1
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Button_ajouter;

import React from 'react';
import { IoMdClose } from "react-icons/io";

class Button_ajouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        firstName: '',
        lastName: '',
      },
      isEditing: false, // Nouveau: détermine si le formulaire est en mode édition
      editIndex: null,  // Nouveau: l'index de l'élément en cours de modification
    };
  }

  handleInputChange = (event) => {
    const { name, value } =  event.target;
     
    this.setState((prevState) => ({
      input: {
        ...prevState.input,
        [name]: value,
      },

    }));
  
  };

  // Nouveau: Fonction pour activer le mode modification
  enableEditMode = (item, index) => {
    this.setState({
      input: { ...item },  // Remplit les champs avec les données de l'élément
      isEditing: true,
      editIndex: index,
    });
    this.props.toggleModal(); // Affiche la modal
  };

  buttonValider = (event) => {
    event.preventDefault();
    if (this.state.isEditing) {
      // En mode édition, on met à jour l'élément
      this.props.updateData(this.state.input, this.state.editIndex);
    } else {
        const etat= this.state.input
      // En mode ajout, on ajoute un nouvel élément
        if(etat.firstName !== ''){
      this.props.Partagedonne(this.state.input);
    }

    }
    
    // Réinitialisation du formulaire après l'ajout ou la modification
    this.props.toggleModal();
    this.setState({
      input: {
        firstName: '',
        lastName: '',
      },
      isEditing: false,
      editIndex: null,
    });
  };

  render() {
    return (
      <div>
        <button className="py-2 px-5 bg-sky-500 text-white font-semibold rounded shadow-md" onClick={this.props.toggleModal}>
          {this.state.isEditing ? "Modifier" : "Ajouter"}
        </button>

        {this.props.Modal && (
          <div className="fixed inset-0 top-0 w-full flex justify-center bg-black bg-opacity-50">
            <div className="bg-white sm:w-3/12 w-5/6 h-3/4 rounded-lg mt-5 mx-auto">
              <div className="text-end">
                <button onClick={this.props.toggleModal} className="py-2 px-4 bg-slate-200 rounded-lg hover:bg-slate-400">
                  <IoMdClose />
                </button>
              </div>
              <h2 className="text-lg text-[#093545] font-bold bg-sky-300 rounded p-2 mt-3 shadow">
                {this.state.isEditing ? "Modifier l'élément" : "Ajouter un nouvel élément"}
              </h2>
              <form className="mt-10" onSubmit={this.buttonValider}>
                <label className="block mb-5 mx-auto w-72">
                  <span className="block text-sm font-medium text-slate-700">First Name</span>
                  <input
                    type="text"
                    name="firstName"
                    value={this.state.input.firstName}
                    onChange={this.handleInputChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                </label>

                <label className="block mx-auto w-72">
                  <span className="block text-sm font-medium text-slate-700">Last Name</span>
                  <input
                    type="text"
                    name="lastName"
                    value={this.state.input.lastName}
                    onChange={this.handleInputChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                </label>
                <div className="flex justify-end mt-5 mx-5">
                  <button type="submit" className="py-2 px-5 bg-sky-500 text-white font-semibold rounded shadow-md">
                    {this.state.isEditing ? "Mettre à jour" : "Envoyer"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Button_ajouter;

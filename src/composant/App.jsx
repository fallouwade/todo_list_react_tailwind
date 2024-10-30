import React from 'react'

import Table from './tableau.jsx'



class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			 Modal: false,
			 index1: "	",
			data:[],
			
		}
	}


  buttonModal = () => {
    this.setState((prevState) => ({
      Modal: !prevState.Modal,
     
    }));

   
  };


	update = (newdata) => {
  this.setState((prevState) => ({
    data: [
      ...prevState.data,
      	newdata
    ],
  }));
}
  updateData = (updatedItem, index) => {
    this.setState((prevState) => {
      const newData = [...prevState.data];
      newData[index] = updatedItem;


      return { data: newData };
    });
  };
  

  delete = (item, index) => {
    console.log(item, index);
    this.setState((prevState) => ({
      data: prevState.data.filter((items,i) => i !== index)
    }));
  };


		
		render(){

			console.log(this.state.data)
			return (
				<section className="w-screen mt-5 ">
					<h1 className="text-3xl font-semibold text-center pt-2">Todolist </h1>
					<div className="  flex justify-between sm:mx-24 mx-5 mt-5">
						{/*<Input_recherche Recuperedonne={this.state.data} />
						<Button_ajouter Partagedonne={this.update}  toggleModal={this.buttonModal}  Modal={this.state.Modal} index={this.state.index1} />*/}
					</div>
					<div className="mt-10 ">
						<Table Recuperedonne={this.state.data} deleter={this.delete} updateData={this.updateData} Partagedonne={this.update}  toggleModal={this.buttonModal}  Modal={this.state.Modal} />
					</div>
				</section>
				)
		}
	
}
export default App
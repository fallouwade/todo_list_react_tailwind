import React from 'react'
import Input_recherche from './input_recherche.jsx'
import Button_ajouter from './button_ajouter.jsx'
import Table from './tableau.jsx'



class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			data:[]
		}
	}

	update = (newdata) => {
  this.setState((prevState) => ({
    data: [
      ...prevState.data,
      	newdata 
    ]
  }));
}

		
		render(){
			console.log(this.state.data)
			return (
				<section className="w-screen mt-5 ">
					<h1 className="text-3xl font-semibold text-center pt-2">Todolist </h1>
					<div className="  flex justify-between sm:mx-24 mx-5 mt-5">
						<Input_recherche Recuperedonne={this.state.data} />
						<Button_ajouter Partagedonne={this.update} />
					</div>
					<div className="mt-10 ">
						<Table Recuperedonne={this.state.data}/>
					</div>
				</section>
				)
		}
	
}
export default App
import React from 'react'



class Input_recherche extends React.Component{
	constructor(props){
		super(props);

	}
		
		render(){
			return (
				<div className="mt-2" >
					<input type="search" placeholder="Rechercher..." className="border border-black-600 rounded pl-3 "  onChange={this.props.onChange} />
					
				</div>

				)
		}
	
}
export default Input_recherche

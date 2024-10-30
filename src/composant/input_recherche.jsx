import React from 'react'
import { IoIosSearch } from "react-icons/io";



class Input_recherche extends React.Component{
	constructor(props){
		super(props);

	}
		
		render(){
			return (
				<div className="mt-2 border flex items-center justify-center " >
					<input type="search" placeholder="Rechercher..." className=" rounded pl-3 "  onChange={this.props.onChange} />
					<IoIosSearch className="mx-2" />
				</div>

				)
		}
	
}
export default Input_recherche

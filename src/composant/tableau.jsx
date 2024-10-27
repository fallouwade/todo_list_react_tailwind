import React from 'react'
import { FaRegEye } from "react-icons/fa";
import { MdMode } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";



class Table extends React.Component{
	constructor(props){
		super(props);
    this.state={
      table:this.props.Recuperedonne
    }
	}    	

		render(){
      let table=this.props.Recuperedonne;
        const table1=table.map(item=>{
           if(item.firstName.trim() !== '' && item.lastName.trim() !== ''){
            return item
          }
        })

        const table2= table1.filter(item=>{
           return item !== undefined
        })
        console.log( table2)
        


			return (
				<div className="   flex justify-center w-full " >
					<table className="border-collapse border border-slate sm:w-4/5 w-full ">
            <thead>
              <tr className="">
                <th className="border border-slate text-center">Nom</th>
                <th className="border border-slate text-center">Prénom</th>
                 <th className="border border-slate text-center">Action</th>
              </tr>
            </thead>
            <tbody>
            {table2.map((item, index) => (
              <tr className="hover:bg-gray-100"  key={index}>
                <td className="border border-slate text-center ">{item.firstName}</td>
                <td className="border border-slate text-center">{item.lastName}</td>
                 <td className="border border-slate text-center">
                   <div className='flex gap-3 justify-center'>
                    <button> <FaRegEye /> </button>
                    <button> <MdMode /> </button>
                    <button> <RiDeleteBin5Line /> </button>
                   </div>
                 </td>
              </tr>
                ))}
             
            </tbody>
          </table>
				</div>

				)
		}
	
}
export default Table

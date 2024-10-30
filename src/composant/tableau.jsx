import React from 'react'
import { FaRegEye } from "react-icons/fa";
import { MdMode } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Input_recherche from './input_recherche.jsx'
import Button_ajouter from './button_ajouter.jsx'


class Table extends React.Component {
  constructor(props) {
    super(props);
     this.inputRef = React.createRef();
      this.pagiRef = React.createRef();

    this.state = {
      Modal: false,
      cle: null,
      searchTerm: '',
       page1: 1 
      
    }
  }

  buttonModal = (index = null) => {
    this.setState((prevState) => ({
      Modal: !prevState.Modal,
      cle: index
    }));
  }
    delete= (item,index)=>{
       this.props.deleter(item,index)
    }

  handlechange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }
   enableEditMode = (item, index) => {
    // this.refs.buttonAjouter.enableEditMode(item, index);
     this.inputRef.current.enableEditMode(item, index)
  }
  page= (i)=>{
    this.setState({ page1: i });
     
  }


  render() {

    let table = this.props.Recuperedonne;
    let currentPage = this.state.page1;
    let itemsPerPage = 6;
    

    const filteredTable = table
      .filter(item => item.firstName.trim() !== '' && item.lastName.trim() !== '')
      .filter(item => item.firstName.toLowerCase().includes(this.state.searchTerm.toLowerCase()));

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = filteredTable.slice(start, end);

    const totalPages = Math.ceil(paginatedItems.length / itemsPerPage);

    //   for (let i = 1; i <= totalPages; i++) {
    //     if (paginatedItems.length >=3) {
    //    this.pagiRef.current.innerHTML = `< button className="py-2 px-5 bg-sky-500 text-white font-semibold rounded shadow-md"  onClick={() => this.page(i)} >{i}</button>`};
    // }
   


    const currentEntry = paginatedItems[this.state.cle];

    return (
      <div>
        <div className="flex justify-between sm:mx-24 mx-5 mt-5">
          <Input_recherche Recuperedonne={this.props.Recuperedonne} onChange={this.handlechange} />
          <Button_ajouter 
             // ref="buttonAjouter" 
          ref={this.inputRef}
          Partagedonne={this.props.Partagedonne} 
          toggleModal={this.props.toggleModal}
          Modal={this.props.Modal} 
          updateData={this.props.updateData} 
         
          />
        </div>
        <div className="flex justify-center w-full mt-10">
          <table className="border-collapse border border-slate sm:w-4/5 w-full">
            <thead>
              <tr>
                <th className="border border-slate text-center">Tache</th>
                <th className="border border-slate text-center">Description</th>
                <th className="border border-slate text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedItems.map((item, index) => (
                <tr className="hover:bg-gray-100" key={index}>
                  <td className="border border-slate text-center ">{item.firstName}</td>
                  <td className="border border-slate text-center">{item.lastName}</td>
                  <td className="border border-slate text-center">
                    <div className='flex gap-2 justify-center'>
                      <div>
                        <button onClick={() => this.buttonModal(index)}>
                          <FaRegEye />
                        </button>
                      </div>
                      <div>
                        {this.state.Modal && currentEntry && (
                          <div className="fixed inset-0 top-0 w-full flex justify-center bg-black bg-opacity-50">
                            <div className="bg-white sm:w-3/12 w-5/6 h-2/3 rounded-lg mt-5">
                              <div className="text-end">
                                <button onClick={() => this.buttonModal()} className="m-3 mb-0 p-2 text-right bg-slate-200 rounded-lg hover:bg-slate-400">
                                  <IoMdClose className='w-5' />
                                </button>
                              </div>
                              <h2 className="text-lg text-[#093545] text-start font-bold bg-sky-300 rounded p-2 mt-3 shadow">Informations</h2>
                              <div>
                                <p className="text-start m-5 ml-12 font-bold">Étudiant {this.state.cle + 1}</p>
                                <div>
                                  <table className="border-collapse border border-slate sm:w-4/5 w-full">
                                    <thead>
                                      <tr>
                                        <th className="border border-slate text-center">Nom</th>
                                        <th className="border border-slate text-center">Prénom</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="border border-slate text-center">{currentEntry.firstName}</td>
                                        <td className="border border-slate text-center">{currentEntry.lastName}</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div>
                        <button onClick={() => this.enableEditMode(item, index)}>
                          <MdMode />
                        </button>
                      </div>
                      <div>
                        <button onClick={() => this.delete(item, index)}>
                          <RiDeleteBin5Line />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
          <div className="flex gap-3 justify-center mt-12" >

           <button
          className="py-2 px-5 bg-sky-500 text-white font-semibold rounded shadow-md"
          onClick={() => this.page(this.state.page1 - 1)}
          disabled={this.state.page1 === 1}
          style={{ display: filteredTable.length >= 6 ? 'block' : 'none' }}
        >
         Next
        </button>
        <button
          className="py-2 px-5 bg-sky-500 text-white font-semibold rounded shadow-md"
          onClick={() => this.page(this.state.page1 + 1)}
          style={{ display: filteredTable.length >= 6 ? 'block' : 'none' }}


        >
         Suivant
        </button>

          </div>

      </div>
    )
  }
}

export default Table;

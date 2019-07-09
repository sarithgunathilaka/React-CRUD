import React, { Component } from 'react'
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'


export default class Students extends Component {
    
    
    constructor(props){
        super(props);
        this.state={
          title: 'Add New Student',
          act: 0,
          index: '',
          studentArray: [],
        }
      } 
    componentDidMount(){
        this.refs.firstName.focus();
    }

    Submit = (e) =>{
        e.preventDefault();
        console.log('try');
    
        let datas = this.state.studentArray;
        let firstName = this.refs.firstName.value;
        let lastName = this.refs.lastName.value;
    
        if(this.state.act === 0){   //new
          let data = {
            firstName, lastName
          }
          datas.push(data);
        }else{                      //update
          let index = this.state.index;
          datas[index].firstName = firstName;
          datas[index].lastName = lastName;
        }    
    
        this.setState({
            studentArray: datas,
          act: 0
        });
    
        this.refs.myForm.reset();
        this.refs.firstName.focus();
        console.log(datas);
      }

    Remove = (i) => {
        //console.log('remove', datas);
        let datas = this.state.studentArray;
        datas.splice(i,1);
        this.setState({
            studentArray: datas
        });
    
        this.refs.myForm.reset();
        this.refs.firstName.focus();
    }
    
    Edit = (i) => {
        let data = this.state.studentArray[i];
        this.refs.firstName.value = data.firstName;
        this.refs.lastName.value = data.lastName;
    
        this.setState({
          act: 1,
          index: i
        });
    
        this.refs.firstName.focus();
    } 
    
    render() {
        let datas = this.state.studentArray;
        
        return (
            <div className = "App container">
                <Table>
                    <thead>
                     <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    {datas.map((data, i) =>
                        <tr key={i} className="myList">
                            <td>{i+1}</td> 
                            <td>{data.firstName}</td> 
                            <td>{data.lastName}</td> 
                            <td>
                                <button onClick={()=>this.Remove(i)} className="btn-danger">Delete</button>
                                <button onClick={()=>this.Edit(i)} className="btn-secondary">Edit</button>
                            </td>
                        </tr>
                    )}
                </Table>

                <h2>{this.state.title}</h2>


                <form ref="myForm" className="myForm">
                    <input type="text" ref="firstName" placeholder="Enter First Name" className="formField" />
                    <input type="text" ref="lastName" placeholder="Enter Last Name" className="formField" />
          
                    <button onClick={(e)=>this.Submit(e)} className="btn-primary">submit </button>
                </form>
        
              
            </div>
    );

        
    }       
}

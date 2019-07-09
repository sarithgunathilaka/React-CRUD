import React, { Component } from 'react'
import { Table } from 'reactstrap'


export default class Courses extends Component {
    
    
    constructor(props){
        super(props);
        this.state={
          title: 'Create New Course',
          act: 0,
          index: '',
          datas: [
              {
                name: "Javascript", 
                details: "20"
              },
              {
                name: "Python", 
                details: "10"
            }
          ],
        }
    } 

    componentDidMount(){
        this.refs.name.focus();
    }

    Submit = (e) =>{
        e.preventDefault();
        
    
        let datas = this.state.datas;
        let name = this.refs.name.value;
        let details = this.refs.details.value;
    
        if(this.state.act === 0){   //new
          let data = {
            name, details
          }
          datas.push(data);
        }else{                      //update
          let index = this.state.index;
          datas[index].name = name;
          datas[index].details = details;
        }    
    
        this.setState({
          datas: datas,
          act: 0
        });
    
        this.refs.myForm.reset();
        this.refs.name.focus();
       
        //Store in localstorage
        localStorage.setItem("names", (datas));
        console.log('datas', this.state.datas)
        console.log('local', localStorage.names)
    }

    //Delete Course
    Remove = (i) => {
       const datas = this.state.datas;
        datas.splice(i,1);
        this.setState({
          datas: datas
        });
    
        this.refs.myForm.reset();
        this.refs.name.focus();
    }
    
    //Edit Course
    Edit = (i) => {
        let data = this.state.datas[i];
        this.refs.name.value = data.name;
        this.refs.details.value = data.details;
    
        this.setState({
          act: 1,
          index: i
        });
    
        this.refs.name.focus();
    } 
    
    //Display Data
    render() {
        let datas = this.state.datas;
        return (
            <div className = "App container">
                <Table>
                    <thead>
                     <tr>
                        <th>#</th>
                        <th>Course Name</th>
                        <th>Course Details</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    {/*JS Higher Order Map function to display data*/}
                    {datas.map((data, i) =>
                        <tr key={i} className="myList">
                            <td>{i+1}</td> 
                            <td>{data.name}</td> 
                            <td>{data.details}</td> 
                            <td>
                                <button onClick={()=>this.Remove(i)} className="btn-danger">Delete</button>
                                <button onClick={()=>this.Edit(i)} className="btn-secondary">Edit</button>
                            </td>
                        </tr>
                    )}
                </Table>
                <h2>{this.state.title}</h2>
                <form ref="myForm" className="myForm">
                    <input type="text" ref="name" placeholder="Enter Course Name" className="formField" />
                    <input type="text" ref="details" placeholder="Enter Course Details" className="formField" />
                    <label>Select Students</label>
                    <select>
                        <option value="tom">Tom</option>
                        <option value="jack">Jack</option>
                        <option selected value="peter">Peter</option>
                        <option value="john">John</option>
                    </select>
                    
          
                    <button onClick={(e)=>this.Submit(e)} className="btn-primary">submit </button>
                </form>
            </div>
        );
    }       
}

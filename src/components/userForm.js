import React, { Component } from 'react';
import UserList from './userList';
import  {ADD,UPDATE,DELETE} from '../actions/action'
import {connect} from 'react-redux'
import './userList.css'

class UserForm extends Component{
    state = {
       users:[
          {firstName:'xxx', lastName:'yyy', email:'sample@gmail.com', phoneNo:99753, giturl:'url', country:'abc', isEdit: false}
        ]
      };
      addUser = (newUser) => {
            let users = [...this.state.users, newUser];
            this.setState({users});  
            console.log(this.state.users.lastName)   
      }
      pressEditBtn = (i) => {
        let users = this.state.users;
        users[i].isEdit = true;
        this.setState({users});
      }
      updateUser = (i, firstName,lastName,email,phoneNo,giturl,country) => {
         let users = this.state.users;
         users[i].firstName = firstName;
         users[i].lastName = lastName;
         users[i].email = email;
         users[i].phoneNo = phoneNo;
         users[i].giturl = giturl;
        //  users[i].country=country;
         users[i].isEdit = false;
          this.setState({users});
        }
       pressDelete = (i) => {
        let users = this.state.users.filter((u,index)=>{
            return index !== i;
        });
        if(window.confirm("Do u want to delete ?"))
        this.setState({users});
      }
    render(){
        return(
            <div>
                < UserList  allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} addUser={this.addUser}/>
            </div>
          );
    }
}
const mapStateToProps = state => {
  return {
    users : state.users
  }
}

const mapDispachToProps = dispatch => {
  return {
    
    addUser : () => dispatch(ADD()),
    updateUser : () => dispatch(UPDATE()),
    pressDelete : () => dispatch(DELETE())
  };
};

export default connect(mapStateToProps,mapDispachToProps)(UserForm)
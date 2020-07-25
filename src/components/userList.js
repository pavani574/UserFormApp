import React, { Component } from 'react';
import './userList.css'

class UserList extends Component{ 
    state = {
        firstName:'', lastName:'', email:'', phoneNo:'', giturl:'',gender:'', isEdit:false
    }
    handleUpdate = () => {
        this.props.updateUser(this.indexNum, this.firstName.value, this.lastName.value,this.email.value,this.phoneNo.value,this.giturl.value);
    }
    onClick = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);  
        this.setState({firstName:'', lastName:'', email:'', phoneNo:'', giturl:''})
    }
    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }
    render(){
         const {allUsers, pressEditBtn, pressDelete} = this.props;
         const usersList = allUsers.map((user, index) => {
              return user.isEdit === true ? (
                <tr  key={index}>
                  <td><input type="text" ref={(val) => {this.firstName = val}} required defaultValue={user.firstName}/></td>
                  <td><input type="text" ref={(val) => {this.lastName = val}} required defaultValue={user.lastName}/></td>
                  <td><input type="text" ref={(val) => {this.email = val}} required defaultValue={user.email}/></td>
                  <td><input type="text" ref={(val) => {this.phoneNo = val}} required defaultValue={user.phoneNo}/></td>
                  <td><input type="text" ref={(val) => {this.giturl = val}} required defaultValue={user.giturl}/></td>
                  {/* <td><input type="text" ref={(val) => {this.country = val}} required defaultValue={user.country}/></td> */}
                  <td><input type="button" value="Update" onClick={this.handleUpdate} ref={() => {this.indexNum = index}}/></td>
                </tr>  
                ) : (
                  <tr  key={index}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNo}</td>
                    <td>{user.giturl}</td>
                    {/* <td>{user.country}</td> */}
                    <td><button onClick={() => pressEditBtn(index)}>Edit</button> <button onClick={()=>pressDelete(index)}>Delete</button></td>
                  </tr>
            );
        });
       return(
            <div align="center"><h1>USER FORM</h1>
             first Name:<input name="firstName" value={this.state.firstName} onChange={this.onChange}/><br/><br/>
             last Name:<input name="lastName" value={this.state.lastName} onChange={this.onChange}/><br/><br/>
             email:  <input name="email" value={this.state.email} onChange={this.onChange}/><br/><br/>
             phone No: <input name="phoneNo" value={this.state.phoneNo} onChange={this.onChange}/><br/><br/>
             giturl:  <input name="giturl" value={this.state.giturl} onChange={this.onChange}/><br/><br/>
             {/* Country: <select name = "country" value={this.state.country} onChange={this.onChange}>
                          <option value = "country">country</option>
                          <option value = "India">India</option>
                          <option value = "USA">USA</option>
                          <option value = "Australia">Australia</option>
                          <option value = "Italy">Italy</option>
                          <option value = "China">China</option>
                       </select><br/><br/> */}
             <button onClick={this.onClick} className="Add">SUBMIT</button>
             <h1>DISPLAY TABLE</h1>
             <table className="Box" align="center">
                <thead>
                    <tr>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>EMAIL</th>
                    <th>PHONE NO</th>
                    <th>GIT URL</th>
                    {/* <th>COUNTRY</th> */}
                    <th>ACTIONS</th>
                    </tr>
                 </thead>
                 <tbody>{usersList}</tbody>
              </table>
            </div> 
        );
    }
}
export default UserList
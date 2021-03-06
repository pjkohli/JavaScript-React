// Create and render a react component that lists the names and ages below, and put a "delete" button next to each that removes it from the list. NB - react is not installed, feel free include it however you wish. Additonally, you may use any file/folder structure you feel comfortable with. 

//const workers = [{ name: 'joe', age: 24 }, { name: 'simon', age: 27 }, { name: 'damien', age: 52 }, { name: 'euan', age: 23 }];

// The program below is attempted to diplay list and button. Delete button functionality is not fully implemented.

import React from 'react';

class App extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: 
         [
            { 
               "name": "joe", 
               "age": "24" 
            }, 
            { 
               "name": "simon", 
               "age": "27" 
            }, 
            { 
               "name": "damien", 
               "age": "52" 
            }, 
            { 
               "name": "euan", 
               "age": "23" 
            }
         ]
      }

      this.deleteRow = this.deleteRow.bind(this);
   };

//deleteRow still needs to be implemented.
// One case could be whether to pass an argument in delete function.
//Or array can be deleted using splice method. But splice method uses index which needs to be fixed
   deleteRow() {
      // Changes can be made made in array 
		//var myArray = this.state.data;
      //var index;
      //myArray.splice(index,1);
      //The changed array can be stored back
		//this.setState({data: myArray})
   };


   render() {
      return (
         <div>
            <Header/>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
            <td><button onClick ={this.deleteRow}>DELETE</button></td>
         </tr>
      );
   }
}

export default App;

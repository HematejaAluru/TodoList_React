import logo from './logo.svg';
import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
import ListItems from './ListItems';
/*
var mysql = require('mysql')
var connection = mysql.createConnection({
  host:'localhost',
  user:'',
})
*/
class App extends React.Component{
  constructor(props){
    super(props);
      this.state={
        items:[],
        currentitem:{
          text:"",
          key:""
        }

      }
    this.handleinput=this.handleinput.bind(this);
    this.additem=this.additem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
  
  }
  deleteItem(key){
    const filteredItems=this.state.items.filter(item=>item.key!==key)
    this.setState({
      items:filteredItems
    })
  }
  handleinput(e){
    this.setState({
      currentitem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  additem(e){
    e.preventDefault();
    const newitem=this.state.currentitem;
    if(newitem.text!==""){
      const newitems=[...this.state.items,newitem];
      this.setState({
        items:newitems,
        currentitem:{
          text:"",
          key:''
        }
      })
    }
  }
  render(){
    return (
      <div className="App">
        <header>
          <form id="todoform">
            <input type="text" maxLength="48" placeholder="Enter the text"
            value={this.state.currentitem.text}
            onChange={this.handleinput}/>
            
            <button type="submit" onClick={this.additem}>Add</button>
          </form>
        </header>
        <ListItems items={this.state.items} deleteItem={this.deleteItem}></ListItems>
      </div>
    );
  }
}
export default App;

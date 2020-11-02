import React, {Component} from "react"; 
import axios from "axios";
import './App.css';
import ContactList from './components/contact-list/contact-list';

export default class App extends Component {
  componentDidMount(){
    if (localStorage.getItem('loaded') === null){
      axios.get('http://demo.sibers.com/users').then(result => {
        localStorage.setItem('users', JSON.stringify(result.data));
        localStorage.setItem('loaded', 'true');
            });
    }
    //delete after test
    console.log(JSON.parse(localStorage.getItem('users')));
  };
  render(){
    return (
      <div className="App">
        <header className="App-header">
          Contact book
        </header>
        <ContactList />
      </div>
    );
  }
}

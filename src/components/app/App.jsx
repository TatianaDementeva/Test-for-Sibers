import React, {Component} from "react"; 
import axios from "axios";
import './App.css';
import ContactList from '../contact-list/contact-list';

export default class App extends Component {
  state = {
      loaded: false
  }

  componentDidMount() {
    if (localStorage.getItem('loaded') === null){
      axios.get('http://demo.sibers.com/users').then(result => {
        localStorage.setItem('users', JSON.stringify(result.data));
        localStorage.setItem('loaded', 'true');
        this.setState({loaded: true});
      });
    }
    if (localStorage.getItem('loaded') === 'true'){
      this.setState({loaded: true});
    }
  }

  render(){
    const loaded = this.state.loaded;
    return (
      <div className="App">
        <header className="App-header">
          Contact book
        </header>
        {loaded &&
        <ContactList />
        }
      </div>
    );
  }
}

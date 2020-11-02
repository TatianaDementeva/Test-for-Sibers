import React, {Component} from 'react';
import Contact from '../contact/contact';

export default class ContactList extends Component {

    compareAlphabetically(a, b, order){
        if (a.name > b.name)
            return (order === 'asc') ? 1 : -1;
        if (a.name < b.name)
            return (order === 'asc') ? -1 : 1;
        // a=b
        return 0;
    }
    render(){
        const users = JSON.parse(localStorage.getItem('users'));
        console.log(users[0].name);

        //sort users alphabetically ascending or descending
        users.sort((a, b) => this.compareAlphabetically(a, b, 'asc'));
        return(
            <div className='contact-list'>
                {users.map(element => <Contact user={element} key={element.id} />)}
            </div>
        )
    }
}
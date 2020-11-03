import React, {Component} from 'react';
import Contact from '../contact/contact';
import './contact-list.css';
import filterIcon from '../../assets/filter.svg';

export default class ContactList extends Component {
    constructor(props){
        super(props);
        this.state = {
            order: 'asc',
            users: JSON.parse(localStorage.getItem('users'))
        }
    }

    compareAlphabetically = (a, b, order) => {
        if (a.name > b.name)
            return (order === 'asc') ? 1 : -1;
        if (a.name < b.name)
            return (order === 'asc') ? -1 : 1;
        // a=b
        return 0;
    }

    onChangeOrder = () => {
        const order = this.state.order;

        if (order === 'asc'){
            this.setState({order: 'desc'})
        } else {
            this.setState({order: 'asc'})
        }
    }
    
    updateUsers = () => {
        const users = JSON.parse(localStorage.getItem('users'));
        this.setState({users: users});
    }

    createClassName = (firstClass) => {
        const order = this.state.order;
        var className;

        if (order === 'asc'){
            className = firstClass;
        }
        if (order === 'desc'){
            className = `selected ${firstClass}`
        }
        return className;
    }

    render(){
        const {order, users} = this.state;
        users.sort((a, b) => this.compareAlphabetically(a, b, order));
        const className = this.createClassName('sort-icon');

        return(
            <div className='contact-list'>
                <div className='contact-list__sort' >
                    <img 
                        src={filterIcon} 
                        alt="sort" 
                        className={className} 
                        onClick={this.onChangeOrder}  
                    />
                </div>
                {users.map(user => <Contact 
                                        user={user} 
                                        key={user.id} 
                                        updateUsers={this.updateUsers} 
                                    />)
                }
            </div>
        )
    }
}
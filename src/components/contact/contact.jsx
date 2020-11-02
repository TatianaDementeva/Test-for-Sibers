import React, {Component} from 'react';

export default class Contact extends Component{
    
    render(){
        const user = this.props.user;

        return(
            <div className='contact' id={user.id}>
                <div className='name'>
                    {user.name}
                </div>
                <div className='photo'>
                    {user.avatar}
                </div>
            </div>
        )
    }
}
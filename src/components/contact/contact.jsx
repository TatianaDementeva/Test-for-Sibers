import React, {Component} from 'react';
import axios from 'axios';
import './contact.css';
import userIcon from '../../assets/user.svg';

export default class Contact extends Component{
    state = {
        user: null,
        showAllInfo: false
    }
    componentDidMount(){
        //const user = this.props.user;
        // console.log('user', user);
        //this.setState({user});
        // axios.get(user.avatar).then(result => {
        //     // if(result.status === 404){
        //     //     user.avatar = result.data;
        //     //     console.log('ok',user)
        //     //     this.setState({user: user});
        //     // }else{
        //     //     user.avatar = userIcon;
        //     //     console.log(user);
        //     //     this.setState({user: user});
        //     // }
        //     console.log('status', result.status);
        //     this.setState({user: user});
        // });
        console.log('did mount');
    }

    showAllInfo = () => {
        console.log('show all');
        const {showAllInfo} = this.state;
        this.setState({showAllInfo: !showAllInfo});
    }
    render(){
        const user = this.props.user;
        const {showAllInfo} = this.state;
        //const user = this.state.user;
        console.log('user', user);
        //var avatar = user.avatar;
        // axios.get(user.avatar).then(result => avatar=result);
        // console.log('avatar', avatar);
        return(
            <>
            <div className='contact' id={user.id} onClick={this.showAllInfo}>
                <img src={user.avatar} alt="avatar" className='contact__avatar' />
                <div className='contact__name'>
                    {user.name}
                </div>
            </div>
            {showAllInfo && (
                <div className='contact-info'>
                    <div className='info'>
                        <div className='info__label'>Phone:</div>
                        <div className='info__data'>{user.phone}</div>
                    </div>
                    <div className='info'>
                        <div className='info__label'>Email:</div>
                        <div className='info__data'>{user.email}</div>
                    </div>
                    <div className='info'>
                        <div className='info__label'>Nickname:</div>
                        <div className='info__data'>{user.username}</div>
                    </div>
                    <div className='info'>
                        <div className='info__label'>Website:</div>
                        <div className='info__data'>{user.website}</div>
                    </div>
                    <div className='info'>
                        <div className='info__label'>Work:</div>
                        <div className='info__data'>{user.company.name}</div>
                    </div>
                </div>
            )

            }

            </>
        )
    }
}
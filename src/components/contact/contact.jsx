import React, {Component} from 'react';
import './contact.css';
import editIcon from '../../assets/edit.svg';

export default class Contact extends Component{

    constructor(props) {
        super(props);
      
        this.state = {
            user: props.user,
            oldUser: Object.assign({}, props.user),
            showAllInfo: false,
            isEditMode: false
        }
    }

    clickOnContact = (event) => {
        const target = event.target;
        if (target.classList.contains('contact__edit') || target.classList.contains('edit-icon')){
            this.setState({isEditMode: true, showAllInfo: true});
        } else{
            //This IF prevents the info section from collapsing when editing the name contact
            if(this.state.isEditMode === true){
                return;
            }
            const {showAllInfo} = this.state;
            this.setState({showAllInfo: !showAllInfo});
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const user = this.state.user;

        if (target.name === 'company.name'){
            const newCompany = user.company;
            newCompany.name = target.value;
            user.company = newCompany;
        }else{
            user[target.name] = target.value;
        }
        this.setState({user: user});
    }

    clickOnButtons = (event) => {
        const target = event.target;
        
        if (target.name === 'edit'){
            const users = JSON.parse(localStorage.getItem('users'));
            const newUser = this.state.user;
            const user = users.find(user => user.id === newUser.id);
            const index = users.indexOf(user, 0);

            users.splice(index, 1, newUser);

            localStorage.removeItem('users');
            localStorage.setItem('users', JSON.stringify(users));

            this.setState({
                oldUser: Object.assign({}, newUser),
                isEditMode: false,
                showAllInfo: true
            });

            this.props.updateUsers();
        }else {
            this.setState({
                user: Object.assign({}, this.state.oldUser),
                isEditMode: false,
                showAllInfo: true
            })
        }
    }

    render(){
        const {showAllInfo, isEditMode, user} = this.state;

        return(
            <>
            <div className='contact' id={user.id} onClick={this.clickOnContact}>
                <img src={user.avatar} alt="avatar" className='contact__avatar' />
                <div className='contact__name'>
                    {!isEditMode 
                        ? user.name 
                        : <input 
                            type='text' 
                            name="name" 
                            onChange={this.handleInputChange} 
                            value={user.name}/>
                    }
                </div>
                {!isEditMode &&
                    <div className='contact__edit'>
                        <img src={editIcon} alt="edit" className='edit-icon' />
                    </div>
                }
            </div>
            {showAllInfo && (
                <div className='contact-info'>
                    <div className='info'>
                        <div className='info__label'>Phone:</div>
                        <div className='info__data'>
                            {!isEditMode 
                                ? user.phone 
                                : <input 
                                    type='text' 
                                    name="phone"
                                    className='input-data' 
                                    onChange={this.handleInputChange} 
                                    value={user.phone}/>
                            }
                        </div>
                    </div>
                    <div className='info'>
                        <div className='info__label'>Email:</div>
                        <div className='info__data'>
                            {!isEditMode 
                                ? user.email 
                                : <input 
                                    type='text' 
                                    name="email" 
                                    className='input-data'
                                    onChange={this.handleInputChange} 
                                    value={user.email}/>
                            }
                        </div>
                    </div>
                    <div className='info'>
                        <div className='info__label'>Nickname:</div>
                        <div className='info__data'>
                            {!isEditMode 
                                ? user.username 
                                : <input 
                                    type='text' 
                                    name="username"
                                    className='input-data' 
                                    onChange={this.handleInputChange} 
                                    value={user.username}/>
                            }
                        </div>
                    </div>
                    <div className='info'>
                        <div className='info__label'>Website:</div>
                        <div className='info__data'>
                            {!isEditMode 
                                ? user.website 
                                : <input 
                                    type='text' 
                                    name="website"
                                    className='input-data' 
                                    onChange={this.handleInputChange} 
                                    value={user.website}/>
                            }
                        </div>
                    </div>
                    <div className='info'>
                        <div className='info__label'>Work:</div>
                        <div className='info__data'>
                            {!isEditMode 
                                ? user.company.name 
                                : <input 
                                    type='text' 
                                    name="company.name"
                                    className='input-data'
                                    onChange={this.handleInputChange} 
                                    value={user.company.name}/>
                            }
                        </div>
                    </div>

                    {isEditMode && (
                        <div className='buttons'>
                            <input
                                className="buttons__edit buttons_style"
                                type="submit"
                                name="edit"
                                onClick={this.clickOnButtons}
                                value="Edit contact"
                            />
                            <input
                                className="buttons__cancel buttons_style"
                                type="submit"
                                name="cancel"
                                onClick={this.clickOnButtons}
                                value="Cancel"
                            />
                        </div>
                    )}
                </div>
            )}
            </>
        )
    }
}
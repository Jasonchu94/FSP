import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class NavBarDropdown extends React.Component{
    constructor(props) {
        super(props); 
        this.state = {
            dropdown: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.toggledrop = this.toggledrop.bind(this);
    }

    handleClick(){
        document.getElementById('dropdown-container').className='show';
    }
    handleBlur(){
        document.getElementById('dropdown-container').className='clear';
    }
    toggledrop(){
        if (this.state.dropdown === false) {
        return this.setState({dropdown: true})
    }else {return this.setState({dropdown:false})}
    }

    render (){
        const {currentUser} = this.props
        let image = "▼"
        let profile = window.pepeprofile
        if (this.props.icon) {
            image = <img className='profile-pic' src={window.profile}></img>
            profile=null
        }
        if (currentUser){
                return(
                        <div className='dropdown-arrow'>
                            {this.props.icon ? null :<img className='profile-pic' src={window.profile}></img>}
                            <button className='dropdown-marker' onClick={this.toggledrop} >{image}  
                            </button>
                                <div id='dropdown-container' className='dropdown-container' onMouseOut={this.toggledrop}className={this.state.dropdown ? "show" : 'clear'} >
                                    <div className='dropdown-box' onBlur={this.handleBlur}>
                                        <img className='profile-pic' src={window.profile}></img>
                                        <li className='profile-name'>
                                            {currentUser.first_name.charAt(0).toUpperCase() + currentUser.first_name.slice(1)} {currentUser.last_name.charAt(0).toUpperCase() + "."}
                                        </li>                            
                                    </div>
                                       
                                    <div className='dropdown-container2'>
                                        <span>About Me</span>
                                                <br></br>
                                        <span>Settings</span>
                                                <br></br>
                                                <hr></hr>
                                        <button className='dropdown-logout' onClick={this.props.logout}>Logout</button>
                                    </div>

                                </div>
                                
                                 
                        </div>

                )

            }
            else {
                return(
                    <div className='business-login-signup'>
                        <Link to='/login'>
                            <button className='business-login-button'>Login</button>
                        </Link>
                        &nbsp;&nbsp;&nbsp;
                        <Link to='/signup'>
                            <button className='business-signup-button'>Sign Up</button>
                        </Link>


                    </div>
                )
            }
        
    }
}

export default NavBarDropdown;
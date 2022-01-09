import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class NavBarDropdown extends React.Component{
    constructor(props) {
        super(props); 
        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleClick(){
        document.getElementById('dropdown-container').className='show';
    }
    handleBlur(){
        document.getElementById('dropdown-container').className='clear';
    }

    render (){
        const {currentUser} = this.props
        let image = "▼"
        let profile = window.pepeprofile
        if (this.props.icon) {
            image = <img className='profile-pic' src={window.profile}></img>
            profile=''
        }
        if (currentUser){
                return(
                        <div className='dropdown-container' onBlur={this.handleBlur}>
                            <img className='profile-pic' src={window.profile}></img>
                            <button onClick={this.handleClick} onBlur={this.handleBlur}>{image}    
                                <div id='dropdown-container' className='dropdown-container' className='clear'>
                                    <div>
                                        <img className='profile-pic' src={profile}></img>
                                        <li className='profile-name'>
                                            {currentUser.first_name.charAt(0).toUpperCase() + currentUser.first_name.slice(1)} {currentUser.last_name.charAt(0).toUpperCase() + "."}
                                        </li>                            
                                    </div>
                                        <hr></hr>
                                    <div className='drowndown-container2'>
                                        <span>About Me</span>
                                                <br></br>
                                        <span>Settings</span>
                                                <br></br>
                                                <hr></hr>
                                        <span onClick={this.props.logout}>Logout</span>
                                    </div>

                                </div>
                                
                                 
                            </button>
                        </div>

                )

            }
            else {
                return(
                    <div>
                        <Link to='/login'>
                            <button className='login-button'>Login</button>
                        </Link>
                        <Link to='/signup'>
                            <button className='signup-button'>Sign Up</button>
                        </Link>


                    </div>
                )
            }
        
    }
}

export default NavBarDropdown;
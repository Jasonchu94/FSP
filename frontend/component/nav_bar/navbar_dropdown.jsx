import React from 'react';
import { withRouter } from 'react-router';

class NavBarDropdown extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            show: false
        }
        this.focus = this.focus.bind(this);
    }

    focus(e){
        const oppo = !this.state.show
        this.setState({show: oppo})
    }
    render (){
        const {currentUser} = this.props
        let image = "▼"
        let profile = window.profile
        if (this.props.icon) {
            image = <img className='profile-pic' src={window.profile}></img>
            profile = '';
        }
        return(

            <div className='dropdown-container'>
                <button className='dropdown-button'onFocus={this.focus} onBlur={this.focus}>{image}
                    <ul onClick={e =>e.stopPropagation()} className={this.state.show ? 'show' : 'clear'}>
                        <div className='dropdown-container'>
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
                    
                    </ul>
                </button>
            </div>
        )
    }
}

export default NavBarDropdown;
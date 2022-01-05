import React from 'react';

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
        return(

            <div>
                <button onFocus={this.focus} onBlur={this.focus}>▼
                    <ul onClick={e =>e.stopPropagation()} className={this.state.show ? 'show' : 'clear'}>
                        <div className='dropdown-container'>
                            <img className='profile-pic' src={window.profile}></img>
                            <li>
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
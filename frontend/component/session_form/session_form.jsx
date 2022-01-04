import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this)
    }

    componentWillUnmount(){
        this.props.receiveErrors([])

    }

    update(field){
        return e => this.setState({ 
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.action(user)
    }

    demoLogin(e){
        e.preventDefault();
        let demoUser = {
            email: "demo_user@aa.com",
            password: "demo123",
        }
        this.props.demoLogin(demoUser)
    }
    showErrors(){
        
        return(
                <ul>
                    {this.props.errors.map((error,i) =>(
                        <li key={i}>
                            {error}
                        </li>
                    ))}
                </ul>
            )
    }
    
    render(){

        if (this.props.formType === 'Log in'){
            return(
                <div> 
                    <div className='top-home-bar'> 
                        <Link to='/'> <img className="yep-logo" src={window.yeplogo}/> </Link>
                    </div>
                    <span className='login-errors'>{this.showErrors()}</span>
                    <div className='login-picture-form-container'>

                        <div className="login-form-container">
                            <span>
                                {this.props.formType} to Yep    
                            </span>
                            <span>
                                New to Yelp? {this.props.navLink}   
                            </span>
                            <div className="demo-user">
                                    <button className='demo-button' onClick={this.demoLogin}>Login with Demo</button>
                            </div>
                            <span className='or-divider'>OR</span>
                            <div>
                                
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Email:
                                    <input
                                        type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        placeholder='email' />
                                </label>
                                <br></br>
                                <label>
                                    Password:
                                    <input
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        placeholder='password' />
                                </label>
                                <br></br>
                                <button className="loginButton" type='submit'>Log In</button>
                            </form>
                        </div>
                        <div className='login-right'>
                                <img className='login-pic' src={window.loginpic}/>
                        </div>
                    </div>

                </div>
            )
        } else if(this.props.formType === "Sign Up"){
            return(
                <div>
                    <div className='top-home-bar'> 
                        <Link to='/'> <img className="yep-logo" src={window.yeplogo}/> </Link>
                    </div>
                    <span className='login-errors'>{this.showErrors()}</span>
                        <div className="signup-form-container">
                            <br/>
                            <div className='form-for-login'>
                                <span>Sign up for Yelp</span>
                                <br></br>
                                <span>Connect with great local businesses</span>
                                    <div className="demo-user">
                                        <button className='demo-button' onClick={this.demoLogin}>Login with Demo</button>
                                    </div>
                                
                                <form onSubmit={this.handleSubmit}>
                                <div className='login-form'>
                                <label>
                                        First name:
                                        <input
                                            type="text"
                                            value={this.state.first_name}
                                            onChange ={this.update('first_name')}
                                            placeholder='first'
                                        />
                                    </label>
                                    <label>
                                        Last name:
                                        <input
                                            type="text"
                                            value={this.state.last_name}
                                            onChange ={this.update('last_name')}
                                            placeholder='last'
                                        />
                                    </label>
                                    <label>
                                        Email:
                                        <input
                                            type="text"
                                            value={this.state.email}
                                            onChange={this.update('email')}
                                            placeholder='email' />
                                    </label>
                                    <label>
                                        Password:
                                        <input
                                            type="password"
                                            value={this.state.password}
                                            onChange={this.update('password')}
                                            placeholder='password' />
                                    </label>
                                    <label>
                                        Birthday:
                                        <input
                                            type="date"
                                            value={this.state.birthday}
                                            onChange ={this.update('birthday')}
                                        />
                                    </label>
                                    </div>
                                    <button className='SignupButton' type='submit'>Sign Up</button>
                                </form>
                                <span>Already on YEP? {this.props.navLink}</span>

                            </div>

                            <div className='login-right'>
                                <img className='login-pic' src={window.loginpic}/>
                            </div>

                        </div>
                </div>

            )
        }
  
    
    }
}

export default SessionForm;
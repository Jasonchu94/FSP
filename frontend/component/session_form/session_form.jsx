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
            email: "demo_user1@aa.com",
            password: "demo123",
        }
        this.props.demoLogin(demoUser)
    }
    showErrors(){
        
        return(
                <ul>
                    {this.props.errors.map((error,i) =>(
                        <li className='login-errors' key={i}>
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
                        <Link to='/'> <img className="yep-logo" src={window.yeplogowhite}/> </Link>
                    </div>
                    <span className='login-errors'>{this.showErrors()}</span>
                    <div className='login-picture-form-container'>

                        <div className="login-form-container">
                            <span className='login1'>
                                {this.props.formType} to Yep    
                            </span>
                            <span className='login2'>
                                New to Yep? {this.props.navLink}   
                            </span>
                            <div className="demo-user">
                                    <button className='demo-button' onClick={this.demoLogin}>Demo User</button>
                            </div>
                            <div className='or-divider'>
                            -------------- OR --------------                                
                            </div>
                            <form className='login-form'onSubmit={this.handleSubmit}>
                                <input
                                        type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        placeholder='Email' />
                                <br></br>
                                
                        
                                    <input
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        placeholder='Password' />
                                <br></br>
                                <button className="login-button" type='submit'>Log In</button>
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
                                <span className='signup1'>Sign up for Yelp</span>                                
                                <span className='signup2'>Connect with great local businesses</span>
                                <div className="demo-user">
                                    <button className='demo-button' onClick={this.demoLogin}>Login with Demo</button>
                                </div>       
                                                            
                                <div className='or-divider'>
                                -------------- OR --------------                                
                                </div>   
                                                               
                                <form onSubmit={this.handleSubmit}>
                                <div className='signup-form'>
                                    
                                      
                                            <input
                                                type="text"
                                                value={this.state.first_name}
                                                onChange ={this.update('first_name')}
                                                placeholder='First Name'
                                            />

                                    <br></br>
                                    
                                      
                                            <input
                                                type="text"
                                                value={this.state.last_name}
                                                onChange ={this.update('last_name')}
                                                placeholder='Last Name'
                                            />

                                    <br></br>
                                    
                                        
                                            <input
                                                type="text"
                                                value={this.state.email}
                                                onChange={this.update('email')}
                                                placeholder='Email' />

                                    <br></br>
                                    
                                       
                                            <input
                                                type="password"
                                                value={this.state.password}
                                                onChange={this.update('password')}
                                                placeholder='Password' />

                                    <br></br>
                                    
                                       
                                            <input
                                                type="date"
                                                value={this.state.birthday}
                                                onChange ={this.update('birthday')}
                                            />

                                </div>
                                <div className='signup-button-container'>
                                    <button className='signup-button' type='submit'>Sign Up</button>

                                </div>
                                </form>
                                <span className="have-user">Already on YEP? {this.props.navLink}</span>

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
import React from 'react';

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
        let demoUser ={
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

        if (this.props.formType === 'Login'){
            return(
                <div>
                     Please {this.props.formType} or {this.props.navLink}
                    {this.showErrors()}
                    <form onSubmit={this.handleSubmit}>
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
                        <button className="loginButton" type='submit'>Log In</button>
                    </form>
                </div>
            )
        } else if(this.props.formType === "Sign Up"){
            return(
                <div className="login-form-container">
                    <br/>
                    Please {this.props.formType} or {this.props.navLink} or login using our Demo
                        <div className="demo-user">
                            <button className='demo-button' onClick={this.demoLogin}>Login with Demo</button>
                        </div>
                    <div>
                        {this.showErrors()}
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

                        <button className='SignupButton' type='submit'>Sign Up</button>
                    </div>
                </form>

            </div>

            )
        }
  
    
    }
}

export default SessionForm;
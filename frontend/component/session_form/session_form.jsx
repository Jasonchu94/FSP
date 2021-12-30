import React from 'react';

class SessionForm extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => this.setState({ 
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        // const user = Object.assign({}, this.state)
        this.props.action(this.state)
    }

    // showErrors(){
    //     return(
    //         <ul>
    //             {this.props.errors.map(error =>(
    //                 <li>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     )
    // }
    render(){
        
        return(
            <div className="login-form-container">
                <form>
                    Welcome to YEP!
                    <br/>
                    Please {this.props.formType} or {this.props.navLink}
                    {/* {this.showErrors()} */}
                    <br/>
                    <div className='login-form'>
                        <label>
                            Email:
                            <input
                                type="text"
                                value={this.state.email}
                                onChange ={this.update('email')}
                            />
                        </label>
                        <label>
                            Password:
                            <input
                                type="password"
                                value={this.state.password}
                                onChange ={this.update('password')}
                            />
                        </label>

                        <input className="session-submit" type='submit' value={this.props.formType}/>
                    </div>
                </form>

            </div>
        )
    }
}

export default SessionForm;
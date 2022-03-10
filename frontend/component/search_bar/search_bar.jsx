import React from 'react';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class SearchBar extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            find:'',
            near:'',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        
        return e => this.setState({
            [field] : e.currentTarget.value
        })
    }

    handleSubmit(e){
        
        e.preventDefault();
        if (this.state.find === '' && this.state.near === '') {this.props.history.push('/businesses')}
        else{
            this.props.history.push(`/search?find=${this.state.find}near=${this.state.near}`)
        }
    }

    render(){
        return(
            <div>

                <form className={this.props.class ? `${this.props.class}-search-bar` : 'search-bar'}>
                    <div className='find-box'>
                        <span className='find-text'>{ this.props.class? '' : 'Find'}</span>
                        <input className={this.props.class ? 'input-find-nonsplash':'input-field'}type='text' placeholder='nail salons, plumbers, takeout...' onChange={this.update('find')}></input>
                    </div>
                    <div className='near-box'>
                        <span className='near-text'>{ this.props.class? '' : 'Near'}</span>
                        <input className={this.props.class ? 'input-near-nonsplash':'input-near'}type = "text" placeholder='San Jose, CA 95132' onChange={this.update('near')}></input>
                    </div>

                        <button 
                        type='submit' 
                        className='search-submit'
                        onClick={this.handleSubmit}
                        ><img className='glass' src={window.magnifying}></img></button>
                </form>
            </div>
        )
    }
}

export default withRouter(SearchBar);
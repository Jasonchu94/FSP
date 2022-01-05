import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component{

    constructor(props){
        super(props);
    }

    update(field) {
        return e => this.setState({
            [field] : e.currentTarget.value
        })
    }

    render(){
        return(
            <form className='search-bar'>
                <div className='find-box'>
                    <span className='find-text'>Find</span>
                    <input className='input-field'type='text' placeholder='nail salons, plumbers, takeout...'></input>
                </div>
                <div className='near-box'>
                    <span className='near-text'>Near</span>
                    <input className='input-near'type = "text" placeholder='San Jose, CA 95132'></input>
                </div>
                    <button type='submit' className='search-submit'><img className='glass' src={window.magnifying}></img></button>
            </form>
        )
    }
}

export default SearchBar;
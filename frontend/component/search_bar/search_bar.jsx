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
                <span className='input-find'>Find</span>
                <input type='text' placeholder='nail salons, plumbers, takeout...'></input>
                <span className='input-near'>Near</span>
                <input type = "text" placeholder='San Jose, CA 95132'></input>
                <button type='submit' className='search-submit'></button>

            </form>
        )
    }
}

export default SearchBar;
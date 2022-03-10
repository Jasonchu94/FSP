import React from 'react';
import { withRouter } from 'react-router-dom';

class BusinessFilter extends React.Component{

    constructor(props){
        super(props);

        this.priceFilter = this.priceFilter.bind(this);
        this.categoryFilter = this.categoryFilter.bind(this);
    }

    priceFilter(e){
        this.props.history.push(`/search?find=near=price=${e.target.value}`)
        
    }

    categoryFilter(e){
        // debugger
        this.props.history.push(`/search?find=${e.target.value}near=`)
    }

    render(){
        return(
            <div className='filter-container'>
                Filters
                <div className='price-filter'>
                    <button value='$' onClick={this.priceFilter}>$</button>
                    <button value='$$' onClick={this.priceFilter}>$$</button>                   
                    <button value='$$$' onClick={this.priceFilter}>$$$</button>                    
                </div>
               
                <div className='category-filter'>
                    
                    <label for='American'><input type='checkbox' onClick={this.categoryFilter} value='American' id='American'></input>American</label>
                    
                    <label for='Chinese'><input type='checkbox' onClick={this.categoryFilter} value='Chinese'id='Chinese'></input>Chinese</label>
                    
                    <label for='Greek'><input type='checkbox' onClick={this.categoryFilter} value='Greek' id='Greek'></input>Greek</label>
                    
                    <label for='Italian'><input type='checkbox' onClick={this.categoryFilter} value='Italian'id='Italian'></input>Italian</label>
                    
                    <label for='Mexican'><input type='checkbox' onClick={this.categoryFilter}value='Mexican' id='Mexican'></input>Mexican</label>
                    
                    <label for='Japanese'><input type='checkbox' onClick={this.categoryFilter}value='Japanese' id='Japanese'></input>Japanese</label>
                   
                    <label for='Korean'> <input type='checkbox' onClick={this.categoryFilter}value='Korean' id='Korean'></input>Korean</label>
                    
                </div>

            </div>
        )
    }
}

export default withRouter(BusinessFilter);
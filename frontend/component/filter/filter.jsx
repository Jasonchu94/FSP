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
                <div className='filter-title'>
                    Filters
                </div>
                
                <div className='price-filter'>
                    
                        
                        <button value='$' onClick={this.priceFilter}>$</button>
                        <button value='$$' onClick={this.priceFilter}>$$</button>                   
                        <button value='$$$' onClick={this.priceFilter}>$$$</button>                    
                    
                </div>
                
                <div className='category-filter'>
                    Categories
                    <label htmlFor='American'><input type='checkbox' onClick={this.categoryFilter} value='American' id='American'></input>American</label>
                    
                    <label htmlFor='Chinese'><input type='checkbox' onClick={this.categoryFilter} value='Chinese'id='Chinese'></input>Chinese</label>
                    
                    <label htmlFor='Greek'><input type='checkbox' onClick={this.categoryFilter} value='Greek' id='Greek'></input>Greek</label>
                    
                    <label htmlFor='Italian'><input type='checkbox' onClick={this.categoryFilter} value='Italian'id='Italian'></input>Italian</label>
                    
                    <label htmlFor='Mexican'><input type='checkbox' onClick={this.categoryFilter}value='Mexican' id='Mexican'></input>Mexican</label>
                    
                    <label htmlFor='Japanese'><input type='checkbox' onClick={this.categoryFilter}value='Japanese' id='Japanese'></input>Japanese</label>
                   
                    <label htmlFor='Korean'> <input type='checkbox' onClick={this.categoryFilter}value='Korean' id='Korean'></input>Korean</label>
                    
                </div>

            </div>
        )
    }
}

export default withRouter(BusinessFilter);
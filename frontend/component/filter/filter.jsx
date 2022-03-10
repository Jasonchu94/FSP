import React from 'react';

class BusinessFilter extends React.Component{

    render(){
        return(
            <div className='filter-container'>
                Filters
                <div className='price-filter'>
                    <button>$</button>
                    <button>$$</button>                   
                    <button>$$$</button>                    
                </div>
               
                <div className='category-filter'>
                    
                    <label for='American'><input type='checkbox' id='American'></input>American</label>
                    
                    <label for='Chinese'><input type='checkbox' id='Chinese'></input>Chinese</label>
                    
                    <label for='Greek'><input type='checkbox' id='Greek'></input>Greek</label>
                    
                    <label for='Italian'><input type='checkbox' id='Italian'></input>Italian</label>
                    
                    <label for='Mexican'><input type='checkbox' id='Mexican'></input>Mexican</label>
                    
                    <label for='Japanese'><input type='checkbox' id='Japanese'></input>Japanese</label>
                   
                    <label for='Korean'> <input type='checkbox' id='Korean'></input>Korean</label>
                    
                </div>

            </div>
        )
    }
}

export default BusinessFilter;
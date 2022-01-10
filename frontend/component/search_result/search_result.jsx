import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search_bar/search_bar'
import BusinessIndexItem from '../business/business_index_item'
import NavBarDropdown from '../nav_bar/navbar_dropdown';

class SearchResult extends React.Component{

    constructor(props){
        super(props)
       
        this.filterSearch = this.filterSearch.bind(this);
    }

    componentWillMount(){
        this.props.fetchReviews();
        this.props.fetchBusinesses();
    }

    
    filterSearch(){
        const {location, businesses} = this.props
    
        let url = location.search.split("?find=")    
        let [find, near] = url[1].split('near=')
        let searchResults = [];
    
        if (this.props.businesses){
        businesses.map(business => {   
            if (business.name.toLowerCase().includes(find)  
                ||
            business.address.toLowerCase().includes(near) && near !=='') searchResults.push(business)
            

        })}  
        return searchResults
    }
    render(){
        const {business, businesses} = this.props
        // debugger
        return(
            <div>
                 <div className='search-result-nav-bar'>
                        <Link to='/'><img className='splash-logo' src={window.yeplogo}></img></Link>
                        <SearchBar class={"search"}/>
                        {this.props.currentUser ? 
                            (<NavBarDropdown currentUser ={this.props.currentUser} logout={this.props.logout} icon={true}/>)
                         :
                            (<div className="login-signup-buttons">
                                <Link to="/login" >Login</Link>
                                &nbsp;
                                <Link to="/signup" className='signup-button'>Sign Up</Link>
                            </div>)
                        }
                    </div>
                    <div className='business-list-container'>
                        <div className='business-filter'>Filter HERE</div>
                        <div className='business-list'>
                    
                            <h1 className='results'>All Results</h1>
                            {this.filterSearch().map(business => (
                                <BusinessIndexItem business={business} key={business.id} businesses={businesses}/>
                            ))}

                        </div>
                        <div className='business-map'>
                         EL MAP HERE
                        </div>
                       
                    </div>  

                   
            </div>
        )
    }
}

export default SearchResult;
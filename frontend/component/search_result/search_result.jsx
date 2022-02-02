import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search_bar/search_bar'
import BusinessIndexItem from '../business/business_index_item'
import NavBarDropdown from '../nav_bar/navbar_dropdown';
import Map from '../map/map';
class SearchResult extends React.Component{

    constructor(props){
        super(props)
       
        this.filterSearch = this.filterSearch.bind(this);
        this.searchResults = [];
    }

    componentWillMount(){
        this.props.fetchReviews();
        this.props.fetchBusinesses();
    }

 
    
    filterSearch(){
        const {location, businesses} = this.props
    
        let url = location.search.split("?find=")    
        let [find, near] = url[1].split('near=')
       
    
        if (this.props.businesses){
        businesses.map(business => {   
            if (business.name.toLowerCase().includes(find)  
                ||
            business.address.toLowerCase().includes(near) && near !=='' && !this.searchReults.includes(business.id)) this.searchResults.push(business)
            

        })}      
        if (this.searchResults.length !== 0){
        
            return(
                this.searchResults.map(business => (
                    <BusinessIndexItem business={business} key={business.id} businesses={businesses} search={this.searchResults}/>
                )       
                )
                
            )
        }else {
            return( 
                <div>
                    No results found with those search terms
                </div>
            )
        }
        
        
    }
    render(){
        const {business, businesses} = this.props
        debugger
        return(
            <div className='business-index-container'>
                  <div className='business-nav-bar'>
                        <Link to='/'><img className='splash-logo' src={window.yeplogo}></img></Link>
                        <SearchBar class={"business"}/>                        
                        <NavBarDropdown currentUser ={this.props.currentUser} logout={this.props.logout} icon={true} search={this.searchResults}/>
                        
                        
                    </div>
                    <div className='business-list-container'>
                        <div className='business-filter'>Filter coming soon!</div>
                        <div className='business-list'>
                    
                            <h1 className='results'>All Results</h1>
                            {this.filterSearch()}        
                            {this.searchResults=[]}          
    

                        </div>
                        <div className='business-map'>
                         <Map businesses={businesses}/>
                        </div>
                       
                    </div>  

                   
            </div>
        )
    }
}

export default SearchResult;
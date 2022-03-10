import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search_bar/search_bar'
import BusinessIndexItem from '../business/business_index_item'
import NavBarDropdown from '../nav_bar/navbar_dropdown';
import Map from '../map/map';
import BusinessFilter from '../filter/filter';
class SearchResult extends React.Component{

    constructor(props){
        super(props)
       
        this.filterSearch = this.filterSearch.bind(this);
        this.searchResults = [];
    }

    componentDidMount(){
        this.props.fetchReviews();
        this.props.fetchBusinesses();
    }

 
    
    filterSearch(){
      
        const {location, businesses} = this.props
    
        let url = location.search.split("?find=")    
        let [find, near] = url[1].split('near=')
        let price = location.search.split('=')[3]
        // debugger
    
        if (this.props.businesses){
        businesses.map(business => {   
            // debugger
            if (business.name.toLowerCase().includes(find) && find !==''
                ||
            business.address.toLowerCase().includes(near) && near !=='' && !this.searchResults.includes(business.id))this.searchResults.push(business)

            if (business.categories.includes(find) || business.categories.includes(find.toLowerCase()))  this.searchResults.push(business)
            if (business.price === price) this.searchResults.push(business)
            
        })}      
        if (this.searchResults.length !== 0){
            // debugger
            // this.searchResults.filter(business=>business)
             this.finalResult=[]
            this.searchResults.map(business => {
                if(!this.finalResult.includes(business)) {this.finalResult.push(business)}
                else{null}
            })
            // debugger
            return(
                this.finalResult.map(business => (
                    <BusinessIndexItem business={business} key={business.id} businesses={businesses} search={this.finalResult}/>
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
        // debugger
        return(
            <div className='business-index-container'>
                  <div className='business-nav-bar'>
                        <Link to='/'><img className='splash-logo' src={window.yeplogo}></img></Link>
                        <SearchBar class={"business"}/>                        
                        <NavBarDropdown currentUser ={this.props.currentUser} logout={this.props.logout} icon={true} search={this.searchResults}/>
                        
                        
                    </div>
                    <div className='business-list-container'>
                        <div className='business-filter'>
                            <BusinessFilter/>

                        </div>
                        <div className='business-list'>
                    
                            <h1 className='results'>All Results</h1>
                            {this.filterSearch()}        
                            {this.searchResults=[]}          
    

                        </div>
                        <div className='business-map'>
                            <Map businesses={businesses} search={this.finalResult}/>
                        </div>
                       
                    </div>  

                   
            </div>
        )
    }
}

export default SearchResult;
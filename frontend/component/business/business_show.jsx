import React from 'react';
import ReviewList from '../review/review_list';
import SearchBar from '../search_bar/search_bar'
import NavBarDropdown from '../nav_bar/navbar_dropdown';
import { Link } from 'react-router-dom';
class BusinessShow extends React.Component{

    constructor(props){
        super(props)

    }

    componentWillMount(){
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    render(){
        const {business} = this.props
        // debugger
        if (business){
            return(
                <div className='business-show-container'>
                    <div className='business-show-nav-bar'>
                            <Link to='/'><img className='splash-logo' src={window.yeplogo}></img></Link>
                            <SearchBar class={"business-show"}/>
                            <NavBarDropdown currentUser ={this.props.currentUser} logout={this.props.logout} icon={true}/>
                    </div>
                    <div className='business-show-photo-slider-container'>
                        <div className='photo-slider'>
                            {business.photoUrls.map(photo =>(
                                    <img src={photo}></img>
                            ))}
                        </div>
                        <div className='business-show-info'>
                            <h1>{business.name}</h1>

                        </div>
                    </div>
                    <ReviewList fetchReviews={this.props.fetchReviews}/>
                </div>
            )

        } else{ return null}
    }
}

export default BusinessShow;
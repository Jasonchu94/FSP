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

    ratingPhoto(rating){      
        if(rating >= 0 && rating < 1.5) return <img src={window.rating1}></img>
        if (rating >= 1.5 && rating < 2) return <img src={window.rating15}></img>
        if (rating >= 2 && rating <2.5) return <img src={window.rating2}></img>
        if (rating >= 2.5 && rating < 3) return <img src={window.rating25}></img>
        if (rating >=3 && rating < 3.5) return <img src={window.rating3}></img>
        if (rating >= 3.5 && rating < 4) return <img src={window.rating35}></img>
        if (rating >=4 && rating < 4.5) return <img src={window.rating4}></img>
        if (rating >=4.5 && rating < 5) return <img src={window.rating45}></img>
        if (rating === 5) return <img src={window.rating5}></img>   
        if (rating === 0) return <img src={window.rating0}></img> 
    }
    getRating(business){
        this.totalReviews = 0;
        let totalRating=0;
        business.reviews.map(review=>(
            totalRating += review.rating,
            this.totalReviews +=1
        ))
     
        return (totalRating/this.totalReviews);
    }

    businessTime(){
        const {business} = this.props;

        return(`
        Open ${business.opentime < 12 ? business.opentime : business.opentime-12}:00
            ${business.opentime > 12 ? "PM" : "AM"} -
            ${business.closetime > 12 ? business.closetime -12 : business.closetime}:00 
            PM

        ` )
    }

    render(){
        const {business} = this.props
      
        if (business){
            return(
                <div className='business-index-container'>
                    <div className='business-nav-bar'>
                        <Link to='/'><img className='splash-logo' src={window.yeplogo}></img></Link>
                        <SearchBar class={"business"}/>                        
                        <NavBarDropdown currentUser ={this.props.currentUser} logout={this.props.logout} icon={true}/>
                    </div>
                    <div className='business-show-photo-slider-container'>
                        <div className='photo-slider'>
                            {business.photoUrls.map(photo =>(
                                    <img src={photo}></img>
                            ))}
                        </div>
                        <div className='business-show-info'>
                            <h1 className='business-show-name'>{business.name}</h1>                    
                            <div className='business-rating'>{this.ratingPhoto(this.getRating(business))}&nbsp;&nbsp;{this.totalReviews} reviews</div>
                                <br></br>
                            <div className='business-price'> {business.price} &bull; {business.categories.map((category, key) => category.charAt(0).toUpperCase() + category.slice(1) + (key===business.categories.length-1 ? "" : ", "))} </div>
                            <br></br>
                            <div className='business-hours'> {this.businessTime()}</div>

                        </div>
                    </div>
                    <div className='business-show-review-container'>
                        <div className='write-review-container'>
                            <button className='review-button'>Write a Review</button>                            
                        </div>                        
                        <p className='location-title'>Location & Hours</p>
                        <div className='location-and-hours'>                                                   
                            <div className='map'><img src={window.daeho}></img></div>
                            <div className='hours-container'>
                                    <p>Mon {this.businessTime()}</p>
                                    <p>Tue {this.businessTime()}</p>
                                    <p>Wed {this.businessTime()}</p>
                                    <p>Thu {this.businessTime()}</p>
                                    <p>Fri {this.businessTime()}</p>
                                    <p>Sat {this.businessTime()}</p>
                                    <p>Sun {this.businessTime()}</p>
                            </div>
                        </div>
                            <ReviewList fetchReviews={this.props.fetchReviews}/>
                        
                        <div className='business-show-info-container'>
                                {business.website}
                                <hr></hr>
                                {business.phone_number}
                                <br></br>
                                <span>Get Directions</span>
                                {business.address}
                        </div>
                    </div>
                </div>
            )

        } else{ return null}
    }
}

export default BusinessShow;
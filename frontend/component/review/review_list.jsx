import React from 'react';
import { Link } from 'react-router-dom';
import ReviewListItem from './review_list_item';

class ReviewList extends React.Component{
    constructor(props){
        super(props);
    
    // this.state = this.props.reviews
        
    }

    componentDidMount(){
        this.props.fetchReviews();
    }
 
    render(){
        const {business, currentUser, reviews, rating, fetchReviews,sessionId} = this.props
        
        if (Object.keys(reviews).length===0 ){
            return(
                <div>Be the first to review</div>
            )
        }else if( business.reviews[0] === undefined) return null;
        if(business.reviews[0].author){

            return(
                <div>   
                    <div className='review-list-container'>
                        <div className='review-form'>
                            <div className='review-profile'>
                                <img src={window.profile}></img>&nbsp;
                                {currentUser ? currentUser.first_name.charAt(0).toUpperCase() + currentUser.first_name.slice(1) + " " +currentUser.last_name.charAt(0).toUpperCase() + ".": 
                                <div> Please <Link to='/login'>Login</Link> to start your review</div>
                                }
                            </div>
                            <div className='review-stars-link'>
                                <div>
                                    <img src={window.rating0}></img> 
                                </div>
                                <div>
                                    Start your review for {business.name}
                                </div>                        
                            </div>
                        </div>
                    </div> 
                    <br></br>   
                     
                            <div className='review-item-container'>
                                {business.reviews.reverse().map(review=> {
                                    
                                    return(
                                        <ReviewListItem
                                            review={review} 
                                            reviews={reviews}                                   
                                            rating={rating}
                                            key={review.id}
                                            removeReview={this.props.removeReview}
                                            updateReview={this.props.updateReview}  
                                            fetchBusiness ={this.props.fetchBusiness}                              
                                            fetchReviews ={fetchReviews}
                                            business={business}
                                            currentUser = {currentUser}
                                            sessionId={sessionId}
                                        />                                        
                                    )
                                })}
                            </div>
                        
                </div>
            )
        } else{ return null}
        }
      
    }


export default ReviewList;
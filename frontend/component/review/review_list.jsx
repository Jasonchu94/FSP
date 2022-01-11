import React from 'react';
import { Link } from 'react-router-dom';
import ReviewListItem from './review_list_item';

class ReviewList extends React.Component{
    constructor(props){
        super(props);
    
    // this.state = this.props.reviews
        
    }

 
    render(){
        const {business, currentUser, reviews, rating} = this.props
    
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
                                {reviews.reverse().map(review=> (
                                    <ReviewListItem
                                        review={review}
                                        rating={rating}
                                        key={review.id}
                                        removeReview={this.props.removeReview}
                                        updateReview={this.props.updateReview}                                
                                     
                                    />
                                ))}
                            </div>
                        
                </div>
            )
        }
      
    }


export default ReviewList;
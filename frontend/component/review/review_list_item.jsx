import React from 'react';

class ReviewListItem extends React.Component{

    constructor(props){
        super(props)

        
    }

    reviewDate(review){
        let date = review.created_at.split('T')[0].split('-')

        return (`${date[1]}/${date[2]}/${date[0]}`)
    }




    render(){
        const {review, rating} = this.props
    
        return(
            <div className='review-item'>
                <div className='reviewer-profile'>
                    <img src={window.profile}></img>
                    {/* {review.author.first_name} */}
                </div>
                <div>{rating}&nbsp;{this.reviewDate(review)}</div>
                <p>
                    {review.body}
                </p>
            </div>
        )
    }
}

export default ReviewListItem;
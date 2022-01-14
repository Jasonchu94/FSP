import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewListItem extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
        
    }
    componentWillMount(){
        this.props.fetchReviews();
        this.props.fetchBusiness(this.props.match.params.businessId)
    }

    reviewDate(review){
        let date = review.created_at.split('T')[0].split('-')

        return (`${date[1]}/${date[2]}/${date[0]}`)
    }
    deleteReview(){
       
        this.props.removeReview(this.props.review.id)
            .then(()=> this.props.fetchBusiness((this.props.reviews[this.props.review.id]).business_id))
    }

    editReview(){
        
        this.props.history.push(`${this.props.business.id}/reviews/${this.props.review.id}/edit`)
    }

    handleClick(e){
        if (this.state.clicked === false){
            return this.setState({clicked: true})
        } else { return this.setState({clicked:false})}
    }
    reviewOwner(){
        const{currentUser, review} = this.props;
        if (!currentUser) return null;
      
        if(currentUser.id === review.user_id){
            return(
                <div className='edit-elipses' onClick={this.handleClick}><img className='ellipses-image'src={window.ellipses}></img>
                    <div className={this.state.clicked ? "show" : "clear"}>
                        <button onClick={() =>this.editReview()}>Edit</button>
                        <button onClick={() => this.deleteReview()}>Delete</button>
                    </div>
                </div>
            )
        }
    }
    ratingPhoto(){
        const {review} = this.props;
        if(review.rating ===1) return <img src={window.rating1}></img>      
        if (review.rating ===2) return <img src={window.rating2}></img>      
        if (review.rating ===3 ) return <img src={window.rating3}></img>      
        if (review.rating ===4 ) return <img src={window.rating4}></img>   
        if (review.rating ===5) return <img src={window.rating5}></img>   
   
    }


    render(){
        const {review, rating, reviews, author} = this.props
        
        if (!review){ return null}
            return(
                <div className='review-item'>
                    <div>{this.reviewOwner()}</div>
                    <div className='reviewer-profile'>
                        <img src={window.profile}></img>
                        {review.author.first_name.charAt(0).toUpperCase()+review.author.first_name.slice(1)}  {review.author.last_name.charAt(0).toUpperCase()}.
                    </div>
                    <div>{this.ratingPhoto()}&nbsp;{this.reviewDate(review)}</div>
                    <p className='review-body'>
                        {review.body}
                    </p>
                </div>
            )

        
      
        
    }
}

export default withRouter(ReviewListItem);
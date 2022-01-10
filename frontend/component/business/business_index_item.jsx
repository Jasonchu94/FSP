import React from 'react';
import { withRouter } from 'react-router-dom';
class BusinessIndexItem extends React.Component{

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    
    }
    
    handleClick(){
        this.props.history.push(`businesses/${this.props.business.id}`)
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
   
    render(){
        const {business, businesses, search} = this.props
        let n = Math.floor(Math.random()*business.photoUrls.length)
        let m = Math.floor(Math.random()*business.reviews.length)
       
        return(
            <div className='business-index-item-container' onClick={this.handleClick}>
                <div className='business-index-item'>
                    <div className='business-image'>
                        <img className='index-image'src={business.photoUrls[n]}></img>
                    </div>
                    <div className='business-info-container'>
                        <div className='business-name'>
                            
                            {search ? search.indexOf(business)+1 : business.id}.{business.name}
                        </div>
                        <br></br>
                        <div className='rating-image'>
                            {this.ratingPhoto(this.getRating(business))}&nbsp;
                            {this.totalReviews}
                        </div>
                        <br></br>
                        <div className='business-categories'>
                        {business.categories.map((category, key) => category.charAt(0).toUpperCase() + category.slice(1) + (key===business.categories.length-1 ? "" : ", "))}
                        </div>
                        <br></br>
                        <div className='random-review'>
                             {business.reviews[m].body}
                        </div>
                       
                    </div>
                </div> 
                <br></br>       
            </div>
        )
    }
}

export default withRouter(BusinessIndexItem);
import React from 'react';
import { withRouter } from 'react-router-dom';
class SanJoseItem extends React.Component{

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(e){
        this.props.history.push(`businesses/${this.props.business.id}`)
    }

    ratingPhoto(rating){     
        // debugger 
        if(rating >= 0 && rating < 1.5) return <img src={window.rating1}></img>
        if (rating >= 1.5 && rating < 2) return <img src={window.rating15}></img>
        if (rating >= 2 && rating <2.5) return <img src={window.rating2}></img>
        if (rating >= 2.5 && rating < 3) return <img src={window.rating25}></img>
        if (rating >=3 && rating < 3.5) return <img src={window.rating3}></img>
        if (rating >= 3.5 && rating < 4) return <img src={window.rating35}></img>
        if (rating >=4 && rating < 4.5) return <img src={window.rating4}></img>
        if (rating >=4.5 && rating < 5) return <img src={window.rating45}></img>
        if (rating === 5) return <img src={window.rating5}></img>   
        return <img src={window.rating0}></img> 
    }

    getRating(business){
        this.totalReviews = 0;
        let totalRating=0;
        // debugger
        business.reviews.map(review=>(
            totalRating += review.rating,
            this.totalReviews +=1
        ))
 
        return (totalRating/this.totalReviews);
    }

    render(){
        const{business, reviews} = this.props;
        // debugger
        if (business === undefined) {return null} else{
            let randomPhoto = Math.floor(Math.random()*business.photoUrls.length)

            return(
                <div className='san-jose-item-container'>
                    <div className='sj-item' onClick={this.handleClick}> 
                    <img className='index-image'src={business.photoUrls[randomPhoto]}></img>
                        <div className='san-jose-name'>{business.name}</div>
                        <div className='san-jose-ratings'> 
                            {this.ratingPhoto(this.getRating(business))}&nbsp;
                            {this.totalReviews}
                        </div> 
                        <div className='san-jose-categories'>
                            {business.categories[0].charAt(0).toUpperCase() + business.categories[0].slice(1) + "," + 
                            business.categories[1].charAt(0).toUpperCase() + business.categories[1].slice(1)}
                        </div>
                        <div className='san-jose-address'>
                            {business.city},{business.state}
                        </div>   
                    </div>
                </div>
            )
        }
    }
    
}

export default withRouter(SanJoseItem);
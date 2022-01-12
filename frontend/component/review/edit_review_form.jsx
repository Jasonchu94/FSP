import React from 'react';
import { Link } from 'react-router-dom';
import NavBarDropdown from '../nav_bar/navbar_dropdown';
import SearchBar from '../search_bar/search_bar'

class EditReviewForm extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            body: this.props.review.body,
            rating: Number(this.props.review.rating),
            user_id: this.props.currentUser.id,
            business_id: Number(this.props.match.params.businessId),
            id: this.props.review.id
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchBusiness(this.props.match.params.businessId);
        this.props.fetchReviews();
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    handleSubmit(e){
        e.preventDefault();
      
        let review = Object.assign({}, this.state)
        this.props.editReview(review)
            .then(()=> this.props.history.push(`/businesses/${this.state.business_id}`))

    }
    showErrors(){
        if (!this.props.errors) return null;
        // debugger
        return(
            <ul className='review-errors'>
                {Object.values(this.props.errors).map((error,i) =>(
                    <li key={i}>
                        {error}
                    </li>   
                ))}
            </ul>
        )
    }
    update(field){
        return(e) => this.setState({[field]: e.currentTarget.value})
    }
    render(){
        const {business, currentUser, review} = this.props;
        if (!business) return null;
        return(
            <div className='edit-form-container'>
                <div className='business-index-container'>
                    <div className='business-nav-bar'>
                        <Link to='/'><img className='splash-logo' src={window.yeplogo}></img></Link>
                        <SearchBar class={"business"}/>                        
                        <NavBarDropdown currentUser ={this.props.currentUser} logout={this.props.logout} icon={true}/>
                    </div>
                </div>
                <div className='review-form-container'>
                    <div className='business-title'>
                        <Link to={`/businesses/${business.id}`} className='review-business-title'></Link>{business.name}
                    </div>
                    <div className='form-container-review'>
                        <form onSubmit={this.handleSubmit}>
                            <div className='review-stars'>
                                <input type='radio'  value='1' name='rating'onChange={this.update('rating')}></input>☆
                                <input type='radio'  value='2' name='rating'onChange={this.update('rating')}></input>☆
                                <input type='radio'  value='3' name='rating'onChange={this.update('rating')}></input>☆
                                <input type='radio'  value='4' name='rating'onChange={this.update('rating')}></input>☆
                                <input type='radio'  value='5' name='rating'onChange={this.update('rating')}></input>☆
                            </div>
                            <div className='review-text-area'>
                                <textarea  type='text'className='review-body' onChange={this.update('body')} value={this.state.body} placeholder='Doesn’t look like much when you walk past, but I was practically dying of hunger so I popped in. The definition of a hole-in-the-wall. I got the regular hamburger and wow…  there are no words. A classic burger done right. Crisp bun, juicy patty, stuffed with all the essentials (ketchup, shredded lettuce, tomato, and pickles). There’s about a million options available between the menu board and wall full of specials, so it can get a little overwhelming, but you really can’t go wrong. Not much else to say besides go see for yourself! You won’t be disappointed.
'>

                                </textarea>
                            </div>
                            <div >
                                {this.showErrors()}
                            </div>
                            <div className='photo-box' >add Photos maybe?</div>
                            <button className='review-submit-button' type='submit'value='Post Review'>Post Review</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditReviewForm;
import React from 'react';
import { Link } from 'react-router-dom';
import SanJoseItem from './sanjose_item'

class SanJose extends React.Component{

    componentDidMount(){
        this.props.fetchBusinesses();
        this.props.fetchReviews();
    }

    render(){
        const {businesses, reviews} = this.props;
        let randomBusiness = [];
        if (businesses.length === 0) {
            return null} else{
            randomBusiness.push(businesses.shift())
            randomBusiness.push(businesses.shift())
            randomBusiness.push(businesses.shift())

        }
        // debugger
        return(
            <div className='yep-san-jose-container'>
                <div className='san-jose-container'>
                    <h1 className='splash-business-title'>Yep San Jose</h1>
                    {randomBusiness.map(business =>(
                        <SanJoseItem
                            business={business}
                            key={business.id}
                            reviews={reviews}
                        />
                    ))}
                </div>              
                <Link className='san-jose-link' to='/businesses'>See more businesses in San Jose</Link>               
            </div>
        )
    }

}

export default SanJose;
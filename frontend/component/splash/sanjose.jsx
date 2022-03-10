import React from 'react';
import { Link } from 'react-router-dom';
import SanJoseItem from './sanjose_item'

class SanJose extends React.Component{

    componentDidMount(){
        this.props.fetchBusinesses();
        // this.props.fetchReviews();
    }

    shuffle(arr){
        let index = arr.length;
        while(index !=0){
            let randomIndex = Math.floor(Math.random()*index)
            index --;
            [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]]
        }
        return arr
    }

    render(){
        const {businesses, reviews} = this.props;
        let randomBusiness = [];
        // debugger
        if (businesses.length === 0) {
            return null} else{
            randomBusiness.push(this.shuffle(businesses).shift())
            randomBusiness.push(this.shuffle(businesses).shift())
            randomBusiness.push(this.shuffle(businesses).shift())

            // debugger
            return(
                <div className='yep-san-jose-container'>
                <div className='san-jose-container'>
                    <h1 className='splash-business-title'>Yep San Jose</h1>
                    {randomBusiness.length === 0 ?  null : randomBusiness.map(business =>(
                        <SanJoseItem
                        business={business}
                        key={Math.random()}
                        reviews={reviews}
                        fetchBusinesses={this.props.fetchBusinesses}
                        
                        />
                        ))}
                </div>              
                <Link className='san-jose-link' to='/businesses'>See more businesses in San Jose</Link>               
            </div>
        )
    }
    }

}

export default SanJose;
import React from 'react';
import { withRouter } from 'react-router';
class BusinessIndexItem extends React.Component{

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(){
        this.props.history.push(`businesses/${this.props.business.id}`)
    }

   
    render(){
        const {business, businesses} = this.props
        let n = Math.floor(Math.random()*business.photoUrls.length)
        return(
            <div className='business-index-item-container' onClick={this.handleClick}>
                <div className='business-index-item'>
                    <div className='business-image'>
                        <img className='index-image'src={business.photoUrls[n]}></img>
                    </div>
                    <div className='business-info-container'>
                        <div className='business-name'>
                            {businesses.indexOf(business) + 1 }.{business.name}
                        </div>
            
                        <div className='rating-image'>
                             <img src={window.rating1}></img>
                             How many ratings
                        </div>

                        <div className='business-categories'>
                            {business.categories.map(category=>(
                                `${category.charAt(0).toUpperCase() + category.slice(1)},`
                            ))}
                        </div>

                        <div className='random-review'>
                             OMG THIS PLACE IS DOG
                        </div>
                       
                    </div>
                </div> 
                <br></br>       
            </div>
        )
    }
}

export default (BusinessIndexItem);
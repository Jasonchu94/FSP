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
        return(
            <div className='business-index-item-container' onClick={this.handleClick}>
                <div className='business-index-item'>
                    <div className='business-image'>

                    </div>
                    <div className='business-name'>
                        {business.name}
                    </div>
                </div>        
            </div>
        )
    }
}

export default (BusinessIndexItem);
import React from 'react';

class ReviewList extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchReviews();
    }
    render(){
        return(
            <div>
                HELLO
            </div>
        )
    }
}

export default ReviewList;
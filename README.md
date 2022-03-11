## YEP

<a href ="https://yep-aa.herokuapp.com/#/" target='_blank' rel = 'noopener noreferrer'>Yep <a/> is a clone of Yelp. You will be able to navigate around the pages and see business pages with relevant information to help choose your next meal in the Bay Area. All users can explore the business pages but only those who are logged in can create reviews for a business as well as edit/delete those reviews. 
  
Technologies, Libraries & APIs used:
1. Javascript
2. React
3. Ruby on Rails
4. SASS
5. Google maps API
  
<a href ="https://yep-aa.herokuapp.com/#/" target='_blank' rel = 'noopener noreferrer'>Yep <a/> users will be able to:
  1. Navigate through search bar or clicking around to see business pages with pictures and relevant information.
  2. Create an account if they would like to leave a review for a business.
  3. Utilize google maps to get directions to the business 
  
  ![YepSearch](https://user-images.githubusercontent.com/88340645/157931119-8c29e11d-1672-4c46-96a7-91735d7e1340.png)

  
  
  
  ```javascript
  if (this.props.businesses){
        businesses.map(business => {   
            if (business.name.toLowerCase().includes(find)  
                ||
            business.address.toLowerCase().includes(near) && near !=='' && !this.searchReults.includes(business.id)) this.searchResults.push(business)
            

        })}      
        if (this.searchResults.length !== 0){
        
            return(
                this.searchResults.map(business => (
                    <BusinessIndexItem business={business} key={business.id} businesses={businesses} search={this.searchResults}/>))
                
            )
        }else {
            return( 
                <div>
                    No results found with those search terms
                </div>
            )
        }
  
  
  ```
  The code snippet above lets the user use the search bar based on two entries. One entry allows the user to search all busiensses that contain the search keyword in it's name and the second entry(near) allows them to search through businesses by city/location.
  
  
  ```javascript 
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
  ```
  
  <a href ="https://yep-aa.herokuapp.com/#/" target='_blank' rel = 'noopener noreferrer'>Yep <a/> shows dynamic information on refresh rather than the same businesses and pictures. The above code utilizes an array of random businesses in the database to show a collection of business information to entice the user to click on that business to learn even more. The pictures not only on this particular code snippet, but all around the site, cycle through randomly to give a dynamic experience.  
    
    
 Users will be able to leave reviews on resturant pages and see reviews from other users regardless if they are logged in. Logged in users are able to edit any reviews they have left on a business pages as denoted with the ellipses.
    
 
    ![YepReview](https://user-images.githubusercontent.com/88340645/157933436-f3101509-6b26-4c95-a96b-017e7cca8eb4.png)

   
    
    
 Future improvments: extend and optimize the search bar to allow searching by category. Integrate a filter on search results to give users more freedom on which businesses they do and do not want to see. Allow more interactivity with the google maps to click on pins to see which business they belong to and drag around a map an area that repopulates the list of businesses in that specific map area. 

import React from 'react';
import Marker from '../../util/marker';
class Map extends React.Component{

    componentDidMount(){
       
        const mapOptions = {
            center: { lat: 37.104990, lng: -122.0050 }, 
            zoom: 11
          };
          this.map = new google.maps.Map(this.mapNode, mapOptions)
          this.markers = new Marker(this.map)
          if(this.map){

              this.markers.updateMarkers(this.props.businesses)
          }
    }

    render(){
    //   debugger

        return(
            <div id='map'className='map-container'ref={ map => this.mapNode = map }>
            </div>
        )
        
        
    }
}

export default Map;
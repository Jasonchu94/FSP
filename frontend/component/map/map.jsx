import React from 'react';
import Marker from '../../util/marker';
class Map extends React.Component{

    componentDidMount(){
    //    debugger
        const mapOptions = {
            center: { lat: 37.104990, lng: -122.0050 }, 
            zoom: 11
          };
          this.map = new google.maps.Map(this.mapNode, mapOptions)
          this.markers = new Marker(this.map)
        //   debugger
          if(this.map && this.props.search){
            //   debugger
              this.markers.updateMarkers(this.props.search)
              
              this.map.setCenter({lat: this.props.search[0].latitude, lng: this.props.search[0].longitude})
          }
          else if(this.map && this.props.businesses.length!==0){
            // debugger
              this.markers.updateMarkers(this.props.businesses)
              this.map.setCenter({lat:this.props.businesses[0].latitude, lng:this.props.businesses[0].longitude})
          }
        //   debugger
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
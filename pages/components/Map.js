import React from 'react'
import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 
  'pk.eyJ1IjoicmF1bGFsZWphbmRybyIsImEiOiJja29iajUyYXowOXkxMm51aHFic2V5M2NyIn0.nYw6iCZQhwu42WC1QDa6uQ'


 const Map = (props) => {
  //  console.log(props);
   

  useEffect(() => { 
     const map  = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [-99.29011, 39.39172],
        zoom: 3
      });

   


     if(props.pickupCoordinates){
        addtoMap(map, props.pickupCoordinates)
     }
    
     if(props.dropofCoordinates){
       addtoMap(map, props.dropofCoordinates)
     }

     if(props.pickupCoordinates && props.dropofCoordinates){
        map.fitBounds([
          props.dropofCoordinates,
          props.pickupCoordinates
        ],{
          padding: 60
        })
     }

   },[props.pickupCoordinates, props.dropofCoordinates ]);
   

     const addtoMap = (map,coordinates) => {
      
       const marker1 = new mapboxgl.Marker()
       .setLngLat(coordinates)
       .addTo(map);
      

     }

 
     return  <Wrapper id="map"> </Wrapper>
    
}

export default Map


const Wrapper = tw.div`
flex-1 h-1/2
`
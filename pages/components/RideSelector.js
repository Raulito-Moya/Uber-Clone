import React, {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../../public/data/carList'


export const RideSelector = ({pickupCoordinates, dropofCoordinates}) => {
   const [rideDuration, setRideDuration] = useState(0)
   
  // console.log(pickupCoordinates);
   useEffect(() =>{
       
    rideDuration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]}; ${dropofCoordinates[0]},${dropofCoordinates[1]}?access_token=pk.eyJ1IjoicmF1bGFsZWphbmRybyIsImEiOiJja29iajUyYXowOXkxMm51aHFic2V5M2NyIn0.nYw6iCZQhwu42WC1QDa6uQ`
     
     )
      .then((res)=> res.json())
      .then(data => {

    
         // console.log(data.routes[0].duration);
         // console.log(data);
         if( data?.routes[0]?.duration !== undefined ){
             setRideDuration(data.routes[0].duration / 100)
         }
         
        
      })
   },[pickupCoordinates, dropofCoordinates])

    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CarList>
                { carList.map((car,index)=> (
                  
                  <Car key={index}>
                  <CarImage src={car.imgUrl} />
                  <CarDetails>
                     <Service>{car.service}</Service>
                     <Time>5 min away </Time>
                  </CarDetails>
                  <Price>{'$' + (rideDuration * car.multiplier).toFixed(2)}</Price>
                </Car>  



                ))}
              

            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const CarDetails =tw.div`
flex-1

`
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-xs text-blue-500
`

const Price = tw.div`
text-sm
`

const CarImage = tw.img`
h-14 mr-2
`

const Car = tw.div`
 flex p-4  items-center

`

const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`

const CarList = tw.div`
 overflow-y-y-scroll flex flex-col

`

const Wrapper = tw.div`
flex-1 overflow-y-scroll

`

import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const Confirm = () => {

  

 const router = useRouter()
 const { pickup,dropoff} = router.query
  
 console.log("pickup",pickup);
 console.log("dropoff",dropoff);

   const [ pickupCoordinates,setPickUpCoordinates ] = useState([0,0])
   const [ dropofCoordinates,setDropoffCoordinates ] = useState([0,0])
   
    const getPickupCoordinates =(pickup) => { 
        
         fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
           new URLSearchParams({
               access_token: "pk.eyJ1IjoicmF1bGFsZWphbmRybyIsImEiOiJja29iajUyYXowOXkxMm51aHFic2V5M2NyIn0.nYw6iCZQhwu42WC1QDa6uQ",
               limit:1
           })
          
         )
          .then(response => response.json())
          .then( data => {
              
              setPickUpCoordinates(data.features[0].center)
          })
     } 
   
    const getDropoffCoordinates = (dropoff) => {
      
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
          new URLSearchParams({
              access_token: "pk.eyJ1IjoicmF1bGFsZWphbmRybyIsImEiOiJja29iajUyYXowOXkxMm51aHFic2V5M2NyIn0.nYw6iCZQhwu42WC1QDa6uQ",
              limit:1
          })
         
        )
         .then(response => response.json())
         .then( data => {
             console.log("Dropoff");
           
             setDropoffCoordinates(data.features[0].center)
         })


    }

  useEffect(()=> {
    
    getPickupCoordinates(pickup)
    getDropoffCoordinates(dropoff)

   },[pickup, dropoff])

   console.log(pickupCoordinates);

    return (
        <Wrapper>
               <ButtonContainer>
                 <Link href="/search" >
                  <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
                 </Link>
               </ButtonContainer>
             <Map 
               pickupCoordinates={pickupCoordinates}
               dropofCoordinates={dropofCoordinates}
             />

             <RideContainer>
              <RideSelector 
                pickupCoordinates={pickupCoordinates}
                dropofCoordinates={dropofCoordinates}
              />
               <ConfirmButtonContainer>
                  <ConfirmButton>
                    Confirm UberX
                  </ConfirmButton>
               </ConfirmButtonContainer> 

             </RideContainer>
        </Wrapper>
    )
}
export default  Confirm


 const ConfirmButton = tw.div`
 bg-black text-white my-4 mx-4 py-4 text-center text-xl
 `

const ConfirmButtonContainer = tw.div`
border-t-2
`

//Good Job Devlin
const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`


const Wrapper = tw.div`
  flex h-screen flex-col

`

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`

const BackButton = tw.img`
h-full object-contain
`


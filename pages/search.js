import React from 'react'
import tw from "tailwind-styled-components"


export default function search() {
    return (
         <Wrapper>
             <ButtonContainer>
                 <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
             </ButtonContainer>
            <InputContainer>
              <FromToIcons>
                  <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"/>
                  <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
                  <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
              </FromToIcons>
              <InputBoxes>
                <Input placeholder="Enter pickup location"/>
                <Input placeholder="where to?"/>
              </InputBoxes>
              <PLusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png"></PLusIcon>
            </InputContainer> 
             <SavedPlaces>
                 <StartIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"/>
                 Saved Places
             </SavedPlaces>
             <ConfirmButton>
                 Confirm Locations
             </ConfirmButton>
        </Wrapper>
    )
}

const Wrapper = tw.div`
bg-gray-200 h-screen

`

const ButtonContainer = tw.div`
bg-white px-4


`
const BackButton = tw.img`
h-12


`

const FromToIcons = tw.div`
w-10 flex flex-col mr-2 items-center

`

const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`



const Circle = tw.img`
h-2.5
`

const Line = tw.img`
 h-10
`

const Square = tw.img`
h-3
`
const InputBoxes = tw.div`
flex flex-col flex-1
`

const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none

`

const PLusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
` 

const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-3
`

const StartIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2

`

const ConfirmButton = tw.button`
h-10 bg-black w-full  flex items-center text-white justify-center
 `
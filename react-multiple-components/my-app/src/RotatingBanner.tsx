import { Banner } from "./Banner"
import { NextButton } from "./NextButton"
import { Indicators } from "./Indicators"
import { PreviousButton } from "./PreviousButton"
import { useState } from "react"

type Props = {
  items: string[]
}
// 323
export function RotatingBanner({items}: Props) {
  const [arrayIndex, setArrayIndex ] = useState(0)

  function previousBtn() {
    // When user clicks on prev button the index will move backwards
  }

  function nextBtn() {
    // When user clicks on next button the index will move forward
    setArrayIndex(arrayIndex + 1)
  }

  function indicator(arrayIndex: number ) {
    console.log(arrayIndex)
    setArrayIndex(arrayIndex)
    // function to tell the parent what index value which one was clicked on
  }

  //
  return (
    <>
      <Banner item = {items[arrayIndex]}/>
      <div><PreviousButton/></div>
      <Indicators itemArray = {items} indicator = {indicator} />
      <div><NextButton/></div>
    </>
  )
}

// create a function inside rotating so it can be the parent
// pass the function into my button
//

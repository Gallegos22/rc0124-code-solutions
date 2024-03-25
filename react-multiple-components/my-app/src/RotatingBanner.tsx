import { Banner } from "./Banner"
import { NextButton } from "./NextButton"
import { Indicators } from "./Indicators"
import { PreviousButton } from "./PreviousButton"

type Props = {
  items: string[]
}

export function RotatingBanner({items}: Props) {
  //code here
  //
  return (
    <>
      <Banner/>
      <div><PreviousButton/></div>
      <Indicators/>
      <div><NextButton/></div>
    </>
  )
}

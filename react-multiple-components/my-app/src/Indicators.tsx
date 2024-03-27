type Props = {
  itemArray: string[];
  indicator: (arrayIndex: number) => void;
}

export function Indicators({itemArray, indicator}: Props) {
  const btnArray = itemArray.map((item,index) => { // map always needs an item and an index. item represents the content of the array, index represents current index of array as map loops through it
    return <button onClick={()=> {indicator(index)}} >{index}</button> // we look inside arrow function for a closure to match our index values
  })
  //
  return (
    <>
      {btnArray}
    </>
  )
}

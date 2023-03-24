import { TextField } from '@mui/material'
import React,{useState} from 'react'



const Pos = () => {
    
const [disabled,setDisabled]=useState(false)

const [check,setChecked]=useState(false)
const [check2,setChecked2]=useState(false)
const [check3,setChecked3]=useState(false)

console.log({check})
console.log({check2})
console.log({check3})


  
  return (
    <div>
    <input type="checkbox" disabled={disabled} checked={check} onChange={(e)=>{setChecked(e.target.checked)}} />
    <br/>
    <input type="checkbox" disabled={disabled} checked={check2} onChange={(e)=>{setChecked2(e.target.checked)}} />
    <br/>
    <input type="checkbox" disabled={disabled} checked={check3} onChange={(e)=>{setChecked3(e.target.checked)}} />
    </div>
  )
}

export default Pos
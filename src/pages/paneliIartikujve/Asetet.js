import React,{ useState } from 'react'
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import AddIcon from '@mui/icons-material/Add';
import Form from 'react-bootstrap/Form';
import KlasifikimAset1 from './MiniModalArtikuj/AsetetModal/KlasifikimAset1';
import KlasifikimAset2 from './MiniModalArtikuj/AsetetModal/KlasifikimAset2';
import KlasifikimAset3 from './MiniModalArtikuj/AsetetModal/KlasifikimAset3';
const Asetet = ({
  data,
  selektAAmKlasifkim1,
  setSelektAAmKlasifikim1,
  selektAAmKlasifkim2,
  setSelektAAmKlasifikim2,
  selektAAmKlasifkim3,
  setSelektAAmKlasifikim3,
  disabled,
  setNdryshoKushtin
}) => {
  return (
    <div>

<div className='flex flex-col justify-center border p-2 w-2/12'>

      <div className='flex items-center mt-2'  onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>
    
        <Form.Select 
           disabled={disabled}
           size="sm" 
           className=''
           value={selektAAmKlasifkim1} 
           onChange={(e)=>{setSelektAAmKlasifikim1(e.target.value)}} 
          
           >
          <option label='Klasifikim1'/>
          {data?.AAM_Klasifikim1?.map(list=>{
          return <option >
              {list?.Pershkrim}</option>  
          })}
      </Form.Select>
          <span className='flex items-center' style={{border:"solid 1px #ddd",backgroundColor:"#1971c2",color:"#fff"}}>
          <KlasifikimAset1 selektAAmKlasifkim1={selektAAmKlasifkim1}/>
          </span>
      </div>

      <div className='flex items-center mt-2' onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>
      <Form.Select 
      
      disabled={disabled}
      size="sm" 
      className=''
      value={selektAAmKlasifkim2} 
      onChange={(e)=>{setSelektAAmKlasifikim1(e.target.value)}} 
      
      >
          <option label='Klasifikim2'/>
          {data?.AAM_Klasifikim2?.map(list=>{
          return <option >
              {list?.Pershkrim}</option>  
          })}
      </Form.Select>

          <span className='flex items-center' style={{border:"solid 1px #ddd",backgroundColor:"#1971c2",color:"#fff"}}>
         <KlasifikimAset2 selektAAmKlasifkim2={selektAAmKlasifkim2}/>
          </span>
      </div>
      <div className='flex items-center mt-2'  onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>
      <Form.Select 
      disabled={disabled}
      size="sm" 
      className=''
      value={selektAAmKlasifkim3} 
      onChange={(e)=>{setSelektAAmKlasifikim1(e.target.value)}} 
     >
          <option label='Klasifikim3'/>
          {data?.AAM_Klasifikim3?.map(list=>{
          return <option >
              {list?.Pershkrim}</option>  
          })}
      </Form.Select>
          <span className='flex items-center' style={{border:"solid 1px #ddd",backgroundColor:"#1971c2",color:"#fff"}}>
          <KlasifikimAset3 selektAAmKlasifkim3={selektAAmKlasifkim3}/>
          </span>
      </div>
     
      </div>
    </div>
  )
}

export default Asetet
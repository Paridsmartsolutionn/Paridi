import React from 'react'
import { InputText } from "primereact/inputtext";


const Njesi = ({disabled,setNdryshoKushtin}) => {
  return (
    <div className='flex flex-col'>
        <div className='border-b flex gap-3 w-6/12'>
        <label style={{color:"#1971c2",fontWeight:500}} htmlFor="username">Pesha ne KG</label>

        <span  onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label">
            <InputText disabled={disabled} className="block mb-2" type="number" placeholder="Neto" id="Neto"/>
            <label htmlFor="username">Neto</label>
        </span>

        <span  onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label">
            <InputText disabled={disabled} className="block mb-2" type="number" placeholder="Bruto" id="Bruto"/>
            <label htmlFor="username">Bruto</label>
        </span>
        </div>

        <div className='mt-3 flex flex-col border p-2 w-2/12'>
        
        <span  onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label">
            <InputText disabled={disabled} className="block mb-2" type="number" placeholder="Sasia per pakete" id="Sasia per pakete"/>
            <label htmlFor="username">Sasia per pakete</label>
        </span>

        <span  onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label mt-3">
            <InputText disabled={disabled} className="block mb-2" type="number" placeholder="Volumi m3" id="Volumi m3"/>
            <label htmlFor="username">Volumi m3</label>
        </span>
        </div>
        
        <div  className='border p-2 relative mt-3 w-2/12'>
            <span  onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className='absolute z-20' style={{top:-15,left:100,color:"#1971c2",fontWeight:500}}>Dimensione</span>
        <span className="p-float-label mb-3">
            <InputText disabled={disabled} className="block mb-2" type="number" placeholder="Gjatesia" id="Neto"/>
            <label htmlFor="username">Gjatesia</label>
        </span>
        <span  onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label mb-3">
            <InputText disabled={disabled} className="block mb-2" type="number" placeholder="Gjersia" id="Neto"/>
            <label htmlFor="username">Gjersia</label>
        </span>
        <span  onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label mb-3">
            <InputText disabled={disabled} className="block mb-2" type="number" placeholder="Lartesia" id="Neto"/>
            <label htmlFor="username">Lartesia</label>
        </span>
        </div>
    </div>
  )
}

export default Njesi
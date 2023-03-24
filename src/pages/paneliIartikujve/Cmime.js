import React,{useState} from 'react'
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import Form from 'react-bootstrap/Form';
import { InputText } from 'primereact/inputtext';

const Cmime = ({ data,selektTarifa,setSelektTarifa,disabled,setNdryshoKushtin}) => {
    
    const [value1,setValue1]=useState()
    const [state,setState]=useState(null)
  return (

<div className='flex'>


 <div className='border p-1'>


    <div  className='border-b-2 mt-1 flex gap-4'>
    <span className="p-float-label">
    <InputNumber onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} disabled={disabled} inputId="integeronly" className="block mb-2" id="Me TVSH" placeholder="Me TVSH" value={value1} onValueChange={(e) => setValue1(e.value)} />
    <label htmlFor="integeronly">Me TVSH</label>
  </span>
    
    <Form.Select 
       disabled={disabled}
       size="sm" 
       className='w-fit'
       value={selektTarifa} 
       onChange={(e)=>{setSelektTarifa(e.target.value)}} 
       onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>
         <option label='Skema'/>
        {data.Tarifa?.map(list=>{
          return <option  value={list?.Kodi}>
            {list?.Pershkrim}</option>  
        })}
      </Form.Select>

    <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label">
    <InputNumber  disabled={disabled} inputId="integeronly" className="block mb-2" id="Pa TVSH" placeholder="Pa TVSH" value={value1} onValueChange={(e) => setValue1(e.value)} />
    <label htmlFor="integeronly">Pa TVSH</label>
    </span>


    </div>

    <div className='flex gap-4 ml-16'>

    <div className='flex flex-col mt-2 gap-2.5'>
    <span  className='absolute z-10' style={{color:"#1971c2",fontWeight:"500",fontSize:"14px",top:54,left:210}}>Shitje</span>
            <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label">
            <InputText  disabled={disabled}  className="block mb-2" type="number" placeholder="Plan" id="Plan"/>
            <label htmlFor="username">Plan</label>
            </span>

            <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label">
            <InputText  disabled={disabled}  className="block mb-2" type="number" placeholder="Cmimi1" id="Cmimi1"/>
            <label htmlFor="username">Cmimi1</label>
            </span>

            <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label">
            <InputText  disabled={disabled}  className="block mb-2" type="number" placeholder="Cmimi2" id="Cmimi2"/>
            <label htmlFor="username">Cmimi2</label>
            </span>

            <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label">
            <InputText  disabled={disabled}  className="block mb-2" type="number" placeholder="Cmimi3" id="Cmimi3"/>
            <label htmlFor="username">Cmimi3</label>
            </span>

            <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}  className="p-float-label">
            <InputText disabled={disabled}  className="block mb-2" type="number" placeholder="Cmimi4" id="Cmimi4"/>
            <label htmlFor="username">Cmimi4</label>
            </span>

            <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label">
            <InputText  disabled={disabled}  className="block mb-2" type="number" placeholder="Cmimi5" id="Cmimi5"/>
            <label htmlFor="username">Cmimi5</label>
            </span>

    </div>
    <div className='border-r-2 relative'></div>

    <div className='flex flex-col mt-12 gap-2.5'>

    <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label">
            <InputText  disabled={disabled}  className="block mb-2" type="number" placeholder="Cmimi1" id="Cmimi1"/>
            <label htmlFor="username">Cmimi1</label>
            </span>

            <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label">
            <InputText   disabled={disabled} className="block mb-2" type="number" placeholder="Cmimi2" id="Cmimi2"/>
            <label htmlFor="username">Cmimi2</label>
            </span>

            <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label">
            <InputText  disabled={disabled}  className="block mb-2" type="number" placeholder="Cmimi3" id="Cmimi3"/>
            <label htmlFor="username">Cmimi3</label>
            </span>

            <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label">
            <InputText  disabled={disabled}  className="block mb-2" type="number" placeholder="Cmimi4" id="Cmimi4"/>
            <label htmlFor="username">Cmimi4</label>
            </span>

            <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label">
            <InputText  disabled={disabled}  className="block mb-2" type="number" placeholder="Cmimi5" id="Cmimi5"/>
            <label htmlFor="username">Cmimi5</label>
            </span>
            
    </div>
  
    
   
    </div>

   
  </div>

<div className='flex border ml-2 relative'>



    
  <div className='flex flex-col ml-6 p-2 gap-3'>
            <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label ">
            <InputText  disabled={disabled} className="block mb-2" type="number" placeholder="Cmimi Bleres" id="Cmimi Bleres"/>
            <label htmlFor="username">Cmimi Bleres</label>
            </span>

            <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label">
            <InputText  disabled={disabled} className="block mb-2" type="number" placeholder="Cmimi Bleres" id="Cmimi Bleres"/>
            <label htmlFor="username">Blerje Kursi</label>
            </span>

            <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label">
            <InputText  disabled={disabled} className="block mb-2" type="number" placeholder="Cmimi Bleres" id="Cmimi Bleres"/>
            <label htmlFor="username">Blerje Monedha</label>
            </span>

            <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label">
            <InputText  disabled={disabled} className="block mb-2" type="number" placeholder="Cmimi Bleres" id="Cmimi Bleres"/>
            <label htmlFor="username">Blerje cmim huaj</label>
            </span>

            <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label">
            <InputText  disabled={disabled} className="block mb-2" type="number" placeholder="Cmimi Bleres" id="Cmimi Bleres"/>
            <label htmlFor="username">Blerje data</label>
            </span>
  
        </div>
        <div className='flex flex-col gap-2'>

            <span className='absolute z-10' style={{color:"#1971c2",fontWeight:"500",fontSize:"14px",top:-12}}>Cmime plan</span>
            <span className='absolute z-10' style={{color:"#1971c2",top:-14,left:-1}}>Blerje</span>

            <span  onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label mt-14">
            <InputText disabled={disabled} className="block mb-2" type="number" placeholder="Cmimi Bleres" id="Cmimi Bleres"/>
            <label htmlFor="username">monedhe baze</label>
            </span>

            <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-float-label mt-2.5">
            <InputText  disabled={disabled} className="block" type="number" placeholder="Cmimi Bleres" id="Cmimi Bleres"/>
            <label htmlFor="username">monedhe e huaj</label>
            </span>
    </div>

    </div>
  </div>
  )
}

export default Cmime
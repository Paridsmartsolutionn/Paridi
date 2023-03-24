import React,{useState} from 'react'
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Calendar } from 'primereact/calendar';
import { TextField } from '@mui/material';

const Oferte = ({disabled,setNdryshoKushtin}) => {


    const [value1,setValue1]=useState()
    const [state,setState]=useState(null)
    const [date3, setDate3] = useState(null);

    const tarifa = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const [checked, setChecked] = useState(false);
    const [cities, setCities] = useState([]);

    const onCityChange = (e) => {
        let selectedCities = [...cities];

        if (e.checked)
            selectedCities.push(e.value);
        else
            selectedCities.splice(selectedCities.indexOf(e.value), 1);

        setCities(selectedCities);
    }
    



  return (
    <div className='flex'>


    <div className='border p-1 '>
   
   
       <div  className='border-b-2 mt-1 flex justify-center items-center gap-4 p-2'>

       <div onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}  className='flex items-center'>
        <Checkbox disabled={disabled} inputId="cb3" value="Shumice" onChange={onCityChange} checked={cities.includes('Shumice')}></Checkbox>
        <label style={{color:"#1971c2",marginLeft:"5px"}} htmlFor="cb4" className="p-checkbox-label">Oferte aktive</label>
        </div>
       
       <div onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}  className='flex flex-col '>
        <span className='absolute z-20' style={{top:53,backgroundColor:'white'}}>Date fillimi</span>
        <Calendar disabled={disabled} id="icon" value={date3} onChange={(e) => setDate3(e.value)}  />
       </div>

       
       <div  className='flex flex-col'>
       <span className='absolute z-20' style={{top:53,backgroundColor:'white'}}>Dite aktive</span>
        <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}  className="p-float-label">
            <InputText disabled={disabled} className="block" type="text" placeholder="Dite aktive" id="Dite aktive"/>
        </span>

       </div>
   
   
   
       </div>
   
       <div className='flex gap-4 ml-16'>
   
       <div className='flex flex-col mt-2 gap-2.5'>
       <span className='absolute z-10' style={{color:"#1971c2",backgroundColor:'white',fontWeight:"500",fontSize:"14px",top:54,left:80}}>Oferte</span>
               <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}  className="p-float-label">
               <InputText disabled={disabled} className="block mb-2" type="number" placeholder="Plan" id="Plan"/>
               <label htmlFor="username">Cmimi</label>
               </span>
   
               <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}  className="p-float-label">
               <InputText disabled={disabled} className="block mb-2" type="number" placeholder="Cmimi1" id="Cmimi1"/>
               <label htmlFor="username">Cmimi1</label>
               </span>
   
               <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}  className="p-float-label">
               <InputText disabled={disabled} className="block mb-2" type="number" placeholder="Cmimi2" id="Cmimi2"/>
               <label htmlFor="username">Cmimi2</label>
               </span>
   
               <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}  className="p-float-label">
               <InputText disabled={disabled} className="block mb-2" type="number" placeholder="Cmimi3" id="Cmimi3"/>
               <label htmlFor="username">Cmimi3</label>
               </span>
   
               <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}  className="p-float-label">
               <InputText disabled={disabled} className="block mb-2" type="number" placeholder="Cmimi4" id="Cmimi4"/>
               <label htmlFor="username">Cmimi4</label>
               </span>
   
               <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}  className="p-float-label">
               <InputText disabled={disabled} className="block mb-2" type="number" placeholder="Cmimi5" id="Cmimi5"/>
               <label htmlFor="username">Cmimi5</label>
               </span>
   
       </div>
       <div className='border-r-2 relative'></div>
   
       <div className='flex flex-col mt-12 gap-2.5'>
   
       <span className="p-float-label" onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} >
               <InputText disabled={disabled} className="block mb-2" type="number" placeholder="Cmimi1" id="Cmimi1"/>
               <label htmlFor="username">Cmimi1</label>
               </span>
   
               <span className="p-float-label" onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} >
               <InputText disabled={disabled} className="block mb-2" type="number" placeholder="Cmimi2" id="Cmimi2"/>
               <label htmlFor="username">Cmimi2</label>
               </span>
   
               <span className="p-float-label" onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} >
               <InputText disabled={disabled} className="block mb-2" type="number" placeholder="Cmimi3" id="Cmimi3"/>
               <label htmlFor="username">Cmimi3</label>
               </span>
   
               <span className="p-float-label" onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} >
               <InputText disabled={disabled} className="block mb-2" type="number" placeholder="Cmimi4" id="Cmimi4"/>
               <label htmlFor="username">Cmimi4</label>
               </span>
   
               <span className="p-float-label" onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} >
               <InputText disabled={disabled} className="block mb-2" type="number" placeholder="Cmimi5" id="Cmimi5"/>
               <label htmlFor="username">Cmimi5</label>
               </span>
               
       </div>
      
       </div>
   
     </div>
   
     </div>
  )
}

export default Oferte
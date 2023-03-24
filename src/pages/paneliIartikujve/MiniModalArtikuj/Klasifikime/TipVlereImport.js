import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { Checkbox } from 'primereact/checkbox';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ButtonGroup from '@mui/material/ButtonGroup';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

import { Dialog } from 'primereact/dialog';
const TipVlereImport = ({selektVlereImport}) => {

     
    const defaultState= {
        Inventar:"",
        Kodi:"",
        Pershkrim:"",
        Blerje:"",
        Shitje:"",
        KostoEmallTeShitur:"",
        LlogariAmrotizimi:""
        
      }
      const [openFurnitor,setOpenFurnitor]=useState(false)
      const [disabled,setDisabled]=useState(true)
      const [state,setState]=useState(defaultState)
  
  
  
  //     const submitHanlder = () => {
  //       try{
  
  //         axios.post(`${process.env.REACT_APP_API_KEY}/tjera/transport`,{
  //           Pershkrim:state.Pershkrim,
  //           Nipt:state.Nipt,
  //           Targa_e_Mjetit:state.Targa,
  //           Adresa:state.Adresa,
  //           Email:state.Email,
  //           Cel:state.Celular,
  //           Tel:state.Telefon,
  //           Aktiv:state.Aktiv
  //         })
  //         setTimeout(() => {
  //           fetchMonedhat();
  //         }, 1000);
  //   }
  //   catch (error) {
        
  //   }}
    
    
      const handleChange=(key,value)=>{
          setState((state)=>{
              return {
                  ...state,
                  [key]:value
              }
          })
        }
        
        //  useState i modaleve brenda kategorive ne fletblerje
        const [displayResponsive, setDisplayResponsive] = useState(false);
        const [position, setPosition] = useState('center');
        
        const dialogFuncMap = {
            'displayResponsive': setDisplayResponsive
        }
        
        const onClick = (Pershkrim, position) => {
            dialogFuncMap[`${Pershkrim}`](true);
        
            if (position) {
                setPosition(position);
            }
        }
        
        const onHide = (Pershkrim) => {
            dialogFuncMap[`${Pershkrim}`](false);
        }
        
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
        
  
        const [tableShowHide,setTableShowHide]=useState(false)
  
  
          const Rekorde = selektVlereImport?.Tip_Vlere_Import
          console.log({Rekorde})
  
        const rrjeshtat = `${Rekorde ? Rekorde.length : 0} Rekorde`
  

  return (
    <div>
    <form>
    <AddIcon fontSize='small'
          className='cursor-pointer'
          onClick={() => onClick('displayResponsive')}
          >Open</AddIcon>

      <Dialog header="Shtim/Modifikim Tip Vlere Import" 
     visible={displayResponsive} 
     onHide={() => onHide('displayResponsive')} 
    breakpoints={{'960px': '75vw'}} 
     style={{width: '24.5vw'}}>

<div className=' mt-2'>
<ButtonGroup size="xl" className="mb-2">
  <Button className='p-2' onClick={(e)=>{e.preventDefault();setDisabled(false)}}><PostAddIcon/> Shtim</Button>
  <Button className='p-2' disabled={disabled}><DeleteIcon/> Fshije</Button>
  <Button className='p-2' onClick={(e)=>{e.preventDefault();setState(defaultState);setDisabled(true)}} disabled={disabled}><ClearIcon/>Anullim</Button>
  <Button className='p-2' onClick={(e)=>{e.preventDefault();setState(defaultState)}} disabled={disabled} type="submit"><AppRegistrationIcon/>Rregjistrim</Button>
</ButtonGroup>
</div>

<div className='border flex flex-col p-2 relative mt-3'>
{/* <span className='absolute z-20' style={{top:-15,color:"#1971c2",backgroundColor:"white",fontWeight:500}}>Skema</span> */}

  <TextField
  disabled={disabled}
  type="text"  
  variant="outlined" 
  label='Kodi'
  inputProps={{maxLength:'10'}}
  size='small' 
  value={state?.Kodi}
  onChange={(e)=> handleChange("Kodi",e.target.value)}
  className='mt-2 w-7/12'/>



  <TextField
  disabled={disabled}
  variant="outlined" 
  label="Pershkrim" 
  type="text" 
  value={state?.Pershkrim}
  onChange={(e)=> handleChange("Pershkrim",e.target.value)}
  size='small'
  className='mt-2 w-7/12'
      />


<div className='flex'>

  <TextField
  disabled={disabled}
  type="text"  
  variant="outlined" 
  label='Tvsh'
  size='small' 
  value={state?.Tvsh}
  onChange={(e)=> handleChange("Tvsh",e.target.value)}
  className='mt-2 w-7/12'/>
  <div className='flex items-center'>
  <Checkbox  className='ml-2' inputId="cb1" value="Aktiv" onChange={onCityChange} checked={cities.includes('Aktiv')}></Checkbox>
  <label  label style={{marginLeft:"5px",fontWeight:500}} htmlFor="cb2" className="p-checkbox-label">Aktiv</label>
</div>
  </div>

</div>
  <span><b>{rrjeshtat}</b></span>
  

</Dialog>

  </form>
</div>
  )
}

export default TipVlereImport
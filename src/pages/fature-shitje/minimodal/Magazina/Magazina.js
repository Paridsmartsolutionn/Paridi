import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import PostAddIcon from '@mui/icons-material/PostAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ButtonGroup from '@mui/material/ButtonGroup';
import axios from 'axios';
import PergjegjesMagazina from './PergjegjesMagazina';
import DepartamentMagazina from './DepartamentMagazina';
import QytetiMagazina from './QytetiMagazina';
import { Dialog } from 'primereact/dialog';
import Form from 'react-bootstrap/Form';
import { Checkbox,FormControlLabel, TextField } from '@mui/material';
const Magazina = ({fetchMAgazin}) => {
    

    const [pergjegjes, setPergjegjes] = useState([])
    const [departamenti, setDepartament] = useState([])
    const [qytetet, setQytetet] = useState([])

    const [magazina, setMagazina] = useState([])
// console.log({magazina})


    const fetchMagazina = async () => {
        

        try {
            const response = await axios(`${process.env.REACT_APP_API_KEY}/fatura/shitje/data`)
            
            setPergjegjes(response.data?.Pergjegjes)
            setDepartament(response.data?.Departament)
            setQytetet(response.data?.Qytetet)
            setMagazina(response)
        }
        catch (error) {
            console.log(error) 
        } 
    }
    
    useEffect(()=> {
        fetchMagazina();
      }, [])



    const defaultState= {
    
    Kodi:"",
    Pershkrim:"",
    Pergjegjes:"",
    Departament:"",
    Qyteti:"",
    Adresa:"",
    Nipt:"",
    Shenim:"",
    Ztotale:"",
    Zperdorim:"",
    Npunonjes:"",
    Qira:"",
    Active:'',
      
    }



    const sumbitHandler = () => {
try{

    axios.post(`${process.env.REACT_APP_API_KEY}/magazina`,{
        Kodi:state.Kodi,
        Pershkrim:state.Pershkrim,
        Punonjes_Id:state.Npunonjes,
        Shenim:state.Shenim,
        Dep_Kodi:state.Departament,
        Adresa:state.Adresa,
        NrSerialNIPT:state.Nipt,
        Siperfaqja:state.Ztotale,
        NrPunonjes:state.Npunonjes,
        Qira:state.Qira,
        Qyteti_Kodi:state.Qyteti,
        Aktiv:state.Active,
        
    })
    setTimeout(() => {
        fetchMAgazin();
      }, 1000);
    }
      catch (error) {   
        console.log(error) 
      }}
      

    const [openFurnitor,setOpenFurnitor]=useState(false)
    const [disabled,setDisabled]=useState(true)
    const [state,setState]=useState(defaultState)

    const handleChange=(key,value)=>{
        setState((state)=>{
            return {
                ...state,
                [key]:value
            }   
        })
      }
      console.log({state})



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
  return (
    <form onSubmit={()=> sumbitHandler()}>
<AddIcon fontSize='small'
          className='cursor-pointer'
          onClick={() => onClick('displayResponsive')}
          >Open</AddIcon>

      <Dialog header="Magazina" 
     visible={displayResponsive} 
     onHide={() => onHide('displayResponsive')} 
    breakpoints={{'960px': '75vw'}} 
     style={{width: '30vw'}}>

<div className=' mt-2'>
<ButtonGroup size="xl" className="mb-2">
    <Button className='p-2' onClick={(e)=>{e.preventDefault();setDisabled(false)}}><PostAddIcon/> Shtim</Button>
    <Button className='p-2' disabled={disabled}><DeleteIcon/> Fshije</Button>
    <Button className='p-2' onClick={(e)=>{e.preventDefault();setState(defaultState)}} disabled={disabled}><ClearIcon/>Anullim</Button>
    <Button className='p-2' onClick={(e)=>{e.preventDefault();sumbitHandler();setState(defaultState)}} disabled={disabled} type="submit"><AppRegistrationIcon/>Rregjistrim</Button>
</ButtonGroup>
</div>

<div className='flex border p-2 gap-4'>
<div>

    <TextField
    disabled={disabled}
    type="text"  
    variant="outlined" 
    label='Kodi'
    inputProps={{maxLength:10}}
    value={state?.Kodi}
    onChange={(e)=>handleChange("Kodi",e.target.value)}
    size='small' />

<br/> 

<TextField
        disabled={disabled}
        type="text"  
        variant="outlined" 
           label="Pershkrim" 
           value={state?.Pershkrim}
           onChange={(e)=> handleChange("Pershkrim",e.target.value)}
           size='small'
           className='mt-3'
           />
      

<div className='flex justify-start items-center'>

<PergjegjesMagazina  fetchPrgjMag={fetchMagazina}/>
        
        <Form.Select
        style={{width:'200px'}}
     placeholder='Pergjegjes'
     disabled={disabled}
     className='mt-3'
     value={state?.Pergjegjes}
     onChange={(e)=> handleChange("Pergjegjes",e.target.value)}>
        <option label='Pergjegjes'/>
        {pergjegjes.map(list=>{
            return <option key={list.Id} >{list.Emer}  {list.Mbiemer}</option>
        })}
    </Form.Select>

         </div>

<div className='flex justify-start items-center'>
    
<DepartamentMagazina   fetchDepMag={fetchMagazina}/>
        <Form.Select
        style={{width:'200px'}}
     placeholder='Departament'
     disabled={disabled}
     className='mt-3'
     value={state?.Departament}
     onChange={(e)=> handleChange("Departament",e.target.value)}>
        <option label='Departament'/>
        {departamenti.map(list=>{
            return <option key={list.Id} value={list.Id}>{list.Pershkrim}</option>
        })}
    </Form.Select>

         </div>
<div className='flex justify-start items-center'>
    <QytetiMagazina  fetchQytMag={fetchMagazina}/>
        <Form.Select
         style={{width:'200px'}}
     placeholder='Qyteti'
     disabled={disabled}
     className='mt-3    '
     value={state?.Qyteti}
     onChange={(e)=> handleChange("Qyteti",e.target.value)}>
        <option label='Qyteti'/>
        {qytetet.map(list =>{
            return <option key={list.Id} value={list.Kodi}>{list.Pershkrim}</option>
        })}
    </Form.Select>

    <FormControlLabel
    style={{marginLeft:'1rem',marginTop:'1rem'}}
            control={
    <Checkbox

          disabled={disabled}
          type="checkbox"  
          variant="outlined" 
          size='small' 
          value={state?.Active}
          onChange={(e)=> handleChange("Active",e.target.checked)}
       />}label='Aktiv'
    />
         </div>

    <TextField
    disabled={disabled}
    type="text"  
    variant="outlined" 
    label='Adresa'
    size='small' 
    value={state?.Adresa}
    className="mt-3"
    onChange={(e)=> handleChange("Adresa",e.target.value)}
    />

    <TextField
    disabled={disabled}
    type="text"  
    variant="outlined" 
    inputProps={{maxLength:10}}
    label='Nipt'
    size='small' 
    value={state?.Nipt}
    onChange={(e)=> handleChange("Nipt",e.target.value)}
    className='mt-3'/>



    <textarea
        disabled={disabled}
           cols="38" 
           rows='3' 
           placeholder="Shenim" 
           value={state?.Shenim}
           onChange={(e)=> handleChange("Shenim",e.target.value)}
           className="shenim resize-none rounded-md mt-3" >
        </textarea>  
</div>

<div>

<TextField
    disabled={disabled}
    type="number"  
    variant="outlined" 
    label='Zona totale'
    size='small' 
    value={state?.Ztotale}
    onChange={(e)=> handleChange("Ztotale",e.target.value)}
    className='mt-3'/>


<TextField
    disabled={disabled}
    type="number"  
    variant="outlined" 
    label='Zona ne perdorim'
    size='small' 
    value={state?.Zperdorim}
    onChange={(e)=> handleChange("Zperdorim",e.target.value)}
    className='mt-3'/>


<TextField
    disabled={disabled}
    type="number"  
    variant="outlined" 
    label='Nr Punonjes'
    size='small' 
    value={state?.Npunonjes}
    onChange={(e)=> handleChange("Npunonjes",e.target.value)}
    className='mt-3'/>

<TextField
    disabled={disabled}
    type="number"  
    variant="outlined" 
    label='Qira'
    size='small' 
    value={state?.Qira}
    onChange={(e)=> handleChange("Qira",e.target.value)}
    className='mt-3'/>




 
</div>
    


    </div>
 
   
    
      </Dialog>
    </form>
  )
}

export default Magazina
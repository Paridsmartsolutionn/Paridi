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
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { TextField } from '@mui/material';


const LlojiMallit = ({selektLlojiMallit}) => {



  const defaultState= {

    Pershkrim:""
    
  }
  
//   const submitHanlder = () =>{
//     try{

//       axios.post(`${process.env.REACT_APP_API_KEY}/tjera/klasifikim/1`,{
//         Pershkrim:state.Pershkrim
        
//       })
//       setTimeout(() => {
//         // fetchMonedhat();
//       }, 1000);
// }
// catch (error) {
    
// }}

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
  //  useState i modaleve brenda kategorive ne fletblerje
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const rekordet = selektLlojiMallit.Lloji_Mallit

  const rekorde = `${rekordet ? rekordet.length : 0} Rekorde`

  return (
    <form >
    <AddIcon fontSize='small' className='cursor-pointer' onClick={handleShow}>Open</AddIcon>
 
 <Modal centered style={{marginLeft:'1rem',marginTop:'-2rem'}} show={show} onHide={handleClose}>  
    <Modal.Header style={{background:' #1971c2'}} >
      <Modal.Title style={{color:'white',fontSize:'20px'}}><spna style={{color:"#d0ebff "}}>Shtim/Modifikim</spna> Lloji i mallit</Modal.Title>
      <div >
    <CloseIcon   onClick={()=>handleClose(false)} style={{color:'white'}} className="flex  justify-between items-end cursor-pointer" />
      </div>
    </Modal.Header>
    <Modal.Body>
      <Form>


<div className='mt-2'>
<ButtonGroup size="xl" className="mb-2">
    <Button className='p-2' onClick={(e)=>{e.preventDefault();setDisabled(false)}}><PostAddIcon/> Shtim</Button>
    <Button className='p-2' disabled={disabled}><DeleteIcon/> Fshije</Button>
    <Button className='p-2' onClick={(e)=>{e.preventDefault();setState(defaultState);setDisabled(true)}} disabled={disabled}><ClearIcon/>Anullim</Button>
    <Button className='p-2' onClick={(e)=>{e.preventDefault();setState(defaultState)}} disabled={disabled} type="submit"><AppRegistrationIcon/>Rregjistrim</Button>
</ButtonGroup>
</div>

<div className='border p-2 flex flex-col w-7/12'>

    <TextField
    disabled={disabled}
    type="text"
    size="small"
    variant='outlined'
    label="Pershkrim" 
    value={state?.Pershkrim}
    onChange={(e)=> handleChange("Pershkrim",e.target.value)}
    className="mt-3" >
    </TextField>  



    </div>
    <spna><b>{rekorde}</b></spna>
    </Form>
        </Modal.Body>
    
      </Modal>
    </form>
  )
}

export default LlojiMallit
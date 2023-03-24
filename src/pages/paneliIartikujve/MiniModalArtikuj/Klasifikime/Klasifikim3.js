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
import Klasifikim4 from './Klasifikim4';
import { Dialog } from 'primereact/dialog';


const Klasifikim3 = () => {



  const defaultState = {
    Kodi: '',
    Pershkrim: ""

  }

  const submitHanlder = () => {
    try {

      axios.post("", {
        Pershkrim: state.Pershkrim

      })
      setTimeout(() => {
        // fetchMonedhat();
      }, 1000);
    }
    catch (error) {

    }
  }

  const [openFurnitor, setOpenFurnitor] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [state, setState] = useState(defaultState)

  const handleChange = (key, value) => {
    setState((state) => {
      return {
        ...state,
        [key]: value
      }
    })
  }


  const [masterKod, setMasterKod] = useState([])
  //   const rekordet = selektKls2.Art_Klasifikim2

  //   const rekorde = `${rekordet ? rekordet.length : 0} Rekorde`


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
    <form onSubmit={() => submitHanlder()}>

 <div fontSize='small' className='cursor-pointer -rotate-90 bg-sky-600 text-white pl-1 pr-1 z-50 text-xs tracking-widest rounded-b-md' onClick={() => onClick('displayResponsive')}>Shto</div>
      
      <Dialog header="Shtim/Modifikim Klasifikim 3"
        visible={displayResponsive}
        onHide={() => onHide('displayResponsive')}
        breakpoints={{ '960px': '75vw' }}
        style={{ width: '24.5vw' }}>


        <div className='mt-2'>
          <ButtonGroup size="xl" className="mb-2">
            <Button className='p-2' onClick={(e) => { e.preventDefault(); setDisabled(false) }}><PostAddIcon /> Shtim</Button>
            <Button className='p-2' disabled={disabled}><DeleteIcon /> Fshije</Button>
            <Button className='p-2' onClick={(e) => { e.preventDefault(); setState(defaultState); setDisabled(true) }} disabled={disabled}><ClearIcon />Anullim</Button>
            <Button className='p-2' onClick={(e) => { e.preventDefault(); submitHanlder(); setState(defaultState) }} disabled={disabled} type="submit"><AppRegistrationIcon />Rregjistrim</Button>
          </ButtonGroup>
        </div>

        <div className='border p-2 flex flex-col w-7/12'>

          <TextField
            disabled={disabled}
            type="text"
            size="small"
            variant='outlined'
            label="Kodi"
            value={state?.Kodi}
            onChange={(e) => handleChange("Kodi", e.target.value)}
            className=" mt-3" >
          </TextField>

          <TextField
            disabled={disabled}
            type="text"
            size="small"
            variant='outlined'
            label="Pershkrim"
            value={state?.Pershkrim}
            onChange={(e) => handleChange("Pershkrim", e.target.value)}
            className="mt-3" >
          </TextField>

          <div className='flex items-center'>

            <span className='flex items-center mt-3' style={{ border: "solid 1px #ddd", backgroundColor: "#1971c2", color: "#fff" }}>
              <Klasifikim4 />
            </span>

            <Form.Select
              size="sm"
              className='mt-3'
              value={masterKod}
              onChange={(e) => { setMasterKod(e.target.value) }} >
              <option label='Master Kodi' />

            </Form.Select>
          </div>

        </div>
        {/* <spna><b>{rekorde}</b></spna> */}


      </Dialog>
    </form>
  )
}

export default Klasifikim3
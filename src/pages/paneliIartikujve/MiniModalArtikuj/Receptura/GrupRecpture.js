import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import dummyData from "../../../../demo-data/dummyData.json"
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ButtonGroup from '@mui/material/ButtonGroup';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { TextField } from '@mui/material';
import { InputText } from "primereact/inputtext"
import useStorage from '../../../../hooks/useStorage';
import { Dialog } from 'primereact/dialog';


const GrupRecpture = ({ isEditable = true,  showHideColumns = true, gridKey,data}) => {

  const defaultState={
    Pershkrim:''
  }
  
const[state,setState]=useState(defaultState)
const [disabled,setDisabled]=useState(true)





const handleChange=(key,value)=>{
    setState((state)=>{
        return {
            ...state,
            [key]:value
        }
    })
}
const submitHanlder = () =>{
    try{

      axios.post("",{
        Pershkrim:state.Pershkrim
        
      })
      setTimeout(() => {
        // fetchMonedhat();
      }, 1000);
}
catch (error) {
    
}}

const columns = [
  {field:"kodi", title:"Kodi"},
  {field:"Pershkrim", title:"Pershkrim"}
]

const [rows,setRows]=useState([])

console.log({rows})
const onCellEditComplete = (e) => {
  let { rowData, newValue, value,rowIndex, field } = e
  if(field=="Kodi") return;
  let cellData=null;
  if (typeof value == "number") {
    cellData=parseFloat(newValue)
  } else {
    cellData=newValue
  }

  const newRowData={...rowData,[field]:cellData}
  let allRows = [...rows];
  
  allRows[rowIndex] = newRowData;

  setRows(allRows);


}



const cellEditor = (options) => {
  const column=options?.column
  if(column?.props?.editColumn==false){
    return (
    <Column key={column.field} colSpan={1} >

      </Column>
      )
  }
  return textEditor(options)
}


const rrjeshta = data?.Grup

const rekorde = `${rrjeshta ? rrjeshta.length : 0} rekorde`
    
const textEditor = (options) => {
  return (
    <InputText
      type="text"
      value={options.value}
      onChange={(e) => options.editorCallback(e.target.value)}
    />
  )
}



const dynamicColumns = columns?.map(
  (col, i) => {
    return (
      <Column
        style={{height:"2.6rem"}}
        {...(isEditable && {
          onCellEditComplete: (e) => onCellEditComplete(e),
          
        })}
        {...(isEditable && { editor: (options) => cellEditor(options) })}
        key={col?.field}
        sortable
        field={col?.field}
        header={col?.title}
        
      />
    )
  }
)



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

        <form onSubmit={()=>submitHanlder()}>
                   <AddIcon fontSize='small'
          className='cursor-pointer'
          onClick={() => onClick('displayResponsive')}
          >Open</AddIcon>

      <Dialog header="Shtim/Modifikim Art Prodhim Grup.." 
     visible={displayResponsive} 
     onHide={() => onHide('displayResponsive')} 
    breakpoints={{'960px': '75vw'}} 
     style={{width: '24.5vw'}}>
    
    
    <div className='mt-2'>
    <ButtonGroup size="xl" className="mb-2">
        <Button className='p-2' onClick={(e)=>{e.preventDefault();setDisabled(false)}}><PostAddIcon/> Shtim</Button>
        <Button className='p-2' disabled={disabled}><DeleteIcon/> Fshije</Button>
        <Button className='p-2' onClick={(e)=>{e.preventDefault();setState(defaultState)}} disabled={disabled}><ClearIcon/>Anullim</Button>
        <Button className='p-2' onClick={(e)=>{e.preventDefault();submitHanlder();setState(defaultState)}} disabled={disabled} type="submit"><AppRegistrationIcon/>Rregjistrim</Button>
    </ButtonGroup>
    </div>
    
    <div className='border p-2 flex flex-col gap-3'>

         <TextField
         type='text'
         disabled={disabled}
         label='Pershkrim'
         value={state?.Pershkrim}
         onChange={(e)=>handleChange('Pershkrim',e.target.value)}
         size='small'
         className='mt-2'
         
         
         />
         
       <DataTable
            size='small'
            value={rows}
            selectionMode="single"
            scrollable 
            scrollHeight="200px" 
            virtualScrollerOptions={{ itemSize: 46 }} 
            responsiveLayout="scroll">
                {dynamicColumns}
       </DataTable>
    
    
    
    
        </div>
        <span><b>{rekorde}</b></span>

      
          </Dialog>
        </form>
  )
}

export default GrupRecpture
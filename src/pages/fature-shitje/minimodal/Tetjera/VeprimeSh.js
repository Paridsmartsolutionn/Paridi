import React,{ useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import Combobox from "react-widgets/Combobox";
// import "./Veprimi.css" 
import DropdownList from "react-widgets/DropdownList";



const VeprimeSh = () => {
  const [rows,setRows]=useState([])

    const columns = [
        {title:"Kodi",name:"Kodi",Id:0,},
        {title:"Pershkim",name:"Pershkim",Id:2},
        {title:"Llogari",name:"Llogari",Id:3},
        {title:"Llogari Pershkrim",name:"Llogari Pershkrim",Id:4},
        {title:"Nuk Kalkulohet",name:"Nuk Kalkulohet",Id:5},
        {title:"Kontabilizohet",name:"Kontabilizohet",Id:6},
        // {title:"Id",name:"Id",Id:7},
        // {title:"Tipi",name:"Tipi",Id:8},
        // {title:"Forma",name:"Forma",Id:9},
        // {title:"Tabela",name:"Tabela",Id:10},
        // {title:"Aktiv",name:"Aktiv",Id:11},
    ]

// const [veprime,setVeprime]=useState([
//   {Kodi:1,Pershkrimi:"one",name:"Leanne Graham"},
//   {Kodi:"12346",Pershkrimi:"two",name:"Ervin Howell"},
//   {Kodi:"12347",Pershkrimi:"three",name:""},
// ])
const [llogari,setLlogari]=useState([])

const handleComboBoxChange=({row,selected,dataKey,rowKey})=>{
  let value=selected?.[dataKey] ?? selected
  setRows((rows)=>{
    return rows.map(currentRow=>{
      if(currentRow[rowKey]==row[rowKey]){
        return {...currentRow,[rowKey]:value,email:value}
      }
      return {...currentRow}
    })
  })
}

const kolonat=[
  {
    title:"Kodi",
    name:"Kodi",
    cellType: "combobox",
    options:rows,
    dataKey:"Kodi",
    // dataRow:"Kodi",
    textField:"Pershkim",
    onChange:handleComboBoxChange


  },
  {title:"Pershkim",name:"Pershkim",Id:2},
  {title:"Llogari",name:"Llogari",Id:3},
  {title:"Llogari Pershkrim",name:"Llogari Pershkrim",Id:4},
  {title:"Nuk Kalkulohet",name:"Nuk Kalkulohet",Id:5},
  {title:"Kontabilizohet",name:"Kontabilizohet",Id:6},
]


// useEffect(()=>{
//     axios.get(`${process.env.REACT_APP_API_KEY}/fatura/blerje/data`)
//     .then(resp => {
//       setRows(resp.data[12].Skema_Veprimit)
//         // setLlogari(resp.data[0].Llogari)
//     })
// },[])

    const [openFurnitor,setOpenFurnitor]=useState(false)

      //  useState i modaleve brenda kategorive ne fletblerje
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
console.log({rows})
      
  return (
    <div>
        <AddIcon fontSize='small' className='cursor-pointer' onClick={handleShow}>Open</AddIcon>
    
    <Modal centered size="lg" show={show} onHide={handleClose}>  
        <Modal.Header  >
          <Modal.Title><span style={{color:"#1971c2 ",fontSize:'20px'}}>Skema e Veprimit /</span>  Fature Blerje</Modal.Title>
          <div style={{marginLeft:'10rem'}}>
        <CloseIcon  onClick={()=>handleClose(false)} className="flex justify-between items-end cursor-pointer"/>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
    {/* <table>
  <thead>
    {columns?.map(list =>{
        return <th key={list?.Id}>{list?.title}</th>
    })}
    
  
  </thead>
  <tbody className='tBody'>
   {veprime.map(list => {
    return  <tr className='tr'>
    <td><Combobox
  defaultValue=""
  data={veprime  }
  dataKey='id'
  textField='firstname'
  renderListItem={({ item }) => (
    <span>
      <strong>{item.firstname}</strong>
      {" " + item.email}
    </span>
  )}
  /></td>
    <td><Combobox
  defaultValue=""
  data={list.username}
    
  /></td>
    <td></td>


  </tr>
   })}
 


</tbody>
 
 

<div className="site-input-group-wrapper">

  </div>


</table> */}

 
{/* <TableGrid 
      isEditable={false}
      sortable={false}
      isExportable={false}
      showSearch={false}
      rows={rows}
      setRows={setRows}
      columns={kolonat}

    /> */}
    
    

</Form>
        </Modal.Body>
    
      </Modal>


    </div>
  )
}

export default VeprimeSh
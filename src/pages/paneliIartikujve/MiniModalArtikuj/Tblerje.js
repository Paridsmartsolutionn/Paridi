import React,{useState} from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { TextField } from '@mui/material';


const TabelePerTarifat = ({skema}) => {

  const [columns,setColumns]=useState([
    {field:"Kodi",title:"Kodi"},
    {field:"Pershkrim",title:"Pershkrim"}
  ])

console.log({skema})

const [tableShowHide,setTableShowHide]=useState(false)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function myFunction() {
    
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
    let tdTable = document.querySelector("td").textContent
    console.log({tdTable})
    const showDiv = document.querySelector(".myTable")   
    showDiv.classList.remove("myTable")
  }
  const showHide =()=>{
    const input = document.querySelector("#myInput").value
    if(tableShowHide === false){
        setTableShowHide(true)
    }else if(input === ""){
        setTableShowHide(false)
    }
  }

const [displayModal, setDisplayModal] = useState(false);
const [cellInput,setCellInput]=useState("")

const dialogFuncMap = {

    'displayModal': setDisplayModal,

}
const [position, setPosition] = useState('right');

const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
        setPosition(position);
    }
}

const renderFooter = (name) => {
    const rows = `${skema ? skema.length : 0} Rekorde`
    return (
        <div>
            <span>{rows}</span>
        </div>
    );
}

const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
}

const [row,getRow]=useState([])

const dataRow = () => {
    console.log({row})
}

  return (
    <div>    <div>

               
    <TextField className='myTable' size="small" variant='outlined'  onClick={() => {onClick('displayModal');handleShow()}} type="text" id="myInput" onChange={myFunction}  onSelect={showHide} placeholder="Kekro" />
   
    <Dialog header="Llogari" visible={displayModal} modal={false} style={{ width: '24vw', height:"20vw" }} footer={renderFooter('displayModal')} onHide={() => onHide('displayModal')}>
    <table id="myTable" className='myTable' >
                   <thead>
                   <tr>
              
                       <th>Kodi</th>
                       <th>Pershkrim</th>
                   </tr>
                   </thead>
                   <tbody>
                       {
                           skema.map((item) => (
                               <tr onClick={dataRow} onChange={(e)=>getRow(e.target.value)}>
                                   <td >{item.Kodi}</td>
                                   <td>{item.Pershkrim}</td>
                               </tr>
                           ))
                       }
                   </tbody>
               </table>
        
       </Dialog>
         
       </div></div>
  )
}

export default TabelePerTarifat
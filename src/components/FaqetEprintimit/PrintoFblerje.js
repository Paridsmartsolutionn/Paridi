import React, { useState, useRef, memo, } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';



const PrintoFblerje = ({NrSerial,Nr,Nipt,Adresa1,Nipt1,EmrFurnitopri}) => {
    
let data = moment().format("yyyy-MM-DD HH:mm:ss")


  return (
    
<div className="border p-2 max-w-5xl container print">
<div>
    <div className='m-6'>
        <div className='flex justify-between'>

        <span>Nr.Serial: {NrSerial}
           </span>

        <div>
        <h1><b>Fature Blerje</b></h1>
        <span className='flex justify-center'>Nr {Nr}</span>
        </div>

        <div className='flex flex-col'>
            <div className='flex justify-between'>
            <div  className='mr-8'>Data:</div>
            <span style={{borderBottom:"solid 1px black"}}>{data}</span>
            </div>
            <div className='flex justify-between'>
                <div>Nr. i Fatures</div>
                <span style={{borderBottom:"solid 1px black"}}>{Nr}</span>
            </div>
        </div>

        </div>
        <div className='flex justify-between items-center mt-4 mb-4'>
            <div style={{borderRadius:"0.6rem",lineHeight:"2"}} className='flex flex-col border pr-48 pt-2 pl-2 '>
            <span>Shitesi : {EmrFurnitopri}</span>
            <span>NIPT : {Nipt1}</span>
            <span>Adresa : {Adresa1}</span>
            </div>
        <div style={{borderRadius:"0.6rem",lineHeight:"2.1"}} className='flex justify-between border pr-2 pt-2 pb-2 pl-6 items-end'>
        <div className='flex flex-col items-center'>
                <span className='mr-2'>Blersi: </span>
                <span className='mr-2'>NIPT: </span>  
                <span className='mr-2'>Adresa: </span>
        </div>
        <div className='flex  flex-col items-center'>
                <div style={{borderBottom:"solid 1px black"}}>Parid Smart Solution</div>
                <div style={{borderBottom:"solid 1px black"}}>{Nipt}</div>
                <div style={{borderBottom:"solid 1px black"}}>Rr. Abdyl frasheri,Hekla</div>
                </div>
   
            </div>
        </div>
        <div className='flex justify-between mb-2'>
            <p style={{borderBottom:"solid 1px black"}}>Printuar me {data}</p>
          

        </div>
    </div>


      </div>

</div>

  )
}

export default memo(PrintoFblerje)
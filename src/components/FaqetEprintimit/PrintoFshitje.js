import React, { useState, useRef, memo, } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';



const PrintoFshitje = ({NrSerial,Nr,Nipt,Pershkrim,KnfgPrshk,KnfgAdresa,KnfgTel,KnfgNipt}) => {
    
let data = moment().format("yyyy-MM-DD HH:mm:ss")


  return (
    
<div className="border p-2 max-w-5xl container print">
<div>
    <div className='m-6'>
        <div className='flex justify-between'>

        <span>Nr.Serial: {NrSerial} </span>

        <div>
        <h1 className='mb-2.5'><b>Fature Shitje</b></h1>
        <span className='flex justify-center'>Nr {Nr}</span>
        </div>

        <div className='flex flex-col'>
            <div className='flex justify-between mb-2'>
            <div  className='mr-8'>Data:</div>
            <span style={{borderBottom:"solid 1px black"}}>{data}</span>
            </div>
            <div className='flex justify-between'>
                <div>Nr. i Fatures</div>
                <span style={{borderBottom:"solid 1px black"}}>{Nr}</span>
            </div>
        </div>

                 </div>
     
        <div  className='flex flex-row justify-between border pr-48  pl-2'>
            <div  className='flex flex-col pr-48  pl-2 '>
            <span>Emri i Shitesit : {KnfgPrshk}  </span>
            <span>Adresa : {KnfgAdresa} </span>
            <span>Telefoni : {KnfgTel}</span>
            <span>Nipt : {KnfgNipt}</span>
            <span>Kod Fiskal</span>
     
            </div>
     
        </div>
        
    <div className='flex flex-row justify-between border pr-48  pl-2 '>
            <div  className='flex flex-col ml-2 '>
                <span>Emri i Blersit : {Pershkrim} </span>
               <span>Adresa</span>
               <span>Telefoni</span>
               <span>Nr ID </span>
               <span>Kod Fiskal</span>
           </div>  
        
           <div className='flex flex-col '>
                   <span className='mr-2'>Emri i Transportuesit: </span>
                   <span className='mr-2'>Adresa: </span>
                   <span className='mr-2'>Targa e Mjetit: </span>
                   <span className='mr-2'>Ora e Furnizimit: </span>
                   <span className='mr-2'>NIPT: </span>  
           </div>
           
    </div>
   
            
{/*         
        <div className='flex justify-between mb-2'>
            <p style={{borderBottom:"solid 1px black"}}>Printuar me {data}</p>
          

        </div> */}
    </div>


      </div>

</div>

  )
}

export default memo(PrintoFshitje)
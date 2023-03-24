
import React from 'react'

const TotalFooterFShtije = (props) => {



  return (
<div style={{flexDirection:'column'}} className='flex totalFooter p-8'>
    <div style={{justifyContent:'flex-end'}} className='flex  mb-11'>
         <div className='flex flex-col'>
           <p className='mr-4'>Skonto Vlera</p>
           <p className='mr-4'>Vlera Pa Tvsh</p>
           <p className='mr-4'>Vlera e Tvsh</p>
           <p className='mr-4'>Totali: </p>

         </div>
        
        <div className='flex flex-col'>
          
           <p className='flex justify-around'>{props.newskontoVlera}</p> 
           <p className='flex justify-around'>{props.newvleraPaTvsh}</p>
           <p className='flex justify-around'>{props.newTvshVlera}</p>
           <p className='mt-2'>{props.newTot}</p>
          

        </div>
    
    </div>
<div style={{display:'flex ',justifyContent:'space-around' }}>

    <div className='flex items-end'>
       <div className='flex flex-column'>
        <h6  className="flex justify-center"><b>BLERSI</b></h6>
        <p> (emer,mbiemer,firma)</p>
        <span style={{borderBottom:"solid 1px black",width:"155px",marginTop:'3rem'}} ></span>
        </div> 
    </div>
    <div className='flex items-end'>
    <div className='flex flex-column'>
        <h6  className="flex justify-center"><b>TRANSPORTUESI</b></h6>
        <p> (emer,mbiemer,firma)</p>
        <span style={{borderBottom:"solid 1px black",width:"155px",marginTop:'3rem'}} ></span>
        </div> 
    </div>
    <div className='flex items-end'>
    <div className='flex flex-column'>
        <h6  className="flex justify-center"><b>SHITESI</b></h6>
        <p> (emer,mbiemer,firma)</p>
        <span style={{borderBottom:"solid 1px black",width:"155px",marginTop:'3rem'}} ></span>
        </div> 
    </div>
</div>

    </div>

  )
}

export default TotalFooterFShtije
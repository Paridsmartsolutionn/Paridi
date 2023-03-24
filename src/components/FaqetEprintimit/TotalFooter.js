import { border, borderBottom } from '@mui/system'
import React from 'react'




const TotalFooter = (props) => {



  return (
    <div className='flex justify-between totalFooter p-8'>

    <div className='flex items-end'>
        <p style={{borderTop:"solid 1px black",width:"140px"}}  className="flex justify-center">Dorezoi</p>
    </div>
    <div className='flex items-end'>
        <p style={{borderTop:"solid 1px black",width:"140px"}} className="flex justify-center">Pranoi</p>
    </div>
 <div className='flex justify-between'>
        <div className='flex flex-col'>
        <p className='mr-4'>Skonto Vlera</p>
        <p className='mr-4'>Vlera Pa Tvsh</p>
        <p className='mr-4'>Vlera e Tvsh</p>
        <p className='mr-4'>Totali: </p>

        </div>
    <div className='flex flex-col'>
        <div>   
        <p className='flex justify-around'>{props.newskontoVlera}</p> 
        <p className='flex justify-around'>{props.newvleraPaTvsh}</p>
        <p className='flex justify-around'>{props.newTvshVlera}</p>
        <p className='mt-2'>{props.newTot}</p>
        </div>
        




    </div>
    
</div>

    </div>

  )
}

export default TotalFooter
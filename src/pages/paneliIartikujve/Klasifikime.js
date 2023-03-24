import React,{ useState } from 'react'
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import AddIcon from '@mui/icons-material/Add';
import Form from 'react-bootstrap/Form';
import Klasifikim2 from './MiniModalArtikuj/Klasifikime/Klasifikim2';
import Klasifikim3 from './MiniModalArtikuj/Klasifikime/Klasifikim3';
import Klasifikim4 from './MiniModalArtikuj/Klasifikime/Klasifikim4';
import Klasifikim5 from './MiniModalArtikuj/Klasifikime/Klasifikim5';
import Klasifikim6 from './MiniModalArtikuj/Klasifikime/Klasifikim6';
import TipVlereShitje from "./MiniModalArtikuj/Klasifikime/TipVlereShitje"
import TipVlereBlerje from "./MiniModalArtikuj/Klasifikime/TipVlereBlerje"
import TipVlereImport from "./MiniModalArtikuj/Klasifikime/TipVlereImport"
import Marka from "./MiniModalArtikuj/Klasifikime/Marka"
import Cilesia from "./MiniModalArtikuj/Klasifikime/Cilesia"
import Masa from "./MiniModalArtikuj/Klasifikime/Masa"
import Materiali from "./MiniModalArtikuj/Klasifikime/Materiali"
import Ngjyra from "./MiniModalArtikuj/Klasifikime/Ngjyra"
import Origjina from "./MiniModalArtikuj/Klasifikime/Origjina"
import Sezoni from "./MiniModalArtikuj/Klasifikime/Sezoni"
import Gjinia from './MiniModalArtikuj/Barkode/Gjinia';
import LlojiMallit from './MiniModalArtikuj/Barkode/LlojiMallit';

const Klasifikime = ({
    data,
    selektKls2,
    setSelektKls2,
    selektKls3,
    setSelektKls3,
    selektKls4,
    setSelektKls4,
    selektKls5,
    setSelektKls5,
    selektKls6,
    setSelektKls6,
    selektVlereShitje,
    setSelektVlereShitje,
    selektOrigjina,
    setSelekOrigjina,
    selektVlereBlerje,
    setSelektVlereBlerje,
    selektVlereImport,
    setSelektVlereImport,
    selektMarka,
    setSelektMarka,
    selektGjinia,
    setSelektGjinia,
    selektSezoni,
    setSelektSezoni,
    selektLlojiMallit,
    setSelektLlojiMallit,
    selektCilesia,
    setSelektCilesia,
    selektNgjyra,
    setSelektNgjyra,
    selektMasa,
    setSelektMasa,
    selektMateriali,
    setSelektMateriali,
    disabled,
    setNdryshoKushtin
}) => {


const Vshitje = selektVlereShitje.Tip_Vlere_Shitje


  return (
    <div>
    <div className='flex border p-2 relative gap-2'>
    <div>
     <span className='absolute z-20 klasifikime'>Klasifikimet</span>

      <div className='flex flex-col justify-center p-2 border-r-2 w-4/12'>
        
      <div className='flex items-center' onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>

      <span className='flex items-center' style={{border:"solid 1px #ddd",backgroundColor:"#1971c2",color:"#fff"}}>
        <Klasifikim2  selektKls2={selektKls2}/>
        </span>

                <Form.Select 
                disabled={disabled}
                size="sm" 
                className=''
                value={selektKls2} 
                onChange={(e)=>{setSelektKls2(e.target.value)}} >
                    <option label='Klasifikim2'/>
                    {selektKls2?.Art_Klasifikim2?.map(list=>{
                    return <option >
                        {list?.Pershkrim}</option>  
                    })}
                </Form.Select>

        
      </div>
      <div className='flex items-center mt-2' onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>
      <span className='flex items-center' style={{border:"solid 1px #ddd",backgroundColor:"#1971c2",color:"#fff"}}>
          <Klasifikim3 />
          </span>

                <Form.Select 
                disabled={disabled}
                size="sm" 
                className=''
                value={selektKls3} 
                onChange={(e)=>{setSelektKls3(e.target.value)}} >
                    <option label='Klasifikim3'/>
                    {selektKls3?.Art_Klasifikim3?.map(list=>{
                    return <option >
                        {list?.Pershkrim}</option>  
                    })}
                </Form.Select>

        
      </div>
      <div className='flex items-center mt-2' onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>
      <span className='flex items-center' style={{border:"solid 1px #ddd",backgroundColor:"#1971c2",color:"#fff"}}>
          <Klasifikim4/>
          </span>

                <Form.Select 
                disabled={disabled}
                size="sm" 
                className=''
                value={selektKls4} 
                onChange={(e)=>{setSelektKls4(e.target.value)}} >
                    <option label='Klasifikim4'/>
                    {selektKls4?.Art_Klasifikim4?.map(list=>{
                    return <option >
                        {list?.Pershkrim}</option>  
                    })}
                </Form.Select>

       
       </div>
       <div className='flex items-center mt-2' onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>
       <span className='flex items-center' style={{border:"solid 1px #ddd",backgroundColor:"#1971c2",color:"#fff"}}>
           <Klasifikim5/>
           </span>

                <Form.Select 
                disabled={disabled}
                size="sm" 
                className=''
                value={selektKls5} 
                onChange={(e)=>{setSelektKls5(e.target.value)}} >
                    <option label='Klasifikim5'/>
                    {selektKls5?.Art_Klasifikim5?.map(list=>{
                    return <option >
                        {list?.Pershkrim}</option>  
                    })}
                </Form.Select>

              
         </div>
         <div className='flex items-center border-b-2 mt-2' onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>
         <span className='flex items-center' style={{border:"solid 1px #ddd",backgroundColor:"#1971c2",color:"#fff"}}>
             <Klasifikim6/>
             </span>

                <Form.Select 
                disabled={disabled}
                size="sm" 
                className=''
                value={selektKls6} 
                onChange={(e)=>{setSelektKls6(e.target.value)}} >
                    <option label='Klasifikim6'/>
                    {selektKls6?.Art_Klasifikim6?.map(list=>{
                    return <option >
                        {list?.Pershkrim}</option>  
                    })}
                </Form.Select>

        
         </div>
         </div>

        <div className='flex gap-3 mt-2'>
         <div className='flex items-center' onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>
         <span className='flex items-center' style={{border:"solid 1px #ddd",backgroundColor:"#1971c2",color:"#fff"}}>
             <TipVlereShitje selektVlereShitje={selektVlereShitje}
             />
             </span>

                <Form.Select 
                disabled={disabled}
                size="sm" 
                className=''
                value={selektVlereShitje} 
                onChange={(e)=>{setSelektVlereShitje(e.target.value)}} >
                    <option label='Tip vlere shitje'/>
                    {Vshitje?.map(list=>{
                    return <option >
                        {list?.Pershkrim}</option>  
                    })}
                </Form.Select>
                    
                </div>

         <div className='flex items-center' onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>
         <span className='flex items-center' style={{border:"solid 1px #ddd",backgroundColor:"#1971c2",color:"#fff"}}>
          <TipVlereBlerje  selektVlereBlerje={selektVlereBlerje}
          />
          </span>

                <Form.Select 
                disabled={disabled}
                size="sm" 
                className='w-32'
                value={selektVlereBlerje} 
                onChange={(e)=>{setSelektVlereBlerje(e.target.value)}} >
                    <option label='Tip vlere blerje'/>
                    {selektVlereBlerje?.Tip_Vlere_Blerje.map(list=>{
                    return <option >
                        {list?.Pershkrim}</option>  
                    })}
                </Form.Select>


                </div>  

          <div className='flex items-center' onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>
          <span className='flex items-center' style={{border:"solid 1px #ddd",backgroundColor:"#1971c2",color:"#fff"}}>
           <TipVlereImport  selektVlereImport={selektVlereImport}/>
           </span>

                <Form.Select 
                disabled={disabled}
                size="sm" 
                className=''
                value={selektVlereImport} 
                onChange={(e)=>{setSelektVlereImport(e.target.value)}} >
                    <option label='Tip vlere import'/>
                    {selektVlereImport?.Tip_Vlere_Import.map(list=>{
                    return <option >
                        {list?.Pershkrim}</option>  
                    })}
                </Form.Select>
                    
                </div>
            </div>
              
            </div>

            <div className='flex border-l-2 p-1 ml-2 gap-3'>
      <div>

      
      <div className='flex items-center mt-2' onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>
          <span className='flex items-center' style={{border:"solid 1px #ddd",backgroundColor:"#1971c2",color:"#fff"}}>
          <Origjina selektOrigjina={selektOrigjina}
          />
          </span>

                    <Form.Select 
                    disabled={disabled}
                size="sm" 
                className=''
                value={selektOrigjina} 
                onChange={(e)=>{setSelekOrigjina(e.target.value)}} >
                    <option label='Origjina'/>
                    {selektOrigjina?.Origjina.map(list=>{
                    return <option >
                        {list?.Pershkrim}</option>  
                    })}
                </Form.Select>
                    
   
      </div>

      <div className='flex items-center mt-2' onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>
          <span className='flex items-center' style={{border:"solid 1px #ddd",backgroundColor:"#1971c2",color:"#fff"}}>
          <Marka  selektMarka={selektMarka}/>
          </span>

                    <Form.Select 
                    disabled={disabled}
                size="sm" 
                className=''
                value={selektMarka} 
                onChange={(e)=>{setSelektMarka(e.target.value)}} >
                    <option label='Marka'/>
                    {selektMarka?.Marka.map(list=>{
                    return <option >
                        {list?.Pershkrim}</option>  
                    })}
                </Form.Select>
                   

                    

                </div>

                <div className='flex items-center mt-2' onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>
                    <span className='flex items-center' style={{border:"solid 1px #ddd",backgroundColor:"#1971c2",color:"#fff"}}>
                    <Gjinia 
                        selektGjinia={selektGjinia}
                    />
                    </span>
                    <Form.Select 
                    disabled={disabled}
                size="sm" 
                className=''
                value={selektGjinia} 
                onChange={(e)=>{setSelektGjinia(e.target.value)}} >
                    <option label='Gjinia'/>
                    {selektGjinia?.Gjinia.map(list=>{
                    return <option>
                        {list?.Pershkrim}</option>  
                    })}
                </Form.Select>
                    

    </div>

    <div className='flex items-center mt-2' onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>
        <span className='flex items-center' style={{border:"solid 1px #ddd",backgroundColor:"#1971c2",color:"#fff"}}>
        <Sezoni selektSezoni={selektSezoni}
        />
        </span>

                    <Form.Select 
                    disabled={disabled}
                      size="sm" 
                      className=''
                      value={selektSezoni} 
                      onChange={(e)=>{setSelektSezoni(e.target.value)}} >
                        <option label='Sezoni'/>
                        {selektSezoni?.Sezoni?.map(list=>{
                          return <option  value={list?.Kodi}>
                            {list?.Pershkrim}</option>  
                        })}
                    </Form.Select>
                </div>

    <div className='flex items-center mt-2' onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>
        <span className='flex items-center' style={{border:"solid 1px #ddd",backgroundColor:"#1971c2",color:"#fff"}}>
        <LlojiMallit selektLlojiMallit={selektLlojiMallit}
        />
        </span>

                    <Form.Select 
                    disabled={disabled}
                      size="sm" 
                      className=''
                      value={selektLlojiMallit} 
                      onChange={(e)=>{setSelektLlojiMallit(e.target.value)}} >
                        <option label='Lloji i mallit'/>
                        {selektLlojiMallit?.Lloji_Mallit?.map(list=>{
                          return <option  value={list?.Kodi}>
                            {list?.Pershkrim}</option>  
                        })}
                    </Form.Select>
                </div>
            </div>
            <div>

     
       <div className='flex items-center mt-2' onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>
           <span className='flex items-center' style={{border:"solid 1px #ddd",backgroundColor:"#1971c2",color:"#fff"}}>
           <Cilesia selektCilesia={selektCilesia}
           />
           </span>

                    <Form.Select 
                    disabled={disabled}
                      size="sm" 
                      className=''
                      value={selektCilesia} 
                      onChange={(e)=>{setSelektCilesia(e.target.value)}} >
                        <option label='Cilesia'/>
                        {selektCilesia?.Cilesia?.map(list=>{
                          return <option  value={list?.Kodi}>
                            {list?.Pershkrim}</option>  
                        })}
                    </Form.Select>
                </div>

       <div className='flex items-center mt-2' onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>
           <span className='flex items-center' style={{border:"solid 1px #ddd",backgroundColor:"#1971c2",color:"#fff"}}>
           <Ngjyra selektNgjyra={selektNgjyra}
           />
           </span>

                    <Form.Select 
                    disabled={disabled}
                      size="sm" 
                      className=''
                      value={selektNgjyra} 
                      onChange={(e)=>{setSelektNgjyra(e.target.value)}} >
                        <option label='Ngjyra'/>
                        {selektNgjyra?.Ngjyra?.map(list=>{
                          return <option  value={list?.Kodi}>
                            {list?.Pershkrim}</option>  
                        })}
                    </Form.Select>
                </div>

       <div className='flex items-center mt-2' onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>

           <span className='flex items-center' style={{border:"solid 1px #ddd",backgroundColor:"#1971c2",color:"#fff"}}>
           <Masa selektMasa={selektMasa}
           />
           </span>

                    <Form.Select 
                    disabled={disabled}
                      size="sm" 
                      className=''
                      value={selektMasa} 
                      onChange={(e)=>{setSelektMasa(e.target.value)}} >
                        <option label='Masa'/>
                        {selektMasa?.Masa?.map(list=>{
                          return <option  value={list?.Kodi}>
                            {list?.Pershkrim}</option>  
                        })}
                    </Form.Select>
                </div>

       <div className='flex items-center mt-2' onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>

           <span className='flex items-center' style={{border:"solid 1px #ddd",backgroundColor:"#1971c2",color:"#fff"}}>
           <Materiali selektMateriali={selektMateriali}
           />
           </span>

                    <Form.Select 
                    disabled={disabled}
                      size="sm" 
                      className=''
                      value={selektMateriali} 
                      onChange={(e)=>{setSelektMateriali(e.target.value)}} >
                        <option label='Materiali'/>
                        {selektMateriali?.Materiali?.map(list=>{
                          return <option  value={list?.Kodi}>
                            {list?.Pershkrim}</option>  
                        })}
                    </Form.Select>
                </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Klasifikime
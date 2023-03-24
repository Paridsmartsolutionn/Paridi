import React,{useState} from 'react'
import { Image } from 'primereact/image';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import PreviewIcon from '@mui/icons-material/Preview';

const EtiketaFoto = ({disabled,setNdryshoKushtin}) => {


    const [shenimEtike,setShenimEtiket]=useState("")
    const [value, setValue] = useState('');

    const [value1, setValue1] = useState('');

  return (
    <div>
       

        
       
        <div onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} >
        <textarea
            disabled={disabled}
            cols="30" 
            rows='1' 
            value={shenimEtike} 
            placeholder="Shenim per etiketen" 
            onChange={(e)=>setShenimEtiket(e.target.value)}
            className="shenim resize-none mt-2 rounded-md" >
            </textarea>  

        </div>
        <div className='flex gap-5'>
         <div className="card border p-3 relative mt-3">
            <span className='absolute z-20' style={{color:"#1971c2",top:-13,fontWeight:500,backgroundColor:"white",fontSize:"14px"}}>Fotografi 1/2/3/4</span>
            <div className='flex'> 
                <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" zoomSrc="https://www.primefaces.org/wp-content/uploads/2020/05/small.png" alt="Image" width="80" height="60" preview />
                <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" zoomSrc="https://www.primefaces.org/wp-content/uploads/2020/05/small.png" alt="Image" width="80" height="60" preview />
            </div>
            <div>
                <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" zoomSrc="https://www.primefaces.org/wp-content/uploads/2020/05/small.png" alt="Image" width="80" height="60" preview />
                <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" zoomSrc="https://www.primefaces.org/wp-content/uploads/2020/05/small.png" alt="Image" width="80" height="60" preview />
            </div>
            </div>
            <div onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}  className='flex flex-col gap-2 mt-2 border p-3 rounded-md relative'>
            <span className='absolute z-20' style={{color:"#1971c2",top:-13,fontWeight:500,backgroundColor:"white",fontSize:"14px"}}>Shenim 1/2</span>
            <textarea
                   
                   disabled={disabled}
                   cols="30" 
                   rows='3' 
                   value={value} 
                   onChange={(e)=>setValue(e.target.value)}
                   placeholder="Shenim" 
                   className="shenim resize-none mt-2 rounded-md" >
                </textarea>  
                <textarea
                    disabled={disabled}
                    cols="30" 
                    rows='3' 
                    value={value1} 
                    onChange={(e)=>setValue1(e.target.value)}
                    placeholder="Shenim" 
                    className="shenim resize-none mt-2 rounded-md" >
                    </textarea>  
              </div>
              <div className='flex flex-col'>
                <PreviewIcon className='cursor-pointer' style={{color:"#1971c2",fontSize:'36px'}}/>
                <span style={{color:"#1971c2",fontWeight:500}}>Preview</span>
              </div>
            </div>
           
               
            
    </div>
  )
}

export default EtiketaFoto
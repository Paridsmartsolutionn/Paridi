import React,{useState,useEffect,useRef,useMemo} from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TabView, TabPanel } from 'primereact/tabview';
import Button from '@mui/material/Button';
import axios from 'axios';
import { OverlayPanel } from 'primereact/overlaypanel';

const ModalTable = ({columns,disabled,shtoArtikull}) => {

    const [selection,setSelection]=useState([])
    const [rows, setRows] = useState([])

    const op = useRef(null);

    const dynamicColumns = columns.map((col,i) => {
        return <Column sortable key={col.field} field={col.field} header={col.title} />;
    });

    const fetchPost = async () => {
        try {
          const response = await axios(`${process.env.REACT_APP_API_KEY}/fatura/blerje/list`);
          setRows(response?.data?.Artikuj)
 
        } catch (err) {
          console.error(err);
        }
      };
      
      useEffect(()=> {
        fetchPost();
      }, [])
  
     

  return (
    <div>
<Button
    disabled={disabled}
    fullWidth 
    type="number"  
    variant="outlined" 
    onClick={(e) => op.current.toggle(e)} 
    size='small'
  >Artikujt</Button>


        <OverlayPanel ref={op} showCloseIcon id="overlay_panel" style={{width: '450px'}} className="overlaypanel-demo">
      
  
      <div className="card">
                  <TabView>
                  <TabPanel  header="Artikuj">
                <DataTable
                  size='small'
                  gridKey="ArtikujListe"
                  selectionMode="single"
                  selection={selection}
                  onSelectionChange={(selected)=>{
                    
                    shtoArtikull(selected.value)   
                    setSelection(selected.value);
                      
                    }
                  }
                  scrollable 
                  scrollHeight="400px" 
                  virtualScrollerOptions={{ itemSize: 46 }} 
                  value={rows}
                  responsiveLayout="scroll">
                      {dynamicColumns}
                </DataTable>
                      </TabPanel>
  
  
                  </TabView>
              </div>
  
        </OverlayPanel>
    </div>

  )
}

export default ModalTable
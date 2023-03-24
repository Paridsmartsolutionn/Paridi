import React,{useState} from 'react'
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from '@mui/material/ButtonGroup';
import useStorage from '../../hooks/useStorage';
import { InputText } from "primereact/inputtext";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { MultiSelect } from "primereact/multiselect"

const Procese = ({gridKey= true, showHideColumns=true, disabled, setDisabled, setNdryshoKushtin}) => {

    const [rows,setRows]=useState([])
    const [globalFilterValue1, setGlobalFilterValue1] = useState("")
    const [filters1, setFilters1] = useState(null)
    // const [disabled,setDisabled]=useState(true)


    const [columns,setColumns] = useState([
  
        { field: 'Ref_Procese_Kodi', title: 'Ref_Procese_Kodi'},
        { field: 'Art_Kodi', title: 'Art_Kodi' },
        { field: 'Pershkrim', title: 'Pershkrim' },
        { field: 'Veshtiresia', title: 'Veshtiresia' },
        { field: 'SasiaPerOre', title: 'SasiaPerOre' },
        { field: 'SasiaNevojshme', title: 'SasiaNevojshme'},
        { field: 'Radha', title: 'Radha'},
        { field: 'Linja_Kodi', title: 'Linja_Kodi'},
        { field: 'Aktiv', title: 'Aktiv'},
        { field: 'Selektuar', title: 'Selektuar'},
        { field: 'MeKohe', title: 'MeKohe' },
        { field: 'Minuta', title: 'Minuta'}
       
      ]);
      
      
      const [selectedColumns, setSelectedColumns] = useStorage(
        columns,
        "kolonat" + gridKey
      )
      
      const onColumnToggle = (event) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = columns.filter((col) =>
          selectedColumns.some((sCol) => sCol.title === col.title)
        );
        setSelectedColumns(orderedSelectedColumns);
      };

      const onGlobalFilterChange1 = (e) => {
        const value = e.target.value
        let _filters1 = { ...filters1 }
        _filters1["global"].value = value
    
        setFilters1(_filters1)
        setGlobalFilterValue1(value)
      }
    
      const clearFilter1 = () => {
        initFilters1()
      }
    

      const initFilters1 = () => {
        setFilters1({
          global: { value: null, matchMode: FilterMatchMode.CONTAINS },
          name: {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
          },
          columns: {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
          },
          representative: { value: null, matchMode: FilterMatchMode.IN },
          date: {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
          },
          balance: {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
          },
          status: {
            operator: FilterOperator.OR,
            constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
          },
          activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
          verified: { value: null, matchMode: FilterMatchMode.EQUALS },
        })
        setGlobalFilterValue1("")
      }
    
      const header = (
        <>
      <div className="flex justify-between">
  
        <div onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}
          style={{
            textAlign: "right",
          }}
        >
          {showHideColumns && (
            <>
            <MultiSelect
              disabled={disabled}
              value={selectedColumns}
              options={columns}
              optionLabel="title"
              onChange={onColumnToggle}
              style={{ width: "3em", height: "2em" }}
            />
            </>

          )}
 </div>
        <span onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}} className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            disabled={disabled}
            style={{ height: "2em" }}
            value={globalFilterValue1}
            onChange={onGlobalFilterChange1}
            placeholder="Kerko"
            onClick={clearFilter1}
          />
        </span>
       
       
      </div>
    </>
      );
    
      const filterdColumns = showHideColumns ? selectedColumns : columns;
    
      
    
    
      const dynamicColumns = filterdColumns?.map((col, i) => {
        return (
          <Column

            style={{ height: "2.6rem" }}
            key={col?.field}
            sortable
            field={col?.field}
            header={col?.title}
          />
        );
      });

      const rrjeshtat = <span className='border p-1'>{`${rows ? rows.length : 0} Rekorde `}</span>

  return (
    <div>
       <div className='procese mt-1'>

        <div onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>
            <ButtonGroup size="xl" className="mb-2 flex flex-col gap-2">
            <Button className='p-1 border' onClick={(e)=>{e.preventDefault();setDisabled(false)}}><PostAddIcon/></Button>
            <Button className='p-1 border' onClick={(e)=>{e.preventDefault();}} disabled={disabled} ><DeleteIcon/></Button>
            <Button className='p-1 border' onClick={(e)=>{e.preventDefault();}} disabled={disabled} ><CheckIcon/></Button>
            <Button className='p-1 border' onClick={(e)=>{e.preventDefault();setDisabled(true)}} disabled={disabled}><ClearIcon/></Button>
            </ButtonGroup>
        </div>

        <div className="card ml-2" onClick={()=>{if(disabled){setNdryshoKushtin(true)}else{setNdryshoKushtin(false)}}}>
            <DataTable
                size='small'
                gridKey="Llogari"
                header={header}
                selectionMode="single"
                scrollable 
                scrollHeight="200px" 
                virtualScrollerOptions={{ itemSize: 46 }}
                // value={rows} 
                responsiveLayout="scroll">
                    {dynamicColumns}
            </DataTable>
        {rrjeshtat}
        </div>
        </div>
    </div>
  )
}

export default Procese
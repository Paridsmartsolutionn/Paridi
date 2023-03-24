import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";
import Shtet from "./fature-blerje/minimodal/Shtet";
import Qytet from "./fature-blerje/minimodal/Qytet";
import { Dialog } from "primereact/dialog";
import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";

const Records = ({
  data,
  setData,
  furnitor,
  qytetet,
  shtetet,
  setFurnitoret,
  setQytetet,
  setShtetet,
  currentPage,
  setCurrentPage,
}) => {
  const max = 10;

  const rekorde = `${
    furnitor + qytetet + shtetet
      ? furnitor.length + qytetet.length + shtetet.length
      : ""
  } Rekorde`;

  const [displayResponsive, setDisplayResponsive] = useState(false);
  const [position, setPosition] = useState("center");

  const dialogFuncMap = {
    displayResponsive: setDisplayResponsive,
  };

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const defaultState = {
    Kodi: "",
    Shenim: "",
    Nipt: "",
    Llogari: "",
    FperMallra: "",
    Shteti: "",
    Qyteti: "",
    Adresa: "",
    Aktiv: "",
  };

  const submitHanlder = (e) => {
    try {
      axios.post(`${process.env.REACT_APP_API_KEY}/furnitor/`, {
        Kodi: state.Kodi,
        Pershkrim: state.Shenim,
        Nipt: state.Nipt,
        NrLL: state.Llogari,
        Aktiv: state.Aktiv,
        Adresa: state.Adresa,
        Shteti_Kodi: state.Shteti,
        Qyteti_Kodi: state.Qyteti,
        // FperMallra:state.FperMallra
      });

      setTimeout(() => {
        //   fetchMonedhat();
      }, 1000);
    } catch (error) {}
  };

  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];

  console.log(...array1, ...array2);

  const [disabled, setDisabled] = useState(true);
  const [state, setState] = useState(defaultState);

  const handleChange = (key, value) => {
    setState((state) => {
      return {
        ...state,
        [key]: value,
      };
    });
  };

  // const kodi = data?.map((value,index)=> {return value?.Kodi})
  // const [kod,setKod]=useState(kodi)

  const handleInputChange = (key, value) => {
    setData((data) => {
      return data.map((item, index) => {
        if (index === currentPage) {
          return {
            ...item,
            [key]: value,
          };
        }
        return { ...item };
      });
    });
  };

  return (
    <div>
      <div className="border-t p-1 mt-2">
        <ButtonGroup size="xl" className="mb-2">
          <Button
            className="p-2"
            onClick={(e) => {
              e.preventDefault();
              setDisabled(false);
            }}
          >
            <PostAddIcon /> Shtim
          </Button>
          <Button className="p-2" disabled={disabled}>
            <DeleteIcon /> Fshije
          </Button>
          <Button
            className="p-2"
            onClick={(e) => {
              e.preventDefault();
              setState(defaultState);
            }}
            disabled={disabled}
          >
            <ClearIcon />
            Anullim
          </Button>
          <Button
            className="p-2"
            onClick={(e) => {
              e.preventDefault();
              submitHanlder();
              setState(defaultState);
            }}
            disabled={disabled}
            type="submit"
          >
            <AppRegistrationIcon />
            Rregjistrim
          </Button>
        </ButtonGroup>
      </div>
      <div className="flex gap-3">
        <div className="border p-2">
          <div className="w-60 ">
            {/* {data?.map(item => (
            <>
            <TextField value={item?.Kodi} />
            <TextField value={item?.Pershkrim} />
            </>
        ))} */}

            <TextField
              disabled={disabled}
              type="text"
              variant="outlined"
              label="Kodi"
              value={data?.[currentPage]?.Kodi ?? ""}
              onChange={(e) => handleInputChange("Kodi", e.target.value)}
              size="small"
            />

            <TextField
              disabled={disabled}
              type="text"
              variant="outlined"
              label="Pershkrim"
              value={data?.[currentPage]?.Pershkrim ?? ""}
              onChange={(e) => handleInputChange("Pershkrim", e.target.value)}
              size="small"
              className="mt-2"
            />

            {/* <TextField
                  disabled={disabled}
                  type="text"  
                  variant="outlined" 
                  label='Nipt'
                  size='small' 
                  inputProps={{
                    maxlength: max
                  }}
                  
                  value={item?.body}
                  onChange={(e)=> handleChange("Nipt",e.target.value)}
                  className='mt-2'/>
          
          
                  <TextField
                  disabled={disabled}
                  type="text"  
                  variant="outlined" 
                  label='Llogari'
                  size='small' 
                  value={item?.userId}
                  onChange={(e)=> handleChange("Llogari",e.target.value)}
                  className='mt-2'/>
          
               <Form.Select
               disabled
               className='mt-2 w-56'
               value={state?.FperMallra}
               onChange={(e)=> handleChange("FperMallra",e.target.value)}>
                  <option label='Furnitor per mallra produkte sherbime'/>
                  {furnitor.map(list => {
                    return <option key={list.Kodi}>{list.Pershkrim}</option>
                  })}
               </Form.Select> */}
            {/*           
          <div className='flex justify-center items-center'>
          
               <Form.Select
               disabled={disabled}
               className='mt-2'
               value={state?.Shteti}
               onChange={(e)=>handleChange("Shteti",e.target.value)}>
                  <option label='Shteti'/>
                  {shtetet.map(list => {
                    return <option key={list.Kodi} value={list.Kodi}>{list.Pershkrim}</option>
                  })}
               </Form.Select>
               <Shtet shtetet={shtetet} setShtetet={setShtetet} fetchUpdate={fetchFurnitor} />
                   </div>
          
          <div className='flex justify-center items-center'>
               <Form.Select
               disabled={disabled}
               value={state?.Qyteti}
               onChange={(e)=>handleChange("Qyteti",e.target.value)}
               className='mt-2'>
                  <option label='Qyteti'/>
                  {qytetet.map(list => {
                      return <option key={list.Kodi} value={list.Kodi}>{list.Pershkrim}</option>
                  })}
               </Form.Select>
                  <Qytet  fetchUpdate={fetchFurnitor} qytetet={qytetet} />    
          
               </div>
          <div style={{width:'330px'}} className='flex justify-center items-center relative'>
          
               <TextField
          
               disabled={disabled}
               type="text"  
               variant="outlined" 
               label='Adresa'
               size='small' 
               value={state?.Adresa}
               onChange={(e)=>handleChange("Adresa",e.target.value)}
               className='mt-2'/>
          <FormControlLabel
              style={{marginLeft:'1rem',marginTop:'1rem'}}
                      control={
               <Checkbox
                  disabled={disabled}
                  type="checkbox"  
                  variant="outlined" 
                  size='small' 
                  value={state?.Aktiv}
                  onChange={(e)=> handleChange('Aktiv',e.target.checked)}
                  />} label='Aktiv'
                  />
                  </div> */}
          </div>
        </div>
        <span>{rekorde}</span>
      </div>
      <form className="flex justify-center" onSubmit={(e) => submitHanlder(e)}>
        {/* <AddIcon fontSize='small' className='cursor-pointer' onClick={() => onClick('displayResponsive')}>Open</AddIcon>
            <Dialog header="Furnitore" visible={displayResponsive} onHide={() => onHide('displayResponsive')} breakpoints={{'960px': '75vw'}} style={{width: '30vw'}} >
          
    
              </Dialog>
       */}
      </form>
    </div>
  );
};

export default Records;

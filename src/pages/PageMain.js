
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Records from './Rekords';
import Pagination from './Pagination';
import { list } from 'postcss';

function App() {

    // To hold the actual data
    // const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);
    const [furnitor, setFurnitoret] = useState([])
    const [qytetet, setQytetet] = useState([])
    const [shtetet, setShtetet] = useState([])


    // const fetchFurnitor = async () => {
    //     try {
    //     const response= await axios(`${process.env.REACT_APP_API_KEY}/fatura/blerje/data`)
       
    //     setFurnitoret(response?.data.Furnitoret)
    //     setShtetet(response?.data.Shtetet)                                                                                                                                                                 
    //     setQytetet(response?.data.Qytetet)
    //     // setData(response.data);
    //     setLoading(false);

    //   } catch (err) {
    //     console.error(err);
    //   }
    // };
    // useEffect(()=> {
    //   fetchFurnitor();
    // }, [])


    const [testData,setTestData]=useState([])
    console.log({testData})
      useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {

          setTestData(res.data.map((item,index) => {return {
            
            Kodi: item.id,
            Pershkrim: item.username,
            Nipt:item.email,
            NrLL:item.phone,
            Aktiv: !!(2%index),
          }}))
        })
      },[])
          

    console.log({testData})
    const indexOfLastRecord = currentPage * recordsPerPage;
    
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = furnitor.slice(indexOfFirstRecord, indexOfLastRecord);


    return (
        <div className='container mt-5'>
            <h2> Simple Pagination Example in React </h2>
            <Records 
                data={testData}
                setData={setTestData}
                furnitor={furnitor}
                setFurnitoret={setFurnitoret}
                setQytetet={setQytetet}
                qytetet={qytetet}
                shtetet={shtetet}       
                setShtetet={setShtetet}       
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                        />
            <Pagination
                nPages={testData.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default App;
import React, {useState,useEffect}from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import Uselogout from '../hooks/Uselogout';
// import { useNavigate } from "react-router-dom";

function Dashboard() {
    let token = sessionStorage.getItem('token');
    let [data, setData] =useState([])
    let logout =Uselogout()

    let handleGetData = async()=>{
      try{
 
        let res = await axios.get(`${process.env.REACT_APP_API_URL}/user/all`, {
            headers: { authorization: `Bearer ${token}` },
         })
         if (res.status === 200)
         {
            toast.success(res.data.message)
            setData(res.data.users)
         }
      }
      catch (error){
        toast.error(error.response.data.error || error.response.data.message);
        if(error.response.status===401)
        logout()
      }
    }

    useEffect(()=>
    {
        if(token)
        {
           handleGetData()
         }
         else{
            logout()
         }
    },[])
  return (
    <div className='container    mt-5'>
       
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Index no</th>
          <th> Name</th>
          <th> Email</th>
          <th>Mobile</th>
          <th>Status</th>
          <th>Create date</th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((e,i)=>{
                return <tr key={e._id}>
                    <td>{i+1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.mobile}</td>
                    <td>{e.status}</td>
                    <td>{e.createdAt}</td>
                </tr>
            })
        }
      </tbody>
    </Table>
    <Button onClick={handleGetData} className='refresh'>Refresh</Button>
    <Button onClick={logout} className='logoutbtn'>Logout</Button>
    </div>
  )
}

export default Dashboard
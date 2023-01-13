import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import getAllUsers from '../../dynamodb/functionUser/readAll';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'lastname',
      headerName: 'Lastname',
      width: 150,
      editable: true,
    },
    {
      field: 'firstname',
      headerName: 'Firstname',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 110,
      editable: true,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        width: 80,
        editable: true,
      },
      {
        field: 'adress',
        headerName: 'Adress',
        width: 80,
        editable: true,
      },
      {
        field: 'city',
        headerName: 'City',
        width: 80,
        editable: true,
      }
  ];

  

function ListUsers() {
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllUsers();
      
    console.log(data)
    }
    
    fetchData()
      .catch(console.error);
  }, []);

    const rows = data.map((user:any) =>({
        id:user.id,
        lastname:user.lastname,
        firstname:user.firstname,
        email:user.email,
        phone:user.phone,
        adress:user.adress,
        city:user.city
    } ))

    return (
        <Box sx={{ height: '88vh', width: '100%' }}>
            <Typography variant="h2">Users List</Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    )
  }
  
  export default ListUsers;
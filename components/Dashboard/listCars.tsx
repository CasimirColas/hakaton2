import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import useSWR from 'swr';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const fetcher = async () => {
    const response = await fetch('http://localhost:3000/api/cars')
    const data = await response.json()
    return data
}

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'Brand',
      headerName: 'Brand',
      width: 150,
      editable: true,
    },
    {
      field: 'Company Name',
      headerName: 'Company Name',
      width: 150,
      editable: true,
    },
    {
      field: 'Name',
      headerName: 'Name',
      width: 110,
      editable: true,
    },
    {
        field: 'Status',
        headerName: 'Status',
        width: 80,
        editable: true,
      },
      {
        field: 'Cost',
        headerName: 'Cost',
        width: 80,
        editable: true,
      },
      {
        field: 'Type',
        headerName: 'Type',
        width: 80,
        editable: true,
      },
      {
        field: 'GearBox',
        headerName: 'GearBox',
        width: 80,
        editable: true,
      },
      {
        field: 'energy',
        headerName: 'energy',
        width: 80,
        editable: true,
      },
  ];

  
//   const rows = [
//     {data.map((car:any) => (
//         {Brand:{car.brand}}
//      ))}
    // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   ];
function ListCars() {

    
    const { data, error, isLoading } = useSWR('/api/cars', fetcher)
    
    

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    console.log(data)

    return (
        <Box sx={{ height: '88vh', width: '100%' }}>
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
  
  export default ListCars;
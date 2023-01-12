import React from 'react';
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
      field: 'CompanyName',
      headerName: 'CompanyName',
      width: 150,
      editable: true,
    },
    {
      field: 'carName',
      headerName: 'CarName',
      width: 110,
      editable: true,
    },
    {
        field: 'carStatus',
        headerName: 'Status',
        width: 80,
        editable: true,
      },
      {
        field: 'cost',
        headerName: 'Cost',
        width: 80,
        editable: true,
      },
      {
        field: 'type',
        headerName: 'Type',
        width: 80,
        editable: true,
      },
      {
        field: 'gearbox',
        headerName: 'Gearbox',
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

  

function ListUsers() {

    
    const { data, error, isLoading } = useSWR('/api/cars', fetcher)
    
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    console.log(data)

    const rows = data.map((user:any) =>({
        id:user.id,
        CompanyName:user.companyName,
        carName:user.carName,
        carStatus:user.carStatus,
        cost:user.cost,
        type:user.type,
        gearbox:user.gearbox,
        energy:user.enrgy
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
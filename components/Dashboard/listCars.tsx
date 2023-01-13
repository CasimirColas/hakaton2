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

  

function ListCars() {

    
    const { data, error, isLoading } = useSWR('/api/cars', fetcher)
    
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    console.log(data)

    const rows = data.map((car:any) =>({
        id:car.id,
        Brand:car.brand,
        CompanyName:car.companyName,
        carName:car.carName,
        carStatus:car.carStatus,
        cost:car.cost,
        type:car.type,
        gearbox:car.gearbox,
        energy:car.energy
    } ))

    return (
        <Box sx={{ height: '90vh', width: '100%' }}>
            <Typography variant="h2">Cars List</Typography>
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
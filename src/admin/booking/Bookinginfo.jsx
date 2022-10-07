import React from 'react'
import NavbarAdmin from '../NavbarAdmin/NavbarAdmin'
import ManageList from '../ManageList/ManageList'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const GridColDe = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'fullname',
      headerName: 'Họ và Tên',
      width: 150,
      editable: true,
    },
    {
      field: 'phone',
      headerName: 'Số điện thoại',
      width: 150,
      editable: true,
    },
    {
      field: 'categories',
      headerName: 'Số lượng',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
        field: 'kindof',
        headerName: 'Loại tiệc',
        type: 'string',
        width: 110,
        editable: true,
      },
    {
      field: '',
      headerName: '',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (GridValueGetterParams) =>
        `${GridValueGetterParams.row.firstName || ''} ${GridValueGetterParams.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, fullname: 'Snow', phone: 'Jon', categories: 35, kindof: 'Wedding'},
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, kindof: 'Wedding' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, kindof: 'Wedding' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, kindof: 'Wedding' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, kindof: 'Wedding' },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, kindof: 'Wedding' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, kindof: 'Wedding' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, kindof: 'Wedding' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, kindof: 'Wedding' },
  ];
  

const Bookinginfo = () => {
  return (
    <div className="app__bgad">
      <NavbarAdmin />
      <div className='maincore'>
        <ManageList />
        <Box sx={{ background: 'yellow', borderRadius: '7px', marginLeft: 1.5, height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={GridColDe}
          pageSize={5}
          rowsPerPageOptions={[6]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
        </Box>
      </div>
    </div>
  )
}

export default Bookinginfo

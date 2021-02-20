import React, { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'fullname', headerName: 'Full Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'adress', headerName: 'Adress', width: 150 },
    { field: 'avatar',headerName: 'Avatar',width: 150},
    { field: 'actions',headerName: 'Actions',width: 200,disableClickEventBubbling: true ,renderCell: (params) => (
        <strong>
          {params.value}
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteForeverIcon/>}
            size="small"
            style={{ marginLeft: "10px",padding:"6px 40px"}}
          >
            Delete
          </Button>
         
        </strong>
      ),},

  ];



const rows = [
    { id: 1, fullname: 'Abdellah', email: 'Ankouri', adress: "taznakhte ouarzazate",avatar:'image.jpg' },
    { id: 2, fullname: 'Abdellah', email: 'Ankouri', adress: "taznakhte ouarzazate",avatar:'image.jpg' },
    { id: 3, fullname: 'Abdellah', email: 'Ankouri', adress: "taznakhte ouarzazate",avatar:'image.jpg' },
    { id: 4, fullname: 'Abdellah', email: 'Ankouri', adress: "taznakhte ouarzazate",avatar:'image.jpg' },
    { id: 5, fullname: 'Abdellah', email: 'Ankouri', adress: "taznakhte ouarzazate",avatar:'image.jpg' },
    { id: 6, fullname: 'Abdellah', email: 'Ankouri', adress: "taznakhte ouarzazate",avatar:'image.jpg' },
    { id: 7, fullname: 'Abdellah', email: 'Ankouri', adress: "taznakhte ouarzazate",avatar:'image.jpg' },
    { id: 8, fullname: 'Abdellah', email: 'Ankouri', adress: "taznakhte ouarzazate",avatar:'image.jpg' },
    { id: 9, fullname: 'Abdellah', email: 'Ankouri', adress: "taznakhte ouarzazate",avatar:'image.jpg' },
]


export default function UsersTab() {


    const handleClick = (data)=>{
        console.log(data.data.firstName)
    }

    return (
        <div style={{ height: 500, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} pageSize={7}    onRowSelected={ handleClick } />
        </div>
    )
}

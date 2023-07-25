import { DataGrid } from "@mui/x-data-grid";
import { projectColumns, softwareRows, dataRows } from "../../datatablesource";
import { useState } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import {Link} from "react-router-dom";
import "./list.scss"
const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color: white;
background: url("./img/bg.jpeg");
&::-webkit-scrollbar{
  display: none;
}
`;

const Box = styled.div`

margin-top: 70px;
height: 600px;
`;

const actionColumns = [
    {
      field: "action",
      headerName: "Links",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={params.row.desc} style={{ textDecoration: "none" }}>
              <div className="deleteButton"> Description Link</div>
            </Link>
            <div>
            <Link to={params.row.github} style={{ textDecoration: "none" }}>
              <div className="viewButton"> Github Link</div>
            </Link>
            </div>
            {/*
            <div>
            <Link to={params.row.video} style={{ textDecoration: "none" }}>
              <div className="vidButton"> Video Demonstration Link(Coming Soon)</div>
            </Link>
            </div>
          */}
          </div>
          


        );
      },
    }
  ];
const List = (input) => {
  const [data, setData] = useState(()=> {
    if(input.state == "dev"){
        return softwareRows;
    }else if(input.state == "data"){
        return dataRows;
    }
});

    const handleClick = (type) =>{
      if(type == "dev"){
        setData(softwareRows);
      }else if(type=="data"){
        setData(dataRows);
      }
    }

  return (
    <Container>
        <div >
        <Navbar handleClick = {handleClick}/>
        </div>
        <Box>
        <DataGrid
          columnVisibilityModel={{
           id: false
          }}
        sx = {{color:"white", fontSize:16, fontWeight:"bold"}}
        className="datagrid"
        rows={data}
        rowHeight={150}
        columns={projectColumns.concat(actionColumns)}
        />
        </Box>
    </Container>
  )
}

export default List
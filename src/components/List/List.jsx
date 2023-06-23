import { DataGrid } from "@mui/x-data-grid";
import { projectColumns, softwareRows, dataRows } from "../../datatablesource";
import { useState } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";

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
const List = (input) => {
    const [data, setData] = useState(()=> {
        if(input.name == "dev"){
            return softwareRows;
        }else if(input.name == "data"){
            return dataRows;
        }
    });
  return (
    <Container>
        <Navbar />
        <Box>
        <DataGrid
        sx = {{color:"white"}}
        className="datagrid"
        rows={data}
        columns={projectColumns}
        pageSize={5}
        checkboxSelection
        />
        </Box>
    </Container>
  )
}

export default List
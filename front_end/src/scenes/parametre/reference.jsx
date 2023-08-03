import React, { useState, useEffect } from "react";
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';import CustomDataGrid from "../../components/CustomDataGrid";
import { CustomPagination } from "../../assets/styleJs/Pagination";
import { BootstrapButton } from "../../assets/styleJs/theme";
import AddRoundedIcon from "@mui/icons-material/AddRounded";


export default function Reference() {
    
    const [tableData, setTableData] = useState([]);
    const deleteUser = React.useCallback(
        (id) => () => {
          setTimeout(() => {
            setTableData((prevRows) => prevRows.filter((row) => row.id !== id));
          });
        },
        [],
      );
    const fetchData = () => {
        fetch("http://localhost:3030/ref_rows")
          .then((response) => {
            return response.json();
          })
    
          .then((data) => {
            setTableData(data.slice(0, 6));
          });
      };
    
      useEffect(() => {
        fetchData();
      }, []);
      
      const columns = [
        {
          field: "ref",
          headerName: "Réf",
          flex: 0.1,
          align: "center",
          renderCell: (cellValues) => {
            return (
              <div
                style={{
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {cellValues.value}
              </div>
            );
          },
        },
        { field: "famille", headerName: "Famille", flex: 0.2, align: "center" },
        {
          field: "phase",
          headerName: "Phase",
          flex: 0.2,
          align: "center",
        },
        {
          field: "status",
          align: "center",
          flex: 0.1,
          headerName: "Actions",
          type: "actions",
          getActions: (params) => [
            <GridActionsCellItem
            icon={<i class="bi bi-trash" style={{color:'red'}}></i>}
            label="Delete"
            onClick={deleteUser(params.id)}
          />,
          ],
        },]
    return (
      <div style={{ height: "80vh"}}>
        <div style={{ marginBottom: "20px" }}>
        <BootstrapButton
          variant="contained"
          style={{borderRadius: 10}}
          size="small"
          startIcon={<AddRoundedIcon fontSize="small" />}
        >
          Ajouter Référence
        </BootstrapButton>
        </div>
        <CustomDataGrid
        rows={tableData}
        columns={columns}
        height="79vh"
        className="custom-opp"
        Pagination={CustomPagination}
        rowHeight={40}
        paginationPageSize={10}
        borderRadius="10px"
      />
    </div>
  )
}

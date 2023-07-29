import React, { useState, useEffect } from "react";
import { BootstrapButton } from "../../assets/styleJs/theme";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { CustomPagination } from "../../assets/styleJs/Pagination";
import CustomDataGrid from "../../components/CustomDataGrid";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Row } from "react-bootstrap";

const Data = () => {
  const [tableData, setTableData] = useState([]);
  const [chipLabel, setChipLabel] = useState("Active");
  const [chipColor, setChipColor] = useState("success");
  const [rows, setRows] = React.useState(tableData);

  // const handleDelete = (postIndex) => {
  //   setTableData((prevPosts) =>
  //     prevPosts.filter((_, index) => index !== postIndex)
  //   );
  // };
  // const saveRowChanges = (id, newData) => {
  //   // Make an HTTP PUT or PATCH request to the JSON server to update the row
  //   fetch(`http://localhost:3030/rows/${id}`, {
  //     method: "PUT", // or "PATCH" if you prefer partial updates
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newData),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         // If the update was successful, update the state with the modified row
  //         setTableData((prevData) =>
  //           prevData.map((row) =>
  //             row.id === id ? { ...row, ...newData } : row
  //           )
  //         );
  //       } else {
  //         // Handle the error or show a message to the user if the update failed
  //         console.error("Failed to update row");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error occurred while updating row:", error);
  //     });
  // };

  // const handleSave = (id, newData) => {
  //   saveRowChanges(id, newData);
  // };

  // const handleDelete = (id) => {
  //   // Make an HTTP DELETE request to the JSON server to delete the row
  //   fetch(`http://localhost:3030/rows/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         // If the deletion was successful, update the state by filtering out the deleted row
  //         setTableData((prevData) => prevData.filter((row) => row.id !== id));
  //       } else {
  //         // Handle the error or show a message to the user if the deletion failed
  //         console.error("Failed to delete row");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error occurred while deleting row:", error);
  //     });
  // };

  const changeChipActive = (id) => {
    setTableData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, chipLabel: "Active", chipColor: "success" }
          : item
      )
    );
  };

  const changeChipDesactive = (id) => {
    setTableData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, chipLabel: "Desactive", chipColor: "error" }
          : item
      )
    );
  };

  const fetchData = () => {
    fetch("http://localhost:3030/rows")
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

  console.log(tableData);
  const columns = [
    {
      field: "code",
      headerName: "Code",
      flex: 0.2,
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
    { field: "nom", headerName: "Nom", flex: 0.2, align: "center" },
    {
      field: "prénom",
      headerName: "Prénom",
      flex: 0.2,
      align: "center",
    },
    {
      field: "status",
      align: "center",
      flex: 0.2,
      headerName: "Status",
      type: "actions",
      getActions: (params) => [
        <Chip label={params.row.chipLabel} color={params.row.chipColor} />,
      ],
    },
    {
      field: "actions",
      flex: 0.2,
      headerName: "Actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<CheckCircleOutlineIcon color="success" />}
          onClick={() => {
            changeChipActive(params.row.id);
            // handleSave(params.row.id, {
            //   chipLabel: "Desactive",
            //   chipColor: "error",
            // });
          }}
        />,
        <GridActionsCellItem
          icon={<CancelOutlinedIcon color="error" />}
          onClick={() => {
            changeChipDesactive(params.row.id);
            // handleSave(params.row.id, {
            //   chipLabel: "Active",
            //   chipColor: "success",
            // });
          }}
        />,
      ],
    },
  ];
  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <div style={{ marginBottom: "20px" }}>
        <BootstrapButton
          variant="contained"
          style={{borderRadius: 10}}
          size="small"
          startIcon={<AddRoundedIcon fontSize="small" />}
        >
          Ajouter opérateur
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

      {/* <DataGrid rows={tableData} columns={columns} pageSize={12} /> */}
    </div>
  );
};

export default Data;

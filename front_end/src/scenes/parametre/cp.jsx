import React, { useState, useEffect } from "react";
import { GridActionsCellItem } from '@mui/x-data-grid';
import CustomDataGrid from "../../components/CustomDataGrid";
import { CustomPagination } from "../../assets/styleJs/Pagination";
import { BootstrapButton } from "../../assets/styleJs/theme";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Row, Col } from "react-bootstrap";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";



export default function Cp() {
  const [open, setOpen] = React.useState(false);
  const [openRef, setOpenRef] = React.useState(false);
  const [openOp, setOpenOp] = React.useState(false);
  const [tableData, setTableData] = useState([]);
  const [refTable, setRefTable] = useState([]);
  const [operateurTable, setOperateurTable] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenRef = () => {
    setOpenRef(true);
  };

  const handleCloseRef = () => {
    setOpenRef(false);
  };
  const handleClickOpenOp = () => {
    setOpenOp(true);
  };

  const handleCloseOp = () => {
    setOpenOp(false);
  };
  const deletePhase = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setTableData((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );
  const deleteRef = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setRefTable((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );
  const deleteOp = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setOperateurTable((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );
  const fetchData = () => {
    fetch("http://localhost:3030/phases")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableData(data.slice(0, 6));
      });
  };
  const fetchDataRef = () => {
    fetch("http://localhost:3030/ref_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setRefTable(data.slice(0, 6));
      });
  };
  const fetchDataOp = () => {
    fetch("http://localhost:3030/operator_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setOperateurTable(data.slice(0, 6));
      });
  };

  useEffect(() => {
    fetchData();
    fetchDataRef();
    
  }, []);
  useEffect(() => {
    fetchDataOp();
  }, []);
  const opColumns = [
    {
      field: "code",
      headerName: "Opérateurs",
      flex: 0.1,
      align: "center",
      editable: true,
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
    {
      field: "status",
      align: "center",
      flex: 0.1,
      headerName: "Actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
        icon={<i className="bi bi-trash" style={{color:'red'}}></i>}
        label="Delete"
        onClick={deleteOp(params.id)}
      />,
      ],
    },]
  const refColumns = [
    {
      field: "ref",
      headerName: "Références",
      flex: 0.1,
      align: "center",
      editable: true,
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
    {
      field: "status",
      align: "center",
      flex: 0.1,
      headerName: "Actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
        icon={<i className="bi bi-trash" style={{color:'red'}}></i>}
        label="Delete"
        onClick={deleteRef(params.id)}
      />,
      ],
    },]
  const phaseColumns = [
    {
      field: "phase",
      headerName: "Phase",
      flex: 0.1,
      align: "center",
      editable: true,
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
    {field: "description",
    headerName: "Déscription",
    flex: 0.1,
    align: "center",
    editable: true,
  },
    {
      field: "status",
      align: "center",
      flex: 0.1,
      headerName: "Actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
        icon={<i className="bi bi-trash" style={{color:'red'}}></i>}
        label="Delete"
        onClick={deletePhase(params.id)}
      />,
      ],
    },]
  return (
    <div style={{ height: "80vh"}}>
      <Row>
        <Col xl="6" lg="6">
        <div style={{ marginBottom: "20px" }}>
        <BootstrapButton
        onClick={handleClickOpen}
          variant="contained"
          style={{borderRadius: 10}}
          size="small"
          startIcon={<AddRoundedIcon fontSize="small" />}
        >
          Ajouter phase
        </BootstrapButton>
        </div>
        <CustomDataGrid
        rows={tableData}
        columns={phaseColumns}
        height="79vh"
        className="custom-opp"
        Pagination={CustomPagination}
        rowHeight={40}
        paginationPageSize={10}
        borderRadius="10px"
      />
        </Col>
        <Col xl="3" lg="3">
        <div style={{ marginBottom: "20px" }}>
        <BootstrapButton
        onClick={handleClickOpenRef}
          variant="contained"
          style={{borderRadius: 10}}
          size="small"
          startIcon={<AddRoundedIcon fontSize="small" />}
        >
          Listes des références
        </BootstrapButton>
        </div>
        <CustomDataGrid
        rows={refTable}
        columns={refColumns}
        height="79vh"
        className="custom-opp"
        Pagination={CustomPagination}
        rowHeight={40}
        paginationPageSize={10}
        borderRadius="10px"
      />
        </Col>
        <Col xl="3" lg="3">
        <div style={{ marginBottom: "20px" }}>
        <BootstrapButton
        onClick={handleClickOpenOp}
          variant="contained"
          style={{borderRadius: 10}}
          size="small"
          startIcon={<AddRoundedIcon fontSize="small" />}
        >
          Listes des opérateurs
        </BootstrapButton>
        </div>
        <CustomDataGrid
        rows={operateurTable}
        columns={opColumns}
        height="79vh"
        className="custom-opp"
        Pagination={CustomPagination}
        rowHeight={40}
        paginationPageSize={10}
        borderRadius="10px"
      />
        </Col>

      </Row>
      </div>
  )
}

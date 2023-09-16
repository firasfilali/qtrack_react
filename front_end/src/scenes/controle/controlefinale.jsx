import React, { useState, useEffect } from "react";
import "../../assets/css/controlefinale.css";
import { GridToolbarContainer, GridToolbarExport } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {
  PhaseColumns,
  PhaseRows,
  TypeColumns,
  TypeRows,
  StatiqueColumns,
  StatiqueRows,
} from "../../utils/data";
import { CustomPagination } from "../../assets/styleJs/Pagination";
import CustomDataGrid from "../../components/CustomDataGrid";
import { Row, Col } from "react-bootstrap";

function CustomToolbar() {
  return (
    <GridToolbarContainer className="table-title py-3">
      <h5>Statistiques totales</h5>
      <div className="export-button-container">
        <GridToolbarExport sx={{ color: "black" }} />
      </div>
    </GridToolbarContainer>
  );
}

const Controle = () => {
  const [tableData, setTableData] = useState([]);
  const [tableDataTypeNC, setTableDataTypeNC] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:3030/controle")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableData(data);
      });
  };

  const fetchDataTypeNC = () => {
    fetch("http://localhost:3030/typeNC_rows")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setTableDataTypeNC(data);
      });
  };


  useEffect(() => {
    fetchData();
    fetchDataTypeNC();
  }, [tableData],[tableDataTypeNC]);

  const columnsProduit = [
    {
      field: "ref_cntrl",
      headerName: "Référence",
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
      field: "famille",
      headerName: "Famille",
      flex: 0.2,
      align: "center",
      editable: true,
    },

    {
      field: "conforme",
      headerName: "Taux de conformité",
      flex: 0.2,
      align: "center",
      editable: true,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "#2bc48a",
              fontWeight: "bold",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
    },
    {
      field: "nonConforme",
      headerName: "Taux de non-conformité",
      flex: 0.2,
      align: "center",
      editable: true,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "#ea2525",
              fontWeight: "bold",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
    },
  ];
  const columnsQuantity = [
    {
      field: "qt_cntrl",
      headerName: "Quantité contrôlé",
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
      field: "conforme",
      headerName: "Taux de conformité",
      flex: 0.2,
      align: "center",
      editable: true,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "#2bc48a",
              fontWeight: "bold",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
    },
    {
      field: "nonConforme",
      headerName: "Taux de non-conformité",
      flex: 0.2,
      align: "center",
      editable: true,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "#ea2525",
              fontWeight: "bold",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
    },
  ];

  const columnsType = [
    {
      field: "typenc",
      headerName: "Type",
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
      field: "taux_nc",
      headerName: "%",
      flex: 0.2,
      align: "center",
      editable: true,
      renderCell: (cellValues) => {
        return (
          <div
            style={{
              color: "#ea2525",
              fontWeight: "bold",
            }}
          >
            {cellValues.value}
          </div>
        );
      },
    },
  ];

  return (
    <div style={{height: "80vh"}}>
      <Row>
        <Col xl="7" lg="7">
          <CustomDataGrid
            key="statiqueGrid"
            rows={tableData}
            columns={columnsProduit}
            height="85vh"
            className="custom-header"
            Toolbar={CustomToolbar}
            Pagination={CustomPagination}
            rowHeight={60}
            paginationPageSize={7}
            borderRadius="10px"
          />
        </Col>
        <Col xl="5" lg="5">
          {" "}
          <div className="bb">
            <div>
              <div className="input-base">
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Insérer famille ou référence"
                  inputProps={{ "aria-label": "search google maps" }}
                />
              </div>
              <div className="table-title2">
                <h6> Quantité contrôlé </h6>
              </div>
              <CustomDataGrid
                key="phaseGrid"
                rows={tableData}
                columns={columnsQuantity}
                className="custom-header"
                hideFooter={true}
                height="250px"
                borderRadius="9px"
                marginBottom="10px"
                paginationPageSize={8}
              />
            </div>
            <div>
              <div className="table-title2">
                <h6>% Type de non-conformité</h6>
              </div>
              <CustomDataGrid
                key="conformiteGrid"
                rows={tableDataTypeNC}
                columns={columnsType}
                className="custom-header"
                hideFooter={true}
                height="250px"
                borderRadius="9px"
                paginationPageSize={6}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Controle;

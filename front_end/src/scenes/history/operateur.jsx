import React from "react";
import { Row, Col } from "react-bootstrap";
import CustomDataGrid from "../../components/CustomDataGrid";
import {
  OperateurColumns,
  OperateurRows,
  PhaseColumnsCcp,
  PhaseRows,
  references,
} from "../../utils/data";
import { CustomPagination } from "../../assets/styleJs/Pagination";
import { DateRangePicker } from "rsuite";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const theme = createTheme({
  palette: {
    custom: {
      main: "#808080",
      contrastText: "#fff",
    },
  },
});

export default function operateur() {
  return (
    <div>
      <Row style={{height: "78vh"}}>
        <Col xl="7" lg="7">
          <div className="datepicker">
            <DateRangePicker
              showOneCalendar
              format="dd/MM/yy"
              size="lg"
              character=" - "
            />
          </div>
          <CustomDataGrid
            rows={OperateurRows}
            columns={OperateurColumns}
            height="83vh"
            className="custom-ccp"
            Pagination={CustomPagination}
            rowHeight={65}
            paginationPageSize={6}
            borderRadius="10px"
          />
        </Col>
        <Col xl="5" lg="5">
            <div className="bb">
          <Autocomplete
            sx={{marginBottom: "10px"}}
            disablePortal
            id="combo-box-demo"
            options={references}
            getOptionLabel={(option) => option.ref}
            renderInput={(params) => (
              <ThemeProvider theme={theme}>
                <TextField
                  {...params}
                  label="Insérer Référence"
                  color="custom"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </ThemeProvider>
            )}
          />
          <CustomDataGrid
            rows={PhaseRows}
            columns={PhaseColumnsCcp}
            height="37vh"
            className="custom-ccp"
            hideFooter={true}
            borderRadius="9px"
            marginBottom="10px"
            paginationPageSize={8}
          />
          <CustomDataGrid
            rows={PhaseRows}
            columns={PhaseColumnsCcp}
            height="37vh"
            className="custom-ccp"
            hideFooter={true}
            borderRadius="9px"
            paginationPageSize={8}
          /></div>
        </Col>
      </Row>
    </div>
  );
}

import { IconButton, Tooltip } from "@mui/material";
import FilterIcon from "@mui/icons-material/Filter";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbar,
} from "@mui/x-data-grid";
// import { useDemoData } from "@mui/x-data-grid-generator";
import { useState } from "react";
import classes from "./home.module.scss";
import { localeText } from "./translate-table.utils";

export default function ToolbarGrid() {
  const [data, setData] = useState({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });

  const rows: GridRowsProp = [
    {
      id: 1,
      ironNum: "69",
      firstName: "ליאל",
      age: "19",
      _id: "212679238",
      onAnchorList: "אולי",
    },
    {
      id: 2,
      ironNum: "420",
      firstName: "שליו",
      age: "20",
      _id: "216439786",
      onAnchorList: "יש מצב",
    },
    {
      id: 3,
      ironNum: "69420",
      firstName: "איתמר",
      age: "21",
      _id: "218346137",
      onAnchorList: "תלוי",
    },
  ];

  const columns: GridColDef[] = [
    { field: "ironNum", headerName: "מספר ברזל", width: 150 },
    { field: "firstName", headerName: "שם פרטי", width: 150 },
    { field: "age", headerName: "גיל", width: 150 },
    { field: "_id", headerName: "תעודת זהות", width: 150 },
    { field: "onAnchorList", headerName: "האם וודאי ברשימת העוגן", width: 150 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        className={classes.muiFixes}
        columns={columns}
        rows={rows}
        {...data}
        components={{
          Toolbar: GridToolbar,
        }}
        localeText={localeText}
      />
      <h1>HEYYYY</h1>
      <Tooltip title="Filter">
        <IconButton>
          <FilterIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

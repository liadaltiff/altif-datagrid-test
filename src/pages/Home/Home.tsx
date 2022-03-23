import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbar,
} from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { useState } from "react";

export default function ToolbarGrid() {
  const [data, setData] = useState({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });

  const rows: GridRowsProp = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns: GridColDef[] = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={rows}
        {...data}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}

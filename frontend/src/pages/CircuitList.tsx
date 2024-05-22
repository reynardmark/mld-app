import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createdRows = [];

for (let i = 1; i < 200; i++) {
  createdRows.push({ id: i, circuitName: "414YL", substationName: "Parang" });
}

const rows: GridRowsProp = createdRows;

const columns: GridColDef[] = [
  {
    field: "circuitName",
    headerName: "Circuit Name",
    width: 200,
    editable: true,
  },
  {
    field: "substationName",
    headerName: "Substation Name",
    width: 200,
  },
  { field: "actions", headerName: "Actions", width: 150 },
];

export default function CircuitList() {
  const handleProcessRowUpdateError = () => {
    // error when entering data
    console.log("handle process row update error clicked!");
  };

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      sx={{ backgroundColor: "white" }}
      processRowUpdate={(updatedRow, originalRow) => {
        console.log(updatedRow);
        console.log(originalRow);
      }}
      onProcessRowUpdateError={handleProcessRowUpdateError}
    />
  );
}

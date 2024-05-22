import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

// const rows: GridRowsProp = [
//   { id: 1, circuitName: "414YL", substationName: "Parang" },
//   { id: 2, circuitName: "415YL", substationName: "Parang" },
//   { id: 3, circuitName: "404E", substationName: "Balintawak" },
// ];

const createdRows = [];

for (let i = 1; i < 200; i++) {
  createdRows.push({ id: i, circuitName: "414YL", substationName: "Parang" });
}

const rows: GridRowsProp = createdRows;

const columns: GridColDef[] = [
  {
    field: "circuitName",
    headerName: "Circuit Name",
    width: 150,
    editable: true,
  },
  {
    field: "substationName",
    headerName: "Substation Name",
    width: 150,
  },
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

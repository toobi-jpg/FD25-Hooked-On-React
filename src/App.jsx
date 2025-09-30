import "./App.css";
import ExportButton from "./components/ExportButton";
import { useState } from "react";

function App() {
  //Test data i state för export
  const [columns, setColumns] = useState(["Name", "Age", "City"]);
  const [rows, setRows] = useState([
    ["Anna", 25, "Stockholm"],
    ["Karl", 20, "Örebro"],
    ["Sara", 23, "Uppsala"],
  ]);

  return (
    <>
      <ExportButton columns={columns} rows={rows} />
    </>
  );
}

export default App;

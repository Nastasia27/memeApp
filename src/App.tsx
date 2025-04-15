import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ListPage from "@/pages/list";
import TablePage from "@/pages/table-page"

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ListPage />} path="/list" />
      <Route element={<TablePage />} path="/table-page" />
    </Routes>
  );
}

export default App;

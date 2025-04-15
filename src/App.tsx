import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/table-page";


import ListPage from "@/pages/table-page";
import TablePage from "@/pages/table-page"

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<ListPage />} path="/list" />
      <Route element={<TablePage />} path="/table-page" />
    </Routes>
  );
}

export default App;

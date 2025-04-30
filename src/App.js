import React from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";
import { DataProvider } from "./context/dataContext";

const App = () => {

  return (
    <DataProvider>
      <DashboardShell />
    </DataProvider>
  );
  // return <DataFetchingContainer />;
};

export default App;

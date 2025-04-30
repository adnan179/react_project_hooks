import React from "react";
import DashboardShell from "./features/Dashboard/DashboardShell";
import DataFetchingContainer from "./features/playground/dataFetchingContainer";
import { sales } from "./mocks";
import Loading from "./common/components/Loading";

export const globalContext = React.createContext();
const { Provider } = globalContext;

const initialState = {
  loading: false,
  error:"",
  salesTotal:3466,
  subscriptionsTotal:1492,
  data:sales
}
const App = () => {
  return(
    <Provider value={initialState}>
      <DashboardShell />
    </Provider>
  ) 

};

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { AppStateProvider } from "./states/AppState";


import Home from "./pages/Home";
import Scanner from "./pages/Scanner";
import Backtest from "./pages/Backtest";

const queryClient = new QueryClient();
function App(): React.ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <AppStateProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scanner" element={<Scanner />} />
            <Route path="/:backtest" element={<Backtest />} />
          </Routes>
        </BrowserRouter>
      </AppStateProvider>
    </QueryClientProvider>
  );
}

export default App;

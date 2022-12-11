import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

import Home from "./pages/Home";
import Scanner from "./pages/Scanner";
function App(): React.ReactElement {
  return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scanner" element={<Scanner />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
  );
}

export default App;

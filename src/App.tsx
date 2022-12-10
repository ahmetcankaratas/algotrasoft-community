import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

import Home from "./pages/Home";
import Scanner from "./pages/Scanner";
function App(): React.ReactElement {
  return (
    <div
      className={`mx-auto min-h-screen w-full py-2 font-opensans dark:bg-darkBlue dark:text-white`}
    >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scanner" element={<Scanner />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;

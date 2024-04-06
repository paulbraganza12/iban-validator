import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import ValidationPage from "./components/validation-page";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ValidationPage />
      </div>
    </QueryClientProvider>
  );
}

export default App;

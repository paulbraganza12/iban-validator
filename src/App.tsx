import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Validation from "./components/Validation/validation";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Validation />
      </div>
    </QueryClientProvider>
  );
}

export default App;

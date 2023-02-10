import Form from "./Components/form";
import { ContextProvider } from "./Context/Context";

function App() {
  return (
    <ContextProvider>
      <div className="app w-screen h-screen bg-blue-100 flex flex-col justify-center items-center">
        <Form />
      </div>
    </ContextProvider>
  );
}

export default App;

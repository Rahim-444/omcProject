import { Home } from "./Components/Home";
import { Form } from "./Components/Form";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Form" element={<Form />}></Route>
    </Routes>
  );
}

export default App;

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Animatie from "./Animatie";
import App from "./App";
import Form from "./Form";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> </Route>
        <Route path="/animation" element={<Animatie />}> </Route>
        <Route path="/signup" element={<Form />}>   </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
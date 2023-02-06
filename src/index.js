import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Animatie from "./Animatie";
import App from "./App";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App />}>   </Route>
        <Route path="/" element={<Animatie />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
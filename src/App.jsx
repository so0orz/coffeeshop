// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/header";
import Body from "../src/components/body";
import Footer from "../src/components/footer";


export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />

        <Routes>
          <Route path="/coffeeshop" element={<Body />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

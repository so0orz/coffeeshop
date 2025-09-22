// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/header";

import Footer from "../src/components/footer";
import Body from "./components/body";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Login from "./pages/Login/Login";
import { Provider } from "react-redux";
import { store } from "./app/store";



export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />

        <Routes>
          <Route path="/coffeeshop/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/coffeeshop" element={<Body />}/>
          </Route>
          <Route path="*" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
    </Provider>
  );
}

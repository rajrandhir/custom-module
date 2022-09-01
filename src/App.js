import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Test from "./Test";

const loading = (
  <div className="text-center">
    <div className="">Loading...</div>
  </div>
)
// Layouts
const Layout = lazy(() => import('./app/layouts/Layout'));

//pages
const Login = lazy(() => import('./app/pages/login/Login'));
const Register = lazy(() => import('./app/pages/registration/Registration'));
const Page404 = lazy(() => import('./app/pages/page404/Page404'));

function App() {
  return (
    <>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

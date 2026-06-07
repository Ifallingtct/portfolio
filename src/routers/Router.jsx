import { Navigate, Routes, Route } from "react-router-dom";

import About from "../pages/About";
import ProjectDetail from "../pages/ProjectDetail";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Summary from "../pages/Summary";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/gioi-thieu" replace />} />
      <Route path="/gioi-thieu" element={<About />} />
      <Route path="/du-an" element={<Projects />} />
      <Route path="/du-an/:projectId" element={<ProjectDetail />} />
      <Route path="/ky-nang" element={<Skills />} />
      <Route path="/tong-ket" element={<Summary />} />
    </Routes>
  );
}

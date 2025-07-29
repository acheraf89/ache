import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import { About } from "./components/pages/About";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import routes from "tempo-routes";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
            {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
          </>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;

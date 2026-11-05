import { useState } from "react";
import ParticipanteCard from "./components/ParticipanteCard";
import "../src/index.css"

function App() {
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/votacao" element={<Votacao />} />
            <Route path="/resultado" element={<Resultado />} />
        </Routes>
    </BrowserRouter>
}

export default App;
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { EdlListe } from "../../pages/EdlListe";
import { NavBar } from "./NavBar";
import { Excel } from "../../pages/Excel";
import { GC } from "../gc";

export const NavigationRoutes = () => {
    return (
        <>
            <Router>
            <NavBar />
                <Routes>
                    <Route path="/" element={<EdlListe />} />
                    <Route path="/GC/:id/edit/:uid" element={<GC />} />
                    <Route path="/excel" element={<Excel />} />
                </Routes>
            </Router>
        </>
    );
}
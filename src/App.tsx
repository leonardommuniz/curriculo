import { Routes, Route, Outlet, Link } from "react-router-dom";
import MenuBar from "./components/MenuBar/MenuBar";
import Home from "./pages/Home";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MenuBar />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
}
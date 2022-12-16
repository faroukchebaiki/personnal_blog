import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import About from "./pages/about";
import Contact from "./pages/Contact";

import Navbar from "./Components/navbar";
import Footer from "./Components/Footer";
const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="about" element={<About />} />
                <Route path="Contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;

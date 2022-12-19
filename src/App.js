import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import About from "./pages/about";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";

import Navbar from "./Components/navbar";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="about" element={<About />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
            
        </>
    );
};

export default App;

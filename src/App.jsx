import Navbar from "./components/SideBar";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const App = () => {
    return (
        <div>
            <Navbar />
            <Main />
            <Work />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;

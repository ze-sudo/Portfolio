// ツール
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

// コンポーネント
import Header from "./Components/Main/Header";
import Footer from "./Components/Main/Footer";
import Latest from "./Components/Parts/UI/Latest";
import MainContent from "./Components/Parts/UI/MainContent";
import Top from "./Components/Main/Top";
import AboutMe from "./Components/Main/AboutMe";
import Portfolio from "./Components/Main/Portfolio";
import Plans from "./Components/Main/Plans";

function App() {
  return (
    <Router>
      <div className="App">
        <CssBaseline enableColorScheme />
        <Header />
        <Container
          maxWidth="lg"
          component="main"
          sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
        >
          {/* <Latest /> */}

          <Routes>
            <Route path="/" element={<Top />} />
          </Routes>
          <Routes>
            <Route path="/aboutMe" element={<AboutMe />} />
          </Routes>
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
          <Routes>
            <Route path="/plans" element={<Plans />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

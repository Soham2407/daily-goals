import { Container } from "@mui/material";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Container className="app">
      <Header title="Daily Goals" />
      <Content />
      <Footer />
    </Container>
  );
}

export default App;

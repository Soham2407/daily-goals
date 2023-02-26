import { useState } from "react";
import { Container } from "@mui/material";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [goals, setGoals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGoals, setFilterGoals] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (searchTerm !== "") {
      const updateGoals = goals.filter((goal) =>
        goal.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterGoals(updateGoals);
    } else {
      setFilterGoals(goals);
    }
  };
  return (
    <Container className="app">
      <Header
        title="Daily Goals"
        handleSearch={handleSearch}
        searchTerm={searchTerm}
      />
      <Content
        goals={searchTerm.length < 1 ? goals : filterGoals}
        setGoals={setGoals}
      />
      <Footer />
    </Container>
  );
}

export default App;

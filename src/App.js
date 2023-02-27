import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const getItemFromLocalStorage = () => {
  const items = JSON.parse(localStorage.getItem("goals"));
  if (items) {
    return items;
  } else {
    return [];
  }
};

function App() {
  const [goals, setGoals] = useState(getItemFromLocalStorage());
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGoals, setFilterGoals] = useState(goals);

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    const filterItems = goals.filter((goal) =>
      goal.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterGoals(filterItems);
  }, [searchTerm, goals]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <Container className="app">
      <Header
        title="Daily Goals"
        handleSearch={handleSearch}
        searchTerm={searchTerm}
      />
      <Content goals={filterGoals} setGoals={setGoals} />
      <Footer />
    </Container>
  );
}

export default App;

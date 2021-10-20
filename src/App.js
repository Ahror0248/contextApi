import Add from "./add.jsx";
import { Container } from "./Appstyle.js";
import MovieList from "./movieList";
import Navbar from "./navbar.jsx";

function App() {
  return (
    <Container className="App">
      <Navbar />
      <Add />
      <MovieList />
    </Container>
  );
}

export default App;

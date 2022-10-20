import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Router path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books}} 
        <Footer />
     </div>
    </Router>
  )
}

export default App;

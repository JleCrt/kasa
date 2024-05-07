import './styles/app.css';
import Header from "./components/Header";
import Router from "./router";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;

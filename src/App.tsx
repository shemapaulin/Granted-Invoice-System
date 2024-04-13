import Form from "./components/form";
import Invoice from "./components/invoice"
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes"
function App() {
  return(
  <>
  <Router>
  <Routes/>
  </Router>
  </>
  )
}

export default App;

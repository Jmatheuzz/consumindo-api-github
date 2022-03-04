import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes";
import {Router} from 'react-router-dom';
import history from './services/history';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} history={history}>
      <Routes/>
      <GlobalStyles/>
      <ToastContainer autoClose={5000} className="toast-container"/>
    </Router>

  );
}

export default App;

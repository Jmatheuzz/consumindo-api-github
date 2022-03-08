import GlobalStyles from "./styles/GlobalStyles";
import {Route, Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import Header from './components/Header';
import Home from './pages/Home';
import BuscaApi from './pages/BuscaApi';
import Page404 from './pages/Page404';
import SobreMim from './pages/SobreMim';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (

    <>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/buscaRepo" component={BuscaApi} />
      <Route exact path="/sobremim/" component={SobreMim} />
      <Route path="/*" component={Page404} />
    </Switch>
    <GlobalStyles/>
    <ToastContainer autoClose={5000} className="toast-container"/>
    </>

  );
}

export default App;

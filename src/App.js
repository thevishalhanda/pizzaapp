import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import "./assets/css/global.css"
import Content from './components/Content';
import GlobalContextProvider from './context/GlobalContext';

function App() {
  return (
    <>
    <GlobalContextProvider >
      <Header />
      <Content />
    </GlobalContextProvider>
    </>
  );
}

export default App;

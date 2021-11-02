import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}


export default App;
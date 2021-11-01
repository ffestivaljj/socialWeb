import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

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
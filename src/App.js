import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://pbs.twimg.com/profile_images/1063925348205821958/DlGcxdOl.jpg'/>
            </header>
            <nav className='nav'>
                <div>
                    <a href='#'>Profile</a>
                </div>
                <div>
                    <a href='#'>Friends</a>
                </div>
                <div>
                    <a href='#'>Messages</a>
                </div>
                <div>
                    <a href='#'>Music</a>
                </div>
                <div>
                    <a href='#'>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src='https://policyexchange.org.uk/wp-content/uploads/2019/04/Space.jpg'/>
                </div>
                <div>

                    <img
                        src='https://i.pinimg.com/474x/67/0a/1d/670a1d06e7bff426ec343e8c06c93ca5--crazy-faces-strange-people.jpg'/>
                    <div>
                        Anton D.
                        Date of Birthday: 27/11/92
                        City: NN
                        Education: PTY
                        Web Cite: <a href='pikabu.ru'>pikabu.ru</a>
                    </div>
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>

            </div>

            <footer></footer>
        </div>
    );
}


export default App;



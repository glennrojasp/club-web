import Navigation from './sites/nav/nav.page';
import Hero from './components/hero/hero.component';


import logo from './logo.svg';
import './App.css';
import './stylesheet/animate.css';
// import './stylesheet/animsition.css';
import './stylesheet/bootstrap.css';
// import './stylesheet/hamela-icon.css';
// import './stylesheet/icomoon.css';
// import './stylesheet/ionicons.css';
// import './stylesheet/jquery.fancybox.css';
// import './stylesheet/owl.carousel.css';
// import './stylesheet/reset.css';
// import './stylesheet/responsive.css';
// import './stylesheet/shortcodes.css';
import './stylesheet/style.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

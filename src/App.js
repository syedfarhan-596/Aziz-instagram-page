import logo from './logo.svg';
import classes from './App.module.css';
import Header from './Header-app/Header-app';
import Main from './Main-app/Main-app';
import Footer from './Footer-app/Footer-app';

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

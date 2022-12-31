import './App.css';
import Header from './Header';
import MainTheme from './MainTheme';
import IntroActOne from './ActOne/IntroActOne';
import IntroActTwo from './ActTwo/IntroActTwo';
import IntroActThree from './ActThree/IntroActThree';
import ActOneLine1 from './ActOne/Line1';

function App() {
  return (
    <div className="App">
      <Header />
      <MainTheme />
      <IntroActOne />
      <ActOneLine1 />
      <IntroActTwo />
      <IntroActThree />
    </div>
  );
}

export default App;

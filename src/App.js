import './App.css';
import Header from './Header';
import MainTheme from './MainTheme';
import IntroActTwo from './ActTwo/IntroActTwo';
import IntroActThree from './ActThree/IntroActThree';
import ActOne from './ActOne/ActOne';

function App() {
  return (
    <div className="App">
      <Header />
      <MainTheme />
      <ActOne />
      <IntroActTwo />
      <IntroActThree />
    </div>
  );
}

export default App;

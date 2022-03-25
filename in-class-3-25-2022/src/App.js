import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRouter } from './modules/router';
import { Provider } from 'react-redux';
import { store } from './modules/bootup/store';
import { Navigation } from './modules/router';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <AppRouter />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

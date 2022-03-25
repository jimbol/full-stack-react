import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRouter } from './modules/router';
import { Provider } from 'react-redux';
import { store } from './modules/bootup/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <AppRouter />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

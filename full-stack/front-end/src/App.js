import { Container } from "@mui/material";
import {
  BrowserRouter,
} from "react-router-dom";
import { Provider } from 'react-redux'

import { AppRouter, Navigation } from './modules/router';
import { store } from './modules/bootup/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <Navigation />
          <AppRouter />
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

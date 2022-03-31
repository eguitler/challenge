import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import {
  Home,
  Movie,
  NotFound,
} from './pages';

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Movie />} path='/movie/:id' />
      <Route element={<NotFound />} path='/' />
    </Routes>
  </BrowserRouter>
);

export default App;

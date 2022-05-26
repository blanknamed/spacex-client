import { Provider } from 'react-redux';
import { ThemeProvider } from './services/theme';
import { Router } from './router';
import { store } from './store';

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

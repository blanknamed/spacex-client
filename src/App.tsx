import { ThemeProvider } from './services/theme';
import { Router } from './router';

export function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

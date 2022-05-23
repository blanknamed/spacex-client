import { Layout } from './layout';
import { ThemeProvider } from './services/theme';

export function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div className="App">
          App
        </div>
      </Layout>
    </ThemeProvider>
  );
}

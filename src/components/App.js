import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from "../theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Main/>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

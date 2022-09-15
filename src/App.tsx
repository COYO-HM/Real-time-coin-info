import { GlobalStyle } from "./style/globalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import FireBaseExample from "./components/pages/Test";
import { createGlobalStyle } from "styled-components";
import MainPage from "./components/pages/routes/MainPage";
import DetailPage from "./components/pages/routes/DetailPage";
import ListPage from "./components/pages/routes/ListPage";
import MyPage from "./components/pages/routes/MyPage";
import SignInPage from "./components/pages/routes/SignInPage";
import SignUpPage from "./components/pages/routes/SignUpPage";
import ErrorPage from "./components/pages/routes/404";

export const GlobalStyle = createGlobalStyle`
  box-sizing: border-box;

  body {
    box-sizing: border-box;
		margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/test" element={<FireBaseExample />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/list/:id" element={<ListPage />} />
          <Route path="/mypage/:id" element={<MyPage />} />
          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
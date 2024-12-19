import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReadPage from "./page/ReadPage";
import CreatePage from "./page/CreatePage";
import UpdatePage from "./page/UpdatePage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ReadPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/update" element={<UpdatePage />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;

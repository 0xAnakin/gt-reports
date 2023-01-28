import React from 'react';
import { HashRouter } from "react-router-dom";
import moment from 'moment';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import 'moment/locale/el';

moment().locale('el');

function App() {
  return (
    <HashRouter>
      <Header />
      <Main />
      <Footer />
    </HashRouter>
  );
}

export default App;

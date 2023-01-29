import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import store from '../store';
import AppContentWrapper from './AppContentWrapper';


import 'moment/locale/el';

moment().locale('el');

function App() {
	return (
		<HashRouter>
			<Provider store={store}>
				<AppContentWrapper />
			</Provider>
		</HashRouter>
	);
}

export default App;

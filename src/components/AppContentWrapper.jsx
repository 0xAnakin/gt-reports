import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AppCloseModal from './AppCloseModal';
import { ROUTES, VEHICLES } from '../store/enums';

const electron = window.require('electron');
const { ipcRenderer } = electron;

function AppContentWrapper() {

    const dispatch = useDispatch();

    useEffect(() => {

        ipcRenderer.on('data-db-response', (evt, data) => {

            dispatch({
                type: ROUTES.LOAD_INITIAL_ROUTES_DATA,
                payload: data.routes
            })

            dispatch({
                type: VEHICLES.LOAD_INITIAL_VEHICLES_DATA,
                payload: data.vehicles
            })

        });

        ipcRenderer.send('data-db-request');

    }, []);

    return (
        <React.Fragment>
            <Header />
            <Main />
            <Footer />
            <AppCloseModal />
        </React.Fragment>
    );
}

export default AppContentWrapper;

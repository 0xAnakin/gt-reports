'use strict';

import { APP } from '../enums';

const initialState = {
    appCloseModalVisible: false
};

const appReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {

        case APP.SHOW_APP_CLOSE_MODAL: {
            return {
                ...state,
                appCloseModalVisible: true
            };
        }

        case APP.HIDE_APP_CLOSE_MODAL: {
            return {
                ...state,
                appCloseModalVisible: false
            };
        }

        default: {
            return state;
        }

    }

}

export default appReducer;
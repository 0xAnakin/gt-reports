import { ROUTES } from '../enums';

const initialState = {
    routes: []
};

const routesReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {

        case ROUTES.LOAD_INITIAL_ROUTES_DATA:{
            return {
                ...state,
                routes: payload
            }
        }

        default: {
            return state;
        }

    }

}

export default routesReducer;
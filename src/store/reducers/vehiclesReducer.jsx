import { VEHICLES } from '../enums';

const initialState = {
    vehicles: []
};

const vehiclesReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {

        case VEHICLES.LOAD_INITIAL_VEHICLES_DATA: {
            return {
                ...state,
                vehicles: payload
            }
        }

        default: {
            return state;
        }

    }

}

export default vehiclesReducer;
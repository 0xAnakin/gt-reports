import React from 'react';

const electron = window.require('electron');
const { ipcRenderer } = electron;

class VehicleRoutes extends React.Component {

    constructor(props) {

        super(props);

        this.state = this.getInitialState();

    }

    getInitialState() {
        return {};
    }

    render() {
        return (
            <div>Διαδρομές</div>
        );
    }
}


export default VehicleRoutes;

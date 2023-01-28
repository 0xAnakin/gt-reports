import React from 'react';

const electron = window.require('electron');
const { ipcRenderer } = electron;

class Home extends React.Component {

    constructor(props) {

        super(props);

        this.state = this.getInitialState();

    }

    getInitialState() {
        return {};
    }

    render() {
        return (
            <div>Αρχική</div>
        );
    }
}


export default Home;

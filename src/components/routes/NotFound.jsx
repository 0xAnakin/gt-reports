import React from 'react';

const electron = window.require('electron');
const { ipcRenderer } = electron;

class NotFound extends React.Component {

    constructor(props) {

        super(props);

        this.state = this.getInitialState();

    }

    getInitialState() {
        return {};
    }

    render() {
        return (
            <div>Η Σελίδα δεν βρέθηκε!</div>
        );
    }
}


export default NotFound;

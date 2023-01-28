import React from 'react';

const electron = window.require('electron');
const { ipcRenderer } = electron;

class Header extends React.Component {

    constructor(props) {

        super(props);

        this.state = this.getInitialState();

    }

    getInitialState() {
        return {
            maximizedButtonClassList: 'fa fa-window-maximize'
        };
    }

    onMinimizeClick = () => {
        ipcRenderer.send('min-app');
    }

    onMaximizeClick = (evt) => {

        if (evt.target.className.includes('fa-window-maximize')) {

            ipcRenderer.send('unmax-app');

            this.setState({
                ...this.state,
                maximizedButtonClassList: 'fa fa-window-restore'
            });

        } else {

            ipcRenderer.send('max-app');

            this.setState({
                ...this.state,
                maximizedButtonClassList: 'fa fa-window-maximize'
            });

        }

    }

    onCloseClick = () => {
        ipcRenderer.send('close-app');
    }

    render() {

        const { maximizedButtonClassList } = this.state;

        return (
            <header className="page-header">
                <div>
                    <button className="menubar-btn">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <h5 className="app-title">My Awesome App</h5>
                </div>
                <div>
                    <button className="menubar-btn" onClick={this.onMinimizeClick}>
                        <i className="fa fa-window-minimize" aria-hidden="true"></i>
                    </button>
                    <button className="menubar-btn" onClick={this.onMaximizeClick}>
                        <i className={maximizedButtonClassList} aria-hidden="true"></i>
                    </button>
                    <button className="menubar-btn" onClick={this.onCloseClick}>
                        <i className="fa fa-window-close-o" aria-hidden="true"></i>
                    </button>
                </div>
            </header>
        );
    }
}


export default Header;

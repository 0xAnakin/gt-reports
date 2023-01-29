import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { APP } from '../store/enums';
import logo from '../images/logo.png';

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
        this.props.showAppCloseModal();
    }

    render() {

        const { maximizedButtonClassList } = this.state;

        return (
            <header className="page-header">
                <div>
                    <img className="app-logo" src={logo} alt="Logo" />
                    <h5 className="app-title">{moment().format('ddd DD, MMMM YYYY')}</h5>
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

const mapStateToProps = (state) => {
    return {
        app: state.appReducer
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        showAppCloseModal: (payload) => {
            dispatch({
                type: APP.SHOW_APP_CLOSE_MODAL
            })
        },

        hideAppCloseModal: (payload) => {
            dispatch({
                type: APP.HIDE_APP_CLOSE_MODAL
            })
        }

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

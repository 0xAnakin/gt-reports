const url = require('node:url');
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { retrieveRoutes, retrieveVehicles, saveRoutes, saveVehicles } = require('../electron/db/index');

let ROUTES = [];
let VEHICLES = [];

if (require('electron-squirrel-startup')) {
	app.quit();
}

app.disableHardwareAcceleration();

const createWindow = () => {

	const mainWindow = new BrowserWindow({
		width: 1920,
		height: 1080,
		minWidth: 800,
		minHeight: 600,
		icon: path.join(__dirname, '../assets/icon.png'),
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true,
			contextIsolation: false
		},
		frame: false
	});

	const homepage = url.format({
		pathname: path.join(__dirname, '../build/index.html'),
		protocol: 'file',
		slashes: true,
		hash: ''
	})

	mainWindow.loadURL(homepage);
	mainWindow.webContents.openDevTools();

	/**
	 * APP STATE IPC 
	 */

	ipcMain.on('min-app', () => {
		if (mainWindow.minimizable) {
			mainWindow.minimize();
		}
	});

	ipcMain.on('unmax-app', () => {
		mainWindow.maximize();
	});

	ipcMain.on('max-app', () => {
		mainWindow.unmaximize();
	});

	ipcMain.on('close-app', () => {
		mainWindow.close();
	});

	/**
	 * APP DATA IPC 
	 */

	ipcMain.on('data-db-request', (evt, data) => {
		evt.reply('data-db-response', {
			routes: ROUTES,
			vehicles: VEHICLES
		});
	});

};

app.on('ready', () => {

	Promise.all([
		retrieveRoutes(),
		retrieveVehicles()
	]).then(([routes, vehicles]) => {

		ROUTES = routes;
		VEHICLES = vehicles;

		createWindow();

	}).catch(console.error);

});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});


const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

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
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    },
    frame: false
  });

  mainWindow.loadFile(path.join(__dirname, '../build/index.html'));
  mainWindow.webContents.openDevTools();

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

};


app.on('ready', createWindow);

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
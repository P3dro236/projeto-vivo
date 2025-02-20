const { app, BrowserWindow, shell } = require('electron');
const path = require('path');
require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});
let mainWindow;
app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 690,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadFile('src/index.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
app.on("window-all-closed", () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

const { app, BrowserWindow  } = require('electron');
const electronReload = require('electron-reload');
const path = require('path');


let mainWindow;
require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

app.whenReady().then(() => {

    mainWindow = new BrowserWindow({
        width: 400,
        height: 600,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWindow.loadFile('src/index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    })
})
app.on("window-all-closed", () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

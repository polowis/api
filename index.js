require('update-electron-app')({
    repo: 'https://github.com/polowis/api',
    logger: require('electron-log')
})

const path = require('path');
const glob = require('glob');
const {app, BrowserWindow} = require('electron');

const debug = /--debug/.test(process.argv[2])

if (process.mas) app.setName('Electron')

let mainWindow = null;

function initialize(){
    makeSingleInstance();

    function createWindow(){
        const windowOptions = {
            width : 1000,
            minWidth: 680,
            height: 840,
            title: app.getName(),
            webPreference: {
                nodeIntergration: true
            }

        }
        if (process.platform === 'linux') {
            windowOptions.icon = path.join(__dirname, '/assets/app-icon/png/512.png')
          }

        mainWindow = new BrowserWindow(windowOptions);
        mainWindow.loadURL(path.join('file://', __dirname, '/index.html'))

        if (debug) {
            mainWindow.webContents.openDevTools()
            mainWindow.maximize()
            require('devtron').install()
          }
        mainWindow.on('closed', () => {
            mainWindow = null
        })
    }
    app.on('ready', () => {
        createWindow();

    })
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
          app.quit()
        }
      })

    app.on('activate', () => {
        if(mainWindow === null){
            createWindow();
        }
    })
}

function makeSingleInstance () {
    if (process.mas) return
  
    app.requestSingleInstanceLock()
  
    app.on('second-instance', () => {
      if (mainWindow) {
        if (mainWindow.isMinimized()) mainWindow.restore()
        mainWindow.focus()
      }
    })
  }

initialize();
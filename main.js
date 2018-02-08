const {app, BrowserWindow,Menu} = require('electron')
const path = require('path')
const url = require('url')
const shell=require('electron').shell
require('electron-reload')(__dirname)
const ipc = require('electron').ipcMain
const GITHUB_URL='https://github.com/bikz007/cryptonotifier-app'

//global object for notification inteval value
global.sharedObj={notival :30000 }
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 500})

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'src/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  //win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
  var menu=Menu.buildFromTemplate([
        {
            label:'Menu',
            
            submenu:[
                {
                    label:'Adjust Notification Interval',
                    submenu:[
                        {
                            label:'30 minutes',
                            click(){
                                //setting notification inteval value
                                global.sharedObj.notival=180000
                            }
                        },
                        {
                            label:'60 minutes',
                            click(){
                                global.sharedObj.notival=360000;
                            }
                        },
                        {
                            label:'2 hour',
                            click(){
                                global.sharedObj.notival=720000;
                            }
                        }
                    ]
                },
                {
                    label:'Platforms',
                    submenu:[
                        {
                            label:'CoinMarketCap',
                            click(){
                                shell.openExternal('http://coinmarketcap.com')
                            }
                        },
                        {
                            label:'CrptoCompare',
                            click(){
                                shell.openExternal('https://www.cryptocompare.com/')
                            }
                        },
                        {
                            label:'Coin Hills',
                            click(){
                                shell.openExternal('https://www.coinhills.com/')
                            }
                        },
                        {
                            label:'BFXData',
                            click(){
                                shell.openExternal('https://www.bfxdata.com/')
                            }
                        }
                    ]
                },
                {type:'separator'},
                {
                    label:'Exit',
                    click(){
                        app.quit()
                    }
                }
            ]
        },
        {
            label:'Help',
            submenu:[
                {
                    label:'Inspect',
                    click(){
                        win.webContents.openDevTools()
                    }
                },
                {
                    label:'Contribute on Github',
                    click(){
                        shell.openExternal(GITHUB_URL)
                    }
                }
            ]
        }
    ])
    Menu.setApplicationMenu(menu);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipc.on('update-notify-value-BTC', function (event, arg) {
    win.webContents.send('targetPriceValBTC', arg)
})
ipc.on('update-notify-value-ETH', function (event, arg) {
    win.webContents.send('targetPriceValETH', arg)
})
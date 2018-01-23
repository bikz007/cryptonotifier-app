const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const axios = require('axios');
const ipc = electron.ipcRenderer
const notifier = require("node-notifier")

const notifyBtnBTC = document.getElementById('notifyBtnBTC')
const notifyBtnETH = document.getElementById('notifyBtnETH')

var price1 = document.getElementById('pricebtc')
var price2 = document.getElementById('priceeth')
var targetPrice = document.getElementById('targetPrice')
var targetPriceVal;


function getBTC() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
    .then(res => {
                    const cryptos = res.data.BTC.USD
                    price1.innerHTML = '$'+cryptos.toLocaleString('en')

                    if (targetPrice.innerHTML != '' && targetPriceVal < res.data.BTC.USD) {
                        notifier.notify({
                            message: 'BTC just beat your target price!',
                            title: 'Crypto Alert',
                            sound: true,
                            icon: path.join(__dirname, '../assets/images/Bitcoin.ico'),
                            wait:true
                        });
                    }
                }
        )
}

getBTC();
setInterval ( getBTC, 30000 );

function getETH() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=USD')
    .then(res => {
                    const cryptos = res.data.ETH.USD
                    price2.innerHTML = '$'+cryptos.toLocaleString('en')

                    if (targetPrice.innerHTML != '' && targetPriceVal < res.data.ETH.USD) {
                        notifier.notify({
                            message: 'ETH just beat your target price!',
                            title: 'Crypto Alert',
                            sound: true,
                            icon: path.join(__dirname, '../assets/images/Bitcoin.ico'),
                            wait:true
                        });
                    }
                }
        )
}

getETH();
setInterval ( getETH, 30000 );

notifyBtnBTC.addEventListener('click', function (event) {
    const modalPath = path.join('file://', __dirname, 'add.html')
    let win = new BrowserWindow({ 
        frame: false, 
        transparent: true, 
        alwaysOnTop: true,    // Add this line
        width: 400, 
        height: 300
    })
    win.on('close', function () { win = null })
    win.loadURL(modalPath)
    win.show()
})

notifyBtnETH.addEventListener('click', function (event) {
    const modalPath = path.join('file://', __dirname, 'add.html')
    let win = new BrowserWindow({ 
        frame: false, 
        transparent: true, 
        alwaysOnTop: true,    // Add this line
        width: 400, 
        height:300
    })
    win.on('close', function () { win = null })
    win.loadURL(modalPath)
    win.show()
})

ipc.on('targetPriceVal', function (event, arg) {
    targetPriceVal = Number(arg);
    targetPrice.innerHTML = '$'+targetPriceVal.toLocaleString('en')
})  
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
var targetPrice1= document.getElementById('targetPrice1')
var targetPrice2= document.getElementById('targetPrice2')
var targetPriceValBTC;
var targetPriceValETH;


function getBTC() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
    .then(res => {
                    const cryptos = res.data.BTC.USD
                    price1.innerHTML = '$'+cryptos.toLocaleString('en')

                    if (targetPrice1.innerHTML != '' && targetPriceValBTC < res.data.BTC.USD) {
                        notifier.notify({
                            message: 'BTC just beat your target price!\nHike of $'+((res.data.BTC.USD-targetPriceValBTC).toLocaleString('en')),
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

                    if (targetPrice2.innerHTML != '' && targetPriceValETH < res.data.ETH.USD) {
                        notifier.notify({
                            message: 'ETH just beat your target price!\nHike of $'+((res.data.ETH.USD-targetPriceValETH).toLocaleString('en')),
                            title: 'Crypto Alert',
                            sound: true,
                            icon: path.join(__dirname, '../assets/images/ethereum.png'),
                            wait:true
                        });
                    }
                }
        )
}

getETH();
setInterval ( getETH, 30000 );

notifyBtnBTC.addEventListener('click', function (event) {
    const modalPath = path.join('file://', __dirname, 'addBTC.html')
    let win = new BrowserWindow({ 
        frame: false, 
        transparent: true, 
        alwaysOnTop: true,    // Add this line
        width: 400, 
        height: 250
    })
    win.on('close', function () { win = null })
    win.loadURL(modalPath)
    win.show()
})

notifyBtnETH.addEventListener('click', function (event) {
    const modalPath = path.join('file://', __dirname, 'addETH.html')
    let win = new BrowserWindow({ 
        frame: false, 
        transparent: true, 
        alwaysOnTop: true,    // Add this line
        width: 400, 
        height:250
    })
    win.on('close', function () { win = null })
    win.loadURL(modalPath)
    win.show()
})

ipc.on('targetPriceValBTC', function (event, arg) {
    targetPriceValBTC = Number(arg);
    targetPrice1.innerHTML = '$'+targetPriceValBTC.toLocaleString('en')
})
ipc.on('targetPriceValETH', function (event, arg) {
    targetPriceValETH = Number(arg);
    targetPrice2.innerHTML = '$'+targetPriceValETH.toLocaleString('en')
})  
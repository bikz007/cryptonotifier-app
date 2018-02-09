const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const axios = require('axios');
const ipc = electron.ipcRenderer
const notifier = require("node-notifier")

//variable to get notification interval value from main.js file
var remote = require('electron').remote;

const notifyBtnBTC = document.getElementById('notifyBtnBTC')
const notifyBtnETH = document.getElementById('notifyBtnETH')

var price1 = document.getElementById('pricebtc')
var price2 = document.getElementById('priceeth')
var price3 = document.getElementById('priceltc')
var price4 = document.getElementById('priceneo')
var price5 = document.getElementById('pricexmr')
var price6 = document.getElementById('pricexrp')
var price7 = document.getElementById('pricezec')
var targetPrice1= document.getElementById('targetPrice1')
var targetPrice2= document.getElementById('targetPrice2')
var targetPrice3= document.getElementById('targetPrice3')
var targetPrice4= document.getElementById('targetPrice4')
var targetPrice5= document.getElementById('targetPrice5')
var targetPrice6= document.getElementById('targetPrice6')
var targetPrice7= document.getElementById('targetPrice7')

var targetPriceValBTC;
var targetPriceValETH;
var targetPriceValLTC;
var targetPriceValNEO;
var targetPriceValXMR;
var targetPriceValXRP;
var targetPriceValZEC;


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

//remote.getGlobal('sharedObj').notival #getting value for notification interval
getBTC();
setInterval ( getBTC,remote.getGlobal('sharedObj').notival);

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
setInterval ( getETH, remote.getGlobal('sharedObj').notival);

function getLTC() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=LTC&tsyms=USD')
    .then(res => {
                    const cryptos = res.data.LTC.USD
                    price3.innerHTML = '$'+cryptos.toLocaleString('en')

                    if (targetPrice3.innerHTML != '' && targetPriceValLTC < res.data.LTC.USD) {
                        notifier.notify({
                            message: 'LTC just beat your target price!\nHike of $'+((res.data.LTC.USD-targetPriceValLTC).toLocaleString('en')),
                            title: 'Crypto Alert',
                            sound: true,
                            icon: path.join(__dirname, '../assets/images/ethereum.png'),
                            wait:true
                        });
                    }
                }
        )
}

getLTC();
setInterval ( getLTC, remote.getGlobal('sharedObj').notival);

function getNEO() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=NEO&tsyms=USD')
    .then(res => {
                    const cryptos = res.data.NEO.USD
                    price4.innerHTML = '$'+cryptos.toLocaleString('en')

                    if (targetPrice4.innerHTML != '' && targetPriceValNEO < res.data.NEO.USD) {
                        notifier.notify({
                            message: 'NEO just beat your target price!\nHike of $'+((res.data.NEO.USD-targetPriceValNEO).toLocaleString('en')),
                            title: 'Crypto Alert',
                            sound: true,
                            icon: path.join(__dirname, '../assets/images/ethereum.png'),
                            wait:true
                        });
                    }
                }
        )
}

getNEO();
setInterval ( getNEO, remote.getGlobal('sharedObj').notival);

function getXMR() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=XMR&tsyms=USD')
    .then(res => {
                    const cryptos = res.data.XMR.USD
                    price5.innerHTML = '$'+cryptos.toLocaleString('en')

                    if (targetPrice5.innerHTML != '' && targetPriceValXMR < res.data.XMR.USD) {
                        notifier.notify({
                            message: 'XMR just beat your target price!\nHike of $'+((res.data.XMR.USD-targetPriceValXMR).toLocaleString('en')),
                            title: 'Crypto Alert',
                            sound: true,
                            icon: path.join(__dirname, '../assets/images/ethereum.png'),
                            wait:true
                        });
                    }
                }
        )
}

getXMR();
setInterval ( getXMR, remote.getGlobal('sharedObj').notival);

function getXRP() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=XRP&tsyms=USD')
    .then(res => {
                    const cryptos = res.data.XRP.USD
                    price6.innerHTML = '$'+cryptos.toLocaleString('en')

                    if (targetPrice6.innerHTML != '' && targetPriceValXRP < res.data.XRP.USD) {
                        notifier.notify({
                            message: 'XRP just beat your target price!\nHike of $'+((res.data.XRP.USD-targetPriceValXRP).toLocaleString('en')),
                            title: 'Crypto Alert',
                            sound: true,
                            icon: path.join(__dirname, '../assets/images/ethereum.png'),
                            wait:true
                        });
                    }
                }
        )
}

getXRP();
setInterval ( getXRP, remote.getGlobal('sharedObj').notival);

function getZEC() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ZEC&tsyms=USD')
    .then(res => {
                    const cryptos = res.data.ZEC.USD
                    price7.innerHTML = '$'+cryptos.toLocaleString('en')

                    if (targetPrice7.innerHTML != '' && targetPriceValZEC < res.data.ZEC.USD) {
                        notifier.notify({
                            message: 'ZEC just beat your target price!\nHike of $'+((res.data.ZEC.USD-targetPriceValZEC).toLocaleString('en')),
                            title: 'Crypto Alert',
                            sound: true,
                            icon: path.join(__dirname, '../assets/images/ethereum.png'),
                            wait:true
                        });
                    }
                }
        )
}

getZEC();
setInterval ( getZEC, remote.getGlobal('sharedObj').notival);

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
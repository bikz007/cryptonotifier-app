const electron = require('electron')
const path = require('path')
const remote = electron.remote
const closeBtnBTC = document.getElementById('closeBtnBTC')
const ipc = electron.ipcRenderer
const updateBtnBTC = document.getElementById('updateBtnBTC')

closeBtnBTC.addEventListener('click', function (event) {
    var window = remote.getCurrentWindow();
    window.close();
})

updateBtnBTC.addEventListener('click', function () {
  ipc.send('update-notify-value-BTC', document.getElementById('notifyValBTC').value)
  // Close this window
  var window = remote.getCurrentWindow();
  window.close();
})
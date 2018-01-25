const electron = require('electron')
const path = require('path')
const remote = electron.remote
const closeBtnETH = document.getElementById('closeBtnETH')
const ipc = electron.ipcRenderer
const updateBtnETH = document.getElementById('updateBtnETH')

closeBtnETH.addEventListener('click', function (event) {
  var window = remote.getCurrentWindow();
  window.close();
})

updateBtnETH.addEventListener('click', function () {
  ipc.send('update-notify-value-ETH', document.getElementById('notifyValETH').value)
  // Close this window
  var window = remote.getCurrentWindow();
  window.close();
})
const electron = require('electron')
const path = require('path')
const remote = electron.remote
const closeBtnXMR = document.getElementById('closeBtnXMR')
const ipc = electron.ipcRenderer
const updateBtnXMR = document.getElementById('updateBtnXMR')

closeBtnXMR.addEventListener('click', function (event) {
  var window = remote.getCurrentWindow();
  window.close();
})

updateBtnXMR.addEventListener('click', function () {
  ipc.send('update-notify-value-XMR', document.getElementById('notifyValXMR').value)
  // Close this window
  var window = remote.getCurrentWindow();
  window.close();
})
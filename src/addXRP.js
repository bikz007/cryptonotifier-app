const electron = require('electron')
const path = require('path')
const remote = electron.remote
const closeBtnXRP = document.getElementById('closeBtnXRP')
const ipc = electron.ipcRenderer
const updateBtnXRP = document.getElementById('updateBtnXRP')

closeBtnXRP.addEventListener('click', function (event) {
  var window = remote.getCurrentWindow();
  window.close();
})

updateBtnXRP.addEventListener('click', function () {
  ipc.send('update-notify-value-XRP', document.getElementById('notifyValXRP').value)
  // Close this window
  var window = remote.getCurrentWindow();
  window.close();
})
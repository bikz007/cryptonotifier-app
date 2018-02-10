const electron = require('electron')
const path = require('path')
const remote = electron.remote
const closeBtnZEC = document.getElementById('closeBtnZEC')
const ipc = electron.ipcRenderer
const updateBtnZEC = document.getElementById('updateBtnZEC')

closeBtnZEC.addEventListener('click', function (event) {
  var window = remote.getCurrentWindow();
  window.close();
})

updateBtnZEC.addEventListener('click', function () {
  ipc.send('update-notify-value-ZEC', document.getElementById('notifyValZEC').value)
  // Close this window
  var window = remote.getCurrentWindow();
  window.close();
})
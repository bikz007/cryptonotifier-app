const electron = require('electron')
const path = require('path')
const remote = electron.remote
const closeBtnLTC = document.getElementById('closeBtnLTC')
const ipc = electron.ipcRenderer
const updateBtnLTC = document.getElementById('updateBtnLTC')

closeBtnLTC.addEventListener('click', function (event) {
  var window = remote.getCurrentWindow();
  window.close();
})

updateBtnLTC.addEventListener('click', function () {
  ipc.send('update-notify-value-LTC', document.getElementById('notifyValLTC').value)
  // Close this window
  var window = remote.getCurrentWindow();
  window.close();
})
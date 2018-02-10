const electron = require('electron')
const path = require('path')
const remote = electron.remote
const closeBtnNEO = document.getElementById('closeBtnNEO')
const ipc = electron.ipcRenderer
const updateBtnNEO = document.getElementById('updateBtnNEO')

closeBtnNEO.addEventListener('click', function (event) {
  var window = remote.getCurrentWindow();
  window.close();
})

updateBtnNEO.addEventListener('click', function () {
  ipc.send('update-notify-value-NEO', document.getElementById('notifyValNEO').value)
  // Close this window
  var window = remote.getCurrentWindow();
  window.close();
})
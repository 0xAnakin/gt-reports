
const { ipcRenderer } = require("electron");

window.addEventListener('DOMContentLoaded', () => {

  const $menuButton = $('#menu-btn');
  const $minimizeButton = $('#minimize-btn');
  const $maxUnmaxButton = $('#max-unmax-btn');
  const $closeButton = $('#close-btn');

  $menuButton.on('click', function (evt) {
    console.log('menu click');
  });

  $minimizeButton.on('click', function (evt) {
    ipcRenderer.send('min-app');
  });

  $maxUnmaxButton.on('click', function (evt) {

    const $icon = $(this).find('i');

    if ($icon.hasClass('fa-window-maximize')) {

      ipcRenderer.send('max-app');

      $icon.removeClass('fa-window-maximize').addClass('fa-window-restore');

    } else {

      ipcRenderer.send('unmax-app');
      
      $icon.removeClass('fa-window-restore').addClass('fa-window-maximize');

    }

  });

  $closeButton.on('click', function (evt) {
    ipcRenderer.send('close-app');
  });

});
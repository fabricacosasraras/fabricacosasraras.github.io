// Botón de reproducción propio sobre los videos (esquinas rectas, ámbar).
document.querySelectorAll('.video').forEach(function (box) {
  var video = box.querySelector('video');
  var btn = box.querySelector('.video__play');
  if (!video || !btn) return;
  // Sin JS el video conserva sus controles nativos; con JS se muestran al reproducir.
  video.controls = false;
  btn.addEventListener('click', function () {
    video.controls = true;
    var p = video.play();
    if (p && p.catch) p.catch(function () {});
  });
  video.addEventListener('play', function () { box.classList.add('is-playing'); });
  video.addEventListener('ended', function () { box.classList.remove('is-playing'); });
});

// Al reproducir un video, pausar el otro.
document.addEventListener('play', function (e) {
  document.querySelectorAll('video').forEach(function (v) { if (v !== e.target) v.pause(); });
}, true);

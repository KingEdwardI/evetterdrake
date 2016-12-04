console.log('is DevTools open?', window.devtools.open);
console.log('and DevTools orientation?', window.devtools.orientation);

window.addEventListener('devtoolschange', function (e) {
  console.log('is Devtools open?', e.detail.open);
  console.log('and Devtools orientation?', e.detail.orientation);

})

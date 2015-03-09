function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/*
$(document).ready(function(){
  var i = getParameterByName('i');
  if(i == undefined){ i = 1; }
  var el = $('[data-markdown]')
  el.attr('data-markdown', 'gdi/class' + i + '.md')
});
*/

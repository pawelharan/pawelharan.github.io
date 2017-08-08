var inputs = document.getElementsByTagName('input');

function setChecked(i) {
  inputs[i].checked = true;
}

$(document).ready(function() {

  for (i = 0; i <= inputs.length; ++i) {
    setDelay(i);
  }

  function setDelay(i) {
    setTimeout(function(){
      setChecked(i);
    }, 70 * i);
  }
});

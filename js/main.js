var btnNames = [["Info", "./imgs/btns/arm.png"], ["Work", "./imgs/btns/leaf.png"], ["Contact", "./imgs/btns/kepri.png"]];
var current = 0;
var previous = 0;
window.onload = function() {
  var panels = document.getElementsByClassName('panel');
  var control = document.getElementById('control');
  for (var i = 0; i < panels.length; i++) {
    panels[i].arry_id = i;
    control.innerHTML += '<a href="#" class="btn"><div class="btn_c" style="background: url(\''+btnNames[i][1]+'\'); background-size: cover;">'+btnNames[i][0]+'</div></a>';
  }

  var btns = document.getElementsByClassName('btn_c');
  for (var i = 0; i < btns.length; i++) {
    btns[i].arry_id = i;
    btns[i].addEventListener('click', function(e){
      var i = e.target.arry_id;
      //console.log(btnNames[i][1]);
      console.log(i);
      previous = current;
      if (!panels[i].className.includes('current')) {
        panels[i].classList.add('animate-in');
        panels[i].classList.add('current');
        if(current < panels.length){
          panels[current].classList.add('animate-out');
          panels[current].classList.remove('current');
        }
        setTimeout(function () {
          for (var i = 0; i < panels.length; i++) {
            if (panels[i].className.includes('animate-in')) {
              panels[i].classList.remove('animate-in');
            }

            if (panels[i].className.includes('animate-out')) {
              panels[i].classList.remove('animate-out');
            }
          }

        }, 375);
        current = i;
      }
    }, false);
  }
}

function LinksSetColor(color){
  var aLists = document.querySelectorAll('a');
  var i=0;
  while(i < aLists.length){
    aLists[i].style.color = color;
    i = i+1;
  }
}
function BodySetColor(color){
  document.querySelector('body').style.color = color;
}
function h1SetBorder(setting){
  document.querySelector('h1').style.border = setting;
}
function mainTextSetBorder(setting){
  document.querySelector('#mainText').style.borderLeft = setting;
}
function nightDayHandler(self){
  var target=document.querySelector('body');
  if (self.value === 'night') {
      target.style.backgroundColor = 'black';
      BodySetColor('white');
      self.value = 'day';

      h1SetBorder('5px double whitesmoke');
      mainTextSetBorder('solid whitesmoke');
      LinksSetColor('powderblue');
  } else {
      target.style.backgroundColor = 'white';
      BodySetColor('black');
      self.value = 'night';

      h1SetBorder('5px double black');
      mainTextSetBorder('solid black');
      LinksSetColor('black');
  }
}

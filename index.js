function getFirstSelector(selector){
  
 var element = document.querySelector(selector);
 return element;
 //index getFirstSelector(selector) returns the first element that matches theselector:
  //element is not defined
}
function nestedTarget(){
  var element=document.getElementsByTagName('div')[0];
  return element;
  //index nestedTarget() pulls a .target out of #nested:
     //Error: Expected undefined to equal <div class="target">...</div>
}
function increaseRankBy(n){
   const lis = document.querySelectorAll('.ranked-list');
 
for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML= parseInt(lis[i])+n;
}
return lis;
}
function deepestChild(){
  let element=document.getElementById('#grand-node').querySelectorAll('div');
  return element;
}
function getFirstSelector(selector){
  
 var element = document.querySelector(selector);
 return element;
 //index getFirstSelector(selector) returns the first element that matches theselector:
  //element is not defined
}
function nestedTarget(){
 // var element=document.getElementsByTagName('div')[0];
  
  var element=document.querySelector('#nested .target')
  return element;
}
function increaseRankBy(n){
   const lis = document.querySelectorAll('.ranked-list');
 
for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML= parseInt(lis[i])+n;
}
return lis;
}
function deepestChild(){
  let element=document.querySelector('#grand-node div div div div');
  return element;
}
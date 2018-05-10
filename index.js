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
   var element = document.querySelectorAll('.ranked-list').innerHTML;
   for(var i=0;i<element.length;i++){
     element[i]=parseInt(element[i])+n;
   }
   return element;
}
function deepestChild(){
  
}
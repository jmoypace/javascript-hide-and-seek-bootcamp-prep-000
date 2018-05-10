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
  // var element = document.getElementsByClassName('.ranked-list').innerHTML=parseInt(element)+n;
  // return element;
   const rankedLists = document.querySelectorAll('.ranked-list')
  var children;
  for (let i = 0; i < rankedLists.length;  i++) {
    children = parseInt(rankedLists[i])+n;
}
return children;
}
function deepestChild(){
  
}
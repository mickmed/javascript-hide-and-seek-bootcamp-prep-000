function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
 
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild(){
  const lis = document.getElementById('app').querySelector('div#grand-node')
 
  for (let i = 0; i < lis.length; i++) {
    if(i === lis.length){
      return lis[i].innerHTML 
    }
  }
  
}
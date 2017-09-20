document.addEventListener("DOMContentLoaded", function(event) { 
  
  /** DATA: a list of cats to render meowww **/
  var catData = [
  {
    id: 'carson',
    name: 'Carson',
    imgUrl: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
    clicks: 0 
  },              
  {
    id: 'shaun',
    name: 'Shaun',
    imgUrl: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
    clicks: 0 
  }, {
    id: 'Jean',
    name: 'Jean',
    imgUrl: 'https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454',
    clicks: 0 
  }, {
    id: 'Tracy',
    name: 'Tracy',
    imgUrl: 'https://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg',
    clicks: 0 
  },  
    {
    id: 'Carl',
    name: 'Carl',
    imgUrl: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
    clicks: 0 
  }, 
    {
    id: 'Michelle',
    name: 'Michelle',
    imgUrl: 'http://www.petmd.com/sites/default/files/4-meow-conversational-cat.gif',
    clicks: 0 
  }, 
  
  ];
  
  // template to render cats
  function CatObj(data) {
    return (
    `<div class="catWrapper"> 
      <div class="imageWrapper">
        <img class="catImage" 
             src=${data.imgUrl} 
             alt=${data.name}>
      </div>  
      <h2>${data.name}</h2>
      <hr> 
      <p>Clicks: 
        <span id=${data.id} class="counter">${data.clicks}</span>
      </p>
    </div>`
    );
  }
  
  // click to increase # of counts
  function clickCats(cat) {
    cat.clicks += 1;
    document.getElementById(cat.id).innerHTML = cat.clicks;
  }
  
  // iterate a list of cats with Array.map()
  var catList = catData.map((cat) => CatObj(cat));
  
  // render cats to DOM
  document.getElementById('main').innerHTML = catList.join("");
  
  var cats = document.getElementsByClassName('catImage');
  
  for(var i = 0; i < cats.length; i++){
    var index = i;
    cats[i].addEventListener('click', (function(num){
      
      return function(){
        clickCats(catData[num]);
      };
      
    })(index));
  }
  
});
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
  
  
  var activeCatDiv = document.getElementById('activeCat');
  activeCatDiv.innerHTML = CatObj(
    {
    id: 'defalt',
    name: 'My Cat Friend',
    imgUrl: 'https://maxcdn.icons8.com/Share/icon/Users//circled_user_female1600.png',
    clicks: 0 
  });
  
  
  // UI template to render cats
  function CatObj(data) {
    return (
    `<div class="catWrapper"> 
      <div class="imageWrapper">
        <img id='${data.id}Image' 
             class="catImage" 
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
  
  // Method: click to increase # of counts
  function clickCats(cat) {
    cat.clicks += 1;
    document.getElementById(cat.id).innerHTML = cat.clicks;
  }
  
  
  // render a list of cat friends
  var catNames = catData.map((cat) => {
    return `<li class="catFriend">${cat.name}</li>`;
  });  
  document.getElementById('catList').innerHTML = catNames.join("");

  // render the active Cat
  var catFriends = document.getElementsByClassName('catFriend');
  for(var i = 0; i < catFriends.length; i++){
    var activeIdx = i;
    catFriends[i].addEventListener('click', (function(index){
      return function(){
        var activeCat = CatObj(catData[index]);
        activeCatDiv.innerHTML = activeCat;
        activeCatDiv.className = index;
      }
    })(activeIdx));
  }
  
  // onclick active cats to increase # of clicks
  activeCatDiv.addEventListener('click', function(){
    // clickCats(catData[0]);   
    var catIndex = this.className;
    clickCats(catData[catIndex]);
  });
  
  
});
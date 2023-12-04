const loadAllData=()=>{
    fetch('https://openapi.programming-hero.com/api/videos/category/1000')
    .then((res)=> res.json())
    .then((data)=>displayData(data.data))
}
const loadMusicData=()=>{
    fetch('https://openapi.programming-hero.com/api/videos/category/1001')
    .then((res)=> res.json())
    .then((data)=>displayData(data.data))
}
const loadComedyData=()=>{
    fetch('https://openapi.programming-hero.com/api/videos/category/1003')
    .then((res)=> res.json())
    .then((data)=>displayData(data.data))
}
const loadDrawingData=()=>{
    fetch('https://openapi.programming-hero.com/api/videos/category/1004')
    .then((res)=> res.json())
    .then((data)=>displayData(data.data))
    
}


function displayData(datas){

    const cardContainer = document.getElementById('card-container');

    if(datas.length == 0){
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML=`

        <h4>Sorry, There is no content</h4>
        `
        cardContainer.appendChild(cardDiv);
    }
    datas.forEach(data =>{
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
        <div class="card p-4">
        <img src="${data.thumbnail}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">
          <span class="img-box">
          <img class="img"   src="${data.authors[0].profile_picture}" alt="">
         </span>
           ${data.title}</h5>
           <div class="ms-5"> 
           <p class="card-text">   ${data.authors[0].profile_name} <br> ${data.others.views}</p>
         </div>
          
        </div>
      </div>
        
        `
        cardContainer.appendChild(cardDiv);

    })
}


 

document.getElementById('all-video-btn').addEventListener('click', function(){
    loadAllData();
    
})
document.getElementById('btn-nusic').addEventListener('click', function(){
    loadMusicData();
    
})
document.getElementById('btn-comedy').addEventListener('click', function(){
    loadComedyData();
})
document.getElementById('btn-drawing').addEventListener('click', function(){
    loadDrawingData();  
})




 
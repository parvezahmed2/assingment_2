const loadAllDatas=()=>{
    fetch('https://openapi.programming-hero.com/api/videos/category/1000')
    .then((res)=> res.json())
    .then((data)=>displayData(data.data))
     
     
}

const loadAllData=()=>{
    fetch('https://openapi.programming-hero.com/api/videos/category/1000')
    .then((res)=> res.json())
    // .then((data)=>displayData(data.data))
    .then((data)=>console.log(data.data))

}
const loadMusicData=()=>{
    fetch('https://openapi.programming-hero.com/api/videos/category/1001')
    .then((res)=> res.json())
    .then((data)=>displayData(data.data))
    .then((data)=>console.log(data.data))

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
    cardContainer.innerHTML = '';  

    if(datas.length == 0){
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML=`
        <h4>Sorry, There is no content</h4>
        `;
        cardContainer.appendChild(cardDiv);
    } else {
        datas.forEach(data =>{
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('col');
            cardDiv.innerHTML = `
            <div class="card p-4">
                <img src="${data.thumbnail}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">
                        <span class="img-box">
                            <img class="img" src="${data.authors[0].profile_picture}" alt="">
                        </span>
                        ${data.title}
                    </h5>
                    <div class="ms-5"> 
                        <p class="card-text">${data.authors[0].profile_name} <br> ${data.others.views}</p>
                    </div>
                </div>
            </div>
            `;
            cardContainer.appendChild(cardDiv);
        });
    }
}
 


function loadAllDataView(sortByViews = false) {
    fetch('https://openapi.programming-hero.com/api/videos/category/1000')
        .then((res) => res.json())
        .then((data) => {
            if (sortByViews) {
                data.data.sort((a, b) => {
                    const viewsA = convertViewsToNumber(a.others.views);
                    const viewsB = convertViewsToNumber(b.others.views);
                    return viewsB - viewsA;  
                });
            }
            displayData(data.data);
        });
}


function convertViewsToNumber(viewsString) {
    const multiplier = { 'K': 1000, 'M': 1000000, 'B': 1000000000 };
    const multiplierChar = viewsString.slice(-1);
    if (multiplierChar in multiplier) {
        return parseFloat(viewsString) * multiplier[multiplierChar];
    } else {
        return parseFloat(viewsString);
    }
}

document.querySelector('.view-btn').addEventListener('click', function(){
    loadAllDataView(true);  
});



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

loadAllDatas();


 
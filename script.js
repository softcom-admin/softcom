
const announcements = document.getElementById("ann-box")
const comic_card = document.getElementById("comic")

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
          "#loader").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
};

async function getData() {
    const url = "https://softcom-restapi.herokuapp.com/announcements"
    // const url = "http://localhost:5000/announcements"
    const data = await fetch(url)
    let response = await data.json()
    return response
}
getData().then((res)=>{
    for(var i = 1;i<res.length;i++){
        pre = "0"
        if(i>9){
            pre = ""
        }
        gap="   "
        opp = res.length-i
        let announcement = document.createElement("div")
        announcement.classList.add("ann-card")
        announcement.innerHTML = `<div class="ann-heading">
        <span id="number">${pre+i+gap}</span>
        <b>${res[opp][0]}</b>
        </div>
        ${res[opp][1]}
        <p id="evt-location">Date : ${res[opp][2]} Venue : ${res[opp][3]}</p>`
        
        announcements.appendChild(announcement)

    }
})

async function getComic(){
    // const url = "http://localhost:5000/comic"
    const url = "https://softcom-restapi.herokuapp.com/comic"
    const response = await fetch(url)
    const img_url = await response.json()

    return img_url
}

getComic().then((res)=>{
        let comic = document.createElement("div")
        comic.classList.add("comic")
        comic.innerHTML =  `<img src=${res} alt="sorry could not find it ;C" id="comic_card">`

        
        comic_card.appendChild(comic)})

    

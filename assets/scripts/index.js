// Firebase
// db.collection('users').get().then((snapshot)=>{
//     console.log(snapshot.docs);
//     snapshot.docs.forEach(doc =>{
//         console.log(doc.data());
//     })
// });












var marker = document.querySelector(".home-marker");
var item = document.querySelectorAll("nav ul li a");
function indicator(e) {
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
}
indicator(item[active_tab]);
item.forEach(elem => {
    elem.addEventListener("mouseenter", ()=>{
        indicator(elem);
    });
    elem.addEventListener("mouseout", ()=>{
        indicator(item[active_tab]);
    });
});
document.addEventListener('DOMContentLoaded', ()=>{
    let nav = document.querySelector('nav');
    let navImg = document.querySelector('nav img');
    nav.style.height = navImg.height+'px';
})
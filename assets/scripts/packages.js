// window.location.search





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
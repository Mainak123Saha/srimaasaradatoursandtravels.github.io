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






const date_range = document.querySelector('.packages-div .packageHead .dateRange input');
const date_range_text = document.querySelector('.packages-div .packageHead .dateRange span');
date_range.addEventListener('input', ()=>{
    switch (date_range.value) {
        case "0":
            date_range_text.innerHTML = "Random";
            break;
        case "1":
            date_range_text.innerHTML = "3 Nights 4 Days";
            break;
        case "2":
            date_range_text.innerHTML = "4 Nights 5 Days";
            break;
        case "3":
            date_range_text.innerHTML = "5 Nights 6 Days";
            break;
        case "4":
            date_range_text.innerHTML = "6 Nights 7 Days";
            break;
        case "5":
            date_range_text.innerHTML = "7 Nights 8 Days";
            break;
        case "6":
            date_range_text.innerHTML = "8 Nights 9 Days";
            break;
        case "7":
            date_range_text.innerHTML = "9 Nights 10 Days";
            break;
    }
})


function openInNewTab(url) {
    window.open(url, '_blank').focus();
}
function changPageTo(url) {
    window.location = url;
}
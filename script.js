document.getElementsByTagName("button")[0].addEventListener('mouseover', changecolor);
// document.getElementsByTagName("button")[1].addEventListener('mouseover', changecolor);
// document.getElementsByTagName("button")[2].addEventListener('mouseover', changecolor);
// document.getElementsByTagName("button")[3].addEventListener('mouseover', changecolor);
// document.getElementsByTagName("button")[4].addEventListener('mouseover', changecolor);

document.getElementsByTagName("button")[0].addEventListener('mouseout', resetcolor);
// document.getElementsByTagName("button")[1].addEventListener('mouseout', resetcolor);
// document.getElementsByTagName("button")[2].addEventListener('mouseout', resetcolor);
// document.getElementsByTagName("button")[3].addEventListener('mouseout', resetcolor);
// document.getElementsByTagName("button")[4].addEventListener('mouseout', resetcolor);


function changecolor(){
    document.getElementsByTagName("button")[0].style.background = "#545479"
    document.getElementsByTagName("button")[0].style.border = "#545479"
}
function resetcolor(){
    document.getElementsByTagName("button")[0].style.background = "#5C9D8B"
}
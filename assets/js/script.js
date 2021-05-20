var introTextEl = document.getElementsByClassName('intro-text');
var hiEl = document.getElementById('hi');
var portolioBeginEl = document.getElementById('portfolio-begin');
console.log(introTextEl);


function changeFontColor() {
    for (let index = 0; index < introTextEl.length; index++) {
        if (introTextEl[index].style.color = 'whitesmoke') {
            console.log(introTextEl[index].style.color, "is the color before changing")
            introTextEl[index].style.color = 'grey'
        }
        // To Do - fix the hover if grey
        else {
            introTextEl[index].style.color = 'whitesmoke';
            console.log('Changed to whitesmoke')
         }
         
    }
}

function scrollToPortfolio() {
    portolioBeginEl.scrollIntoView();
}

hiEl.addEventListener('mouseover', changeFontColor)

hiEl.addEventListener('mouseover', scrollToPortfolio)
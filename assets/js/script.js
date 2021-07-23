var introTextEl = document.getElementsByClassName('intro-text');
var hiEl = document.getElementById('hi');
var portolioBeginEl = document.getElementById('portfolio-begin');
var projectEls = document.getElementsByClassName('project');
var githubLinkEl = document.getElementById('github-link');
var githubDescEl = document.getElementById('github-desc');
var bgModalEl = document.getElementById('bg-modal');
var modalContentEl = document.getElementById('modal-content');
console.log(projectEls);


function changeFontColor() {
    for (let index = 0; index < introTextEl.length; index++) {
        if (introTextEl[index].style.color = 'whitesmoke') {
            console.log(introTextEl[index].style.color, "is the color before changing");
            introTextEl[index].style.color = 'grey';
        }
        // To Do - fix the hover if grey
        else {
            introTextEl[index].style.color = 'whitesmoke';
            console.log('Changed to whitesmoke');
         };
         
    };
};


// console.log(document.getElementById('modal-content').style);

function addpreview() {
    bgModalEl.style.display = "flex";
    if (this.id === "health-tracker") {
        document.getElementById('modal-content').style.backgroundImage = "url('./assets/images/health-tracker.png')";
        document.getElementById('site-link').innerHTML = "Click to go to deployed site";
        document.getElementById('site-link').href = "https://project2-health-tracker.herokuapp.com/";
    } else
    if (this.id === "art-gallery") {
        document.getElementById('modal-content').style.backgroundImage = "url('./assets/images/Art-Gallery-SS.jpeg')";
        document.getElementById('site-link').innerHTML = "Click to go to deployed site";
        document.getElementById('site-link').href = "https://pmukhi12.github.io/Art-Gallery-Search/";
    } else
    if (this.id === "readMe-generator") {
        document.getElementById('modal-content').style.backgroundImage = "url('./assets/images/read-me-generator.png')";
        document.getElementById('site-link').innerHTML = "Click to go to gitHub repo";
        document.getElementById('site-link').href = "https://github.com/pmukhi12/Read-Me-Generator";
    } else 
    if(this.id === "note-taker") {
        document.getElementById('modal-content').style.backgroundImage = "url('./assets/images/note-taker.png')";
        document.getElementById('site-link').innerHTML = "Click to go to deployed site";
        document.getElementById('site-link').href = "https://guarded-oasis-08385.herokuapp.com/";
    }

};

function scrollToPortfolio() {
    portolioBeginEl.scrollIntoView();
}

function clickOutOfDesc() {
    bgModalEl.style.display = "none";
    console.log(bgModalEl.style.display);
};

hiEl.addEventListener('mouseover', changeFontColor);

hiEl.addEventListener('mouseover', scrollToPortfolio);

for (let i = 0; i < projectEls.length; i++) {
    projectEls[i].addEventListener('click',addpreview);
};



document.getElementById('x-button').addEventListener('click', clickOutOfDesc);

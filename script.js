function myFunction() {
    var x = document.getElementById("toggleMenu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function menuFunction() {
    var y = document.getElementById("close");
    console.log(y.innerHTML);
    if (y.innerHTML == "Menu") {
        console.log(y.innerHTML);
        y.innerHTML = "X";
        console.log(y.innerHTML);

        y.style.fontSize = '30px';
        y.style.padding = "0px 15px";
        y.style.margin = "40px 60px 40px 0px";
        console.log(y.innerHTML);
        // y.style.transition = "opacity ease-in-out";
        // y.style.transitionDuration = ".5s";
    } else {
        y.innerHTML = "Menu";
        y.style.fontSize = '18px';
        y.style.padding = "0px 40px";
        y.style.margin = "40px 20px 40px 0px";
        console.log(y.innerHTML);
    }

}
function scrollDown() {
    document.querySelector('.second-section').scrollIntoView({
        behavior: 'smooth'
    });
}
//////////////////
//
////////////////
function aboutUsFunction() {

    var hidden = document.getElementById("hiddenAbout")

    if (hidden.style.display === "none") {
        hidden.style.display = "block";
    } else {
        hidden.style.display = "none";
    }
}
function strategyFunction() {
    var hidden = document.getElementById("hiddenStrategy")
    if (hidden.style.display === "none") {
        hidden.style.display = "block";
    } else {
        hidden.style.display = "none";
    }
}
function clientsFunction() {
    var hidden = document.getElementById("hiddenClients")
    if (hidden.style.display === "none") {
        hidden.style.display = "block";
    } else {
        hidden.style.display = "none";
    }
}
function contactFunction() {
    var hidden = document.getElementById("hiddenContact")
    if (hidden.style.display === "none") {
        hidden.style.display = "block";
    } else {
        hidden.style.display = "none";
    }
}
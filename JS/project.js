var picture1 = '/assets/pics/amanyT/b-hal.jpg'
var picture2 = '/assets/pics/amanyT/bb-court.jpg'

const cardContent = ['sample text 1','sample text 2','sample text 3','sample text 4',]
const cardTitle = ['sample title 1','sample title 2','sample title 3','sample title 4',]
const pictures = [picture1, picture2];

function showPopup(cardID) {
    document.getElementById("popup").style.display = "block";
    var popupTitle = document.querySelector('#popup .popup-content .popup-info-content .popUppicture h1');
    var popupContent = document.querySelector('#popup .popup-content .popup-info-content .popUppicture p');
    var popupPic = document.querySelector('#popup .popup-content .popup-info-content .popUppicture img');
    
    popupTitle.innerHTML = cardTitle[cardID-1];
    popupContent.innerHTML = cardContent[cardID-1];
    popupPic.src = pictures[cardID-1];
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}


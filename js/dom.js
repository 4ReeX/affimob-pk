const offersList = document.querySelector("#offersList");
const offerItem = document.getElementsByClassName(".offer-item");

function reportWindowSize() {
    if (offersList.width < 700) {
        offerItem.width === 100 + "%";
        console.log(offerItem.width);
    }
}

window.onresize = reportWindowSize;

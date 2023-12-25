var statusview = document.getElementById("statusview");

function viewstatusfun() {
    statusview.style.display = 'block';
}

function closestatusfun() {
    statusview.style.display = 'none';
}

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        // Hide the loader when the page is fully loaded
        document.querySelector('.loader-wrapper').style.display = 'none';
    }
};

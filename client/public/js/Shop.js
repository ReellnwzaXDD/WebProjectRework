window.onload = function(){
    let side_filter = document.getElementById("filterBT");
    let close_side_filter = document.getElementById("closeFilter");

    side_filter.onclick = openFilter;
    close_side_filter.onclick = closeFilter;
}
function openFilter() {
    sideID = document.getElementById("side")
    sideID.style.display = "block";
}
function closeFilter() {
    sideID = document.getElementById("side")
    sideID.style.display = "none";
}

function validatePrice() {
    // Retrieve the values of max and min price inputs
    var maxPrice = parseFloat(document.getElementById('max-price').value);
    var minPrice = parseFloat(document.getElementById('min-price').value);

    // Check if max price is greater than min price
    if (maxPrice <= minPrice) {
        // Display an error message (you can customize this part)
        alert("Max price must be greater than min price.");
        return false; // Prevent form submission
    }

    // If validation passes, allow the form submission
    return true;
}
var count = 0;

document.querySelectorAll(".count").innerHTML = count;


var addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(function(button) {
    button.addEventListener("click", function () {
        count++;
        console.log('count', count);
        document.querySelectorAll(".count").forEach(function (increment) {
                increment.innerHTML = count
        })
    });
});


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    // var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    const removeCartItemButtons = document.querySelectorAll('btn-danger')
    console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    // alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
        value = isNaN(value) ? 0 : value;
        value = 0;
        document.getElementById('number').value = value;
    }
    updateCartTotal()
}
// var counter = 0;
// function removeCartItem(event) {
//     var buttonClicked = event.target
//     buttonClicked.parentElement.parentElement.remove()

//     updateCartTotal()
// }
var value = parseInt(document.getElementById('number').value, 20);
document.getElementById('number').value = value;

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
        // value = isNaN(value) ? 0 : value;
        // value = input.value;
        // document.getElementById('number').value = value;
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    // var quantity = shopItem.getElementsByClassName('badge')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
    // console.log('quantityChanged');
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    // var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    // for (var i = 0; i < cartItemNames.length; i++) {
    //     if (cartItemNames[i].innerText == title) {

    //         return
    //     }
    // }
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
        </div>
        <span class="cart-item-title cart-column">${title}</span>
        
        <div class="cart-quantity cart-column" >
            <input class="cart-quantity-input" type="number" value="1">
          
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
    // document.getElementsByClassName('badge')[0].innerHTML = parseInt(badge);
}




// const removeCartItemButtons = document.querySelectorAll('btn-danger')
// console.log(removeCartItemButtons)
// for (var i = 0; i < removeCartItemButtons; i++) {
//     var button = removeCartItemButtons[i]
//     button.addEventListener('click', function () {
//         console.log('first')
//     })



// }

// var tab1 = document.getElementById("ui-id-1");
// var tab2 = document.getElementById("ui-id-2");
// var tab3 = document.getElementById("ui-id-3");

// tab1.addEventListener("click", hideIt);
// tab2.addEventListener("click", hideIt);
// tab3.addEventListener("click", showIt);

// function showIt(){document.getElementById("serviceWeProvide").style.display = "block";}
// function hideIt(){document.getElementById("serviceWeProvide").style.display = "none";}
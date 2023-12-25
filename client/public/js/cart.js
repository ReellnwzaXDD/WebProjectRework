//small product cart
const smallcart = (data) => {
    return (
        <div class="numberlist">
            <img src="${data.img}" class="numberlist-img">
            <div class="numberlist-text">
                <p class="numberlist-name">${data.name}</p>
                <p class="numberlist-des">${data.shortDest}</p>
            </div>
            <div class="quantity">
                <button class="quantity-btn decrease">-</button>
                <h3 class="item-quantity">${data.item}</h3>
                <button class="quantity-btn increase">+</button>
            </div>
            <h2 class="numberlist-price" data-price="${data.price}">${data.price * data.item}</h2>
            <button class="numberlist-del-btn"><ion-icon name="trash-sharp"></ion-icon></button>
        </div>
    );
}

let total = 0;
const setproduct = (name) => {
    const element = document.querySelector('.${name}');
    let data = JSON.parse(localStorage.getItem(name));
    if(data == null){
        element.innerHTML = ' <ion-icon name="cart-sharp"></ion-icon> <p>STATUS: EMPTY</p>';
    }
    else{
        for(let i = 0; i < data.length; i++){
            element.innerHTML += smallcart(data[i]);
            if(name == 'cart'){
                total += Number(data[i].price * data[i].item);
            }
            updatebill();
        }
    }

    setupEvents(name);
    }
    const updatebill = () => {

    }
    const setupEvents = (name) =>{
        //setup counter event
        const counterMinus = document.querySelectorAll('.${name} .decrease');
        const counterplus = document.querySelecttorAll('.${name} .increase');
        const counts = document.querySelectorAll('.${name} .item-quantity');
        const price = document.querySelectorAll('.${name} .numberlist-price');
        const deleteBtn = document.querySelectorAll('.${name} .numberlist-del-btn');

        let product = JSON.parse(localStorage.getitem(name));

        counts.forEach((item, i) => {
            let cost = Number(price[i].getAttribute('data-price'));

            counterMinus[i].addEventListener('click', () => {
                if(item.innerHTML > 1){
                    item.innerHTML--;
                    total -= cost;
                    price[i].innerHTML = '$$(item.innerHTML * cost}';
                    if(name == 'cart'){updatebill();}
                    product[i].item - item.innerHTML;
                    localStorage.setItem(name, JSON.stringify(product));
                }
            })
            counterplus[i].addEventListener('click', () => {
                if(item.innerHTML <9){
                    item.innerHTML++;
                    total += cost;
                    price[i].innerHTML = '$$(item.innerHTML * cost}';
                    updatebill();
                    product[i].item - item.innerHTML;
                    localStorage.setItem(name, JSON.stringify(product));
                }
            
        })
    })

    deleteBtn.forEach((item, i) =>{
        item.addEventListener('click', () =>{
            product = product.filter((data,index) => index != i);
            localStorage.setItem(name, JSON.stringify(product));
            location.reload();
        })
})
}



setproduct('cart');
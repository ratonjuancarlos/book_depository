/*
.order > .order-header > h2(Order number BDU-)
.order > .order-header > div.order-status
.order > .order-header > div.order-date > strong

.order > .order-items-wrap > .order-item > .item-info-wrap > .item-img > a > .img-responsive
.order > .order-items-wrap > .order-item > .item-info-wrap > .item-info > h2 > a(texto)
.order > .order-items-wrap > .order-item > .item-info-wrap > .item-info > p > .author
.order > .order-items-wrap > .order-item > .item-info-wrap > .item-info > p ("Quantity: ")
.order > .order-items-wrap > .order-item > .item-info-wrap > .item-info > .price-wrap > .price(ARS$)
.order > .order-items-wrap > .order-item > .item-checkout-info > p > span(texto)
.order > .order-totals-wrap > .order-total > .total > dd(ARS$)
*/
var orders = [];

[...document.getElementsByClassName("order")].map(o=> {
	let orderNumber = o.querySelector(".order-header h2").innerText.replace('Order number ', '');
	let orderDate = o.querySelector(".order-header .order-date strong").innerText;
	let orderStatus = o.querySelector(".order-header .order-status").className.replace('order-status ','');
    const items = [];
    const itemArray = [...o.querySelector(".order-items-wrap")];
  itemArray.map(i=> {
    const imgSrc = i.querySelector(".item-img a .img-responsive").innerText;
    items.push(item:{
               imgSrc ,
               })
    
  })
	
	orders.push({order:{
		orderNumber,
		orderDate,
		orderStatus,
        items,
	}})
	o.setAttribute("id", orderNumber)
})

console.log(orders)


// [...document.getElementsByClassName("order-status cancelled")].map(o=>o.closest(".order").remove())
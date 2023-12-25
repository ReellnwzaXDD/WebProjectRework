/*อันนี้ถ้าใช้ได้ลบ cart.jsไปเลย*/
// document.addEventListener("DOMContentLoaded", () => {
//     const decreaseButtons = document.querySelectorAll(".quantity-btn.decrease");
//     const increaseButtons = document.querySelectorAll(".quantity-btn.increase");
//     const itemQuantityElements = document.querySelectorAll(".item-quantity");
//     const numberlistPriceElements = document.querySelectorAll(".numberlist-price");
//     const deleteButtons = document.querySelectorAll(".numberlist-del-btn");
//     const subtotalPriceElement = document.querySelector(".subtotalprice");
    
//     let total = 500; // กำหนดราคาเริ่มต้น
    
//     // ฟังก์ชันสำหรับการอัปเดตราคาย่อย
//     const updateSubtotal = () => {
//         let subtotal = 0;
//         numberlistPriceElements.forEach((priceElement) => {
//             subtotal += parseFloat(priceElement.textContent.replace(" ฿", ""));
//         });
//         subtotalPriceElement.textContent = `${subtotal.toFixed(2)} ฿`;
//     };
    
//     // ฟังก์ชันสำหรับการลดจำนวนสินค้า
//     const decreaseQuantity = (index) => {
//         const itemQuantityElement = itemQuantityElements[index];
//         const priceElement = numberlistPriceElements[index];
//         let quantity = parseInt(itemQuantityElement.textContent);
//         if (quantity > 1) {
//             quantity--;
//             itemQuantityElement.textContent = quantity;
//             const pricePerItem = parseFloat(priceElement.getAttribute("data-price"));
//             const newPrice = (quantity * pricePerItem).toFixed(2);
//             priceElement.textContent = `${newPrice} ฿`;
//             updateSubtotal();
//         }
//     };
    
//     // ฟังก์ชันสำหรับการเพิ่มจำนวนสินค้า
//     const increaseQuantity = (index) => {
//         const itemQuantityElement = itemQuantityElements[index];
//         const priceElement = numberlistPriceElements[index];
//         let quantity = parseInt(itemQuantityElement.textContent);
//         quantity++;
//         itemQuantityElement.textContent = quantity;
//         const pricePerItem = parseFloat(priceElement.getAttribute("data-price"));
//         const newPrice = (quantity * pricePerItem).toFixed(2);
//         priceElement.textContent = `${newPrice} ฿`;
//         updateSubtotal();
//     };
    
//     // รับคลิกที่ปุ่มลดจำนวนสินค้า
//     decreaseButtons.forEach((button, index) => {
//         button.addEventListener("click", () => {
//             decreaseQuantity(index);
//         });
//     });
    
//     // รับคลิกที่ปุ่มเพิ่มจำนวนสินค้า
//     increaseButtons.forEach((button, index) => {
//         button.addEventListener("click", () => {
//             increaseQuantity(index);
//         });
//     });
    
//     // รับคลิกที่ปุ่มลบสินค้า
//     deleteButtons.forEach((button, index) => {
//         button.addEventListener("click", () => {
//             const productElement = button.closest(".numberlist");
//             productElement.remove();
//             updateSubtotal();
//         });
//     });
// });

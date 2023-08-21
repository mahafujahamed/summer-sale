// function handleClick(data){
//     const itemsContainer = document.getElementById('selected-items')
//     const itemsName = data.parentNode.childNodes[1].innerText;
//     const li= document.createElement('li');
//     li.innerText = itemsName;
//     itemsContainer.appendChild(li);

    
// }
// card:1

document.getElementById("first-card").addEventListener("click", function(){
    const itemContainer = document.getElementById("selected-items");
    const firstCard = document.getElementById("card-one").innerText;
    const ol = document.createElement("ol");
    ol.innerText = firstCard;
    itemContainer.append(ol);
// summ
    const inAmount = document.getElementById('ammount-in').innerText;
    const initialAmount = parseFloat(inAmount);

    const totalOness = document.getElementById("total");
    const totalOne = totalOness.innerText;

    const totalTwo = parseFloat(totalOne);

    const currentAmount = totalTwo + initialAmount;
    totalOness.innerText = currentAmount;
// 
const finalAmount = document.getElementById('main-total');

finalAmount.innerText = currentAmount;

// discount
// document.getElementById('Discount-btn').addEventListener('click', function(event) {
//     const discountCuponValue = document.getElementById('Discount-field').value;
//     if (discountCuponValue === 'SELL200') {
//         document.getElementById('Discount-btn').disabled = false; // Enable the button
//     } else {
//         document.getElementById('Discount-btn').disabled = true; // Disable the button
//     }
// });


 
// depositefield.value ='';
// })
//     */ 

   
    
})
// card:2
document.getElementById("second-card").addEventListener("click", function(){
    const itemContainer = document.getElementById("selected-items");
    const firstCard = document.getElementById("card-two").innerText;
    const ol = document.createElement("ol");
    ol.innerText = firstCard;
    itemContainer.append(ol);
    const inAmount = document.getElementById('ammount-in').innerText;
    const initialAmount = parseFloat(inAmount);

    const totalOness = document.getElementById("total");
    const totalOne = totalOness.innerText;

    const totalTwo = parseFloat(totalOne);

    const currentAmount = totalTwo + initialAmount;
    totalOness.innerText = currentAmount;
    const finalAmount = document.getElementById('main-total');

finalAmount.innerText = currentAmount;

})
// card:3
document.getElementById("third-card").addEventListener("click", function(){
    const itemContainer = document.getElementById("selected-items");
    const firstCard = document.getElementById("card-three").innerText;
    const ol = document.createElement("ol");
    ol.innerText = firstCard;
    itemContainer.append(ol);
    const inAmount = document.getElementById('ammount-in').innerText;
    const initialAmount = parseFloat(inAmount);

    const totalOness = document.getElementById("total");
    const totalOne = totalOness.innerText;

    const totalTwo = parseFloat(totalOne);

    const currentAmount = totalTwo + initialAmount;
    totalOness.innerText = currentAmount;
    const finalAmount = document.getElementById('main-total');

finalAmount.innerText = currentAmount;
})
// card:4
document.getElementById("fourth-card").addEventListener("click", function(){
    const itemContainer = document.getElementById("selected-items");
    const firstCard = document.getElementById("card-four").innerText;
    const ol = document.createElement("ol");
    ol.innerText = firstCard;
    itemContainer.append(ol);
    const inAmount = document.getElementById('ammount-in').innerText;
    const initialAmount = parseFloat(inAmount);

    const totalOness = document.getElementById("total");
    const totalOne = totalOness.innerText;

    const totalTwo = parseFloat(totalOne);

    const currentAmount = totalTwo + initialAmount;
    totalOness.innerText = currentAmount;
    const finalAmount = document.getElementById('main-total');

finalAmount.innerText = currentAmount;
})
// card:5
document.getElementById("fifth-card").addEventListener("click", function(){
    const itemContainer = document.getElementById("selected-items");
    const firstCard = document.getElementById("card-five").innerText;
    const ol = document.createElement("ol");
    ol.innerText = firstCard;
    itemContainer.append(ol);
    const inAmount = document.getElementById('ammount-in').innerText;
    const initialAmount = parseFloat(inAmount);

    const totalOness = document.getElementById("total");
    const totalOne = totalOness.innerText;

    const totalTwo = parseFloat(totalOne);

    const currentAmount = totalTwo + initialAmount;
    totalOness.innerText = currentAmount;
    const finalAmount = document.getElementById('main-total');
    

})
// card 6
document.getElementById("sixth-card").addEventListener("click", function(){
    const itemContainer = document.getElementById("selected-items");
    const firstCard = document.getElementById("card-six").innerText;
    const ol = document.createElement("ol");
    ol.innerText = firstCard;
    itemContainer.append(ol);
    const inAmount = document.getElementById('ammount-in').innerText;
    const initialAmount = parseFloat(inAmount);

    const totalOness = document.getElementById("total");
    const totalOne = totalOness.innerText;

    const totalTwo = parseFloat(totalOne);

    const currentAmount = totalTwo + initialAmount;
    totalOness.innerText = currentAmount;
    const finalAmount = document.getElementById('main-total');

finalAmount.innerText = currentAmount;
})
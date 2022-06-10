// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;

    return precioConDescuento;
}


function onCliclDiscount(){
    const inputPrice = document.getElementById('price');
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById('discount');
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById('resultP');

    resultP.innerText = `El precio con descuento son: $${precioConDescuento}`;

}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioDescuento,
//     precioConDescuento,
// });


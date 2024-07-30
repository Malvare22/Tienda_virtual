export default function getDiscountPrice(price, discount){

    const discountAmount = price * (discount / 100);
    return Math.ceil(price - discountAmount);

}
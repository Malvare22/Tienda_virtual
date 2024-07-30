export default function getReviewAverage(reviews){

    let sum = 0;
    
    reviews.forEach(element => {
        sum += element.rating; 
    });

    return Math.floor(sum / reviews.length);

}
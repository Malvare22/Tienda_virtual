import getReviewAverage from "./getReviewAverage";

export const sorterFunctions = [
    (a, b) => b['price'] - a['price'], 
    (a, b) => a['price'] - b['price'],
    (a, b) => getReviewAverage(b['reviews']) - getReviewAverage(a['reviews']),
    (a, b) => getReviewAverage(a['reviews']) - getReviewAverage(b['reviews'])
  ];
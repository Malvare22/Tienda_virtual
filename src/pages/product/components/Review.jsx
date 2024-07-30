import { StarScore } from '../../../components/star_score/StarScore';
import ReviewCSS from './Review.module.css';

export default function Review({review}){

    return<div className={ReviewCSS.container}>
        <div className={ReviewCSS.reviewer}>{review['reviewer']}</div>
        <div className={ReviewCSS.rating}><StarScore score={review['rating']}></StarScore></div>
        <div className={ReviewCSS.comment}>{review['comment']}</div>
    </div>;
}


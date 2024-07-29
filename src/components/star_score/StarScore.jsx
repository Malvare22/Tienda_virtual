import Star from "../../assets/svg/star"
import StarScoreCSS from './StarScore.module.css';

export function StarHandleScore({score, setScore}) {

    return (
        <div className={StarScoreCSS.container_star}>
        <Star className={score >= 1 ? StarScoreCSS.star_fill : StarScoreCSS.star_no_fill} onClick={() => setScore(1)}></Star>
        <Star className={score >= 2 ? StarScoreCSS.star_fill : StarScoreCSS.star_no_fill} onClick={() => setScore(2)}></Star>
        <Star className={score >= 3 ? StarScoreCSS.star_fill : StarScoreCSS.star_no_fill} onClick={() => setScore(3)}></Star>
        <Star className={score >= 4 ? StarScoreCSS.star_fill : StarScoreCSS.star_no_fill} onClick={() => setScore(4)}></Star>
        <Star className={score == 5 ? StarScoreCSS.star_fill : StarScoreCSS.star_no_fill} onClick={() => setScore(5)}></Star>
    </div>
    )
  }

  export function StarScore({score}) {

    return (
        <div className={StarScoreCSS.container_star}>
        <Star className={score >= 1 ? StarScoreCSS.star_fill : StarScoreCSS.star_no_fill}></Star>
        <Star className={score >= 2 ? StarScoreCSS.star_fill : StarScoreCSS.star_no_fill}></Star>
        <Star className={score >= 3 ? StarScoreCSS.star_fill : StarScoreCSS.star_no_fill}></Star>
        <Star className={score >= 4 ? StarScoreCSS.star_fill : StarScoreCSS.star_no_fill}></Star>
        <Star className={score == 5 ? StarScoreCSS.star_fill : StarScoreCSS.star_no_fill}></Star>
    </div>
    )
  }
  
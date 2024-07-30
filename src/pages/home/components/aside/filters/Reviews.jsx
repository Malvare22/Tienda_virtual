import { useState } from "react";
import FiltersCSS from './Filters.module.css'
import { StarHandleScore } from "../../../../../components/star_score/StarScore";

export default function Reviews(){

    const [score, setScore] = useState(0);

    return(
        <>
            <div className={FiltersCSS.label} onClick={() => console.log("A")}>
                Reviews
            </div>
            <div className={FiltersCSS.container_star}>
                <StarHandleScore score={score} setScore={setScore}></StarHandleScore>
            </div>
        </>
    )
}
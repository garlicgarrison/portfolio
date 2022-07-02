import { Link } from "gatsby";
import React from "react";
import * as style from "../../styles/components/PaperCard.module.scss";

type PaperCardProps = { paper: readonly string[] };

export default function PaperCard({ paper }: PaperCardProps) {
  const title = paper[0];
  const description = paper[1] as any;
  const field = paper[2];
  const link = paper[3];
  console.log("link", `static/problem_${link}/`);

  return (
    <div className={style.paper_container}>
      <h4>{title}</h4>
      <h5>{field}</h5>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <Link to={`static/problem_${link}`}>See my solution</Link>
    </div>
  );
}

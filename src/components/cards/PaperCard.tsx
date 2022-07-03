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
    <div className={style.paper_container} key={`title__${title}`}>
      <h4>{title}</h4>
      <h5>{field}</h5>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>

      <a
        href={`/problem_${link}`}
        target="_blank"
        rel="nofollow noopener noreferrer"
        onClick={() => console.log("hi")}
      >
        See my solution
      </a>
    </div>
  );
}

import React from "react";
import * as style from "../../styles/components/PaperCard.module.scss";

type PaperCardProps = { paper: readonly string[] };

export default function PaperCard({ paper }: PaperCardProps) {
  const title = paper[0];
  const description = paper[1] as any;
  const field = paper[2];

  return (
    <div className={style.paper_container}>
      <h4>{title}</h4>
      <h5>{field}</h5>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  );
}

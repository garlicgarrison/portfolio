import React from "react";
import * as style from "../../styles/components/ExperienceCard.module.scss";

export type ExperienceData = {
  [key: string]: string;
};
type ExperienceCardProps = {
  experience: ExperienceData;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const company = experience.company;
  const project = experience.project;
  const description = experience.description;

  return (
    <div className={style.card_container}>
      <h4>{company}</h4>
      <h5>{project}</h5>
      <span dangerouslySetInnerHTML={{ __html: description }}></span>
    </div>
  );
}

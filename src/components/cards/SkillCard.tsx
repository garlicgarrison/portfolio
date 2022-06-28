import React from "react";
import * as style from "../../styles/components/SkillCard.module.scss";

type SkillCardProps = {
  name: string;
  color: string;
};
export default function SkillCard({ name, color }: SkillCardProps) {
  return (
    <span
      className={style.cardContainer}
      style={{ color: color, borderColor: color }}
    >
      {name}
    </span>
  );
}

import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SkillCard from "../cards/SkillCard";
import useStaticQueryTable, {
  createMarkdownArrayTableSync,
} from "../hooks/useStaticQueryTable";
import * as style from "../../styles/sections/About.module.scss";

type Skill = {
  skill: string;
  color: string;
};
type SkillMap = {
  [key: string]: Skill[];
};

export default function About() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "about/" } }) {
          edges {
            node {
              rawMarkdownBody
            }
          }
        }
      }
    `
  );
  const skills = {} as SkillMap;
  const rawMarkDown = data.allMarkdownRemark.edges[0].node.rawMarkdownBody;

  if (rawMarkDown) {
    const table = createMarkdownArrayTableSync(rawMarkDown);
    for (const row of table.rows) {
      if (!skills[row[2]]) {
        skills[row[2]] = [];
      }
      skills[row[2]].push({ skill: row[0], color: row[1] });
    }
  }

  return (
    <div className={style.about_section}>
      <div className={style.about_grid_container}>
        {/* TECHNOLOGIES */}
        <div className={style.technologies_container}>
          <div className={style.card_header}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path clip-rule="evenodd" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path>
            </svg>
            <h5>Technologies</h5>
          </div>
          <div className={style.skills_container}>
            <h4>Frontend</h4>
            {skills["Frontend"]?.map((skill) => {
              return (
                <SkillCard
                  key={`skill__${skill.skill}`}
                  name={skill.skill}
                  color={skill.color}
                />
              );
            })}
          </div>
          <div className={style.skills_container}>
            <h4>Backend</h4>
            {skills["Backend"]?.map((skill) => {
              return (
                <SkillCard
                  key={`skill__${skill.skill}`}
                  name={skill.skill}
                  color={skill.color}
                />
              );
            })}
          </div>
          <div className={style.skills_container}>
            <h4>Misc</h4>
            {skills["Tools"]?.map((skill) => {
              return (
                <SkillCard
                  key={`skill__${skill.skill}`}
                  name={skill.skill}
                  color={skill.color}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import SkillCard from "../cards/SkillCard";
import useStaticQueryTable, {
  createMarkdownArrayTableSync,
} from "../hooks/useStaticQueryTable";
import * as style from "../../styles/sections/About.module.scss";
import PaperCard from "../cards/PaperCard";
import Helmet from "react-helmet";
import ExperienceCard from "../cards/ExperienceCard";

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
      query SkillsQuery {
        skills: allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "about/" }
            frontmatter: { type: { eq: "skills" } }
          }
        ) {
          edges {
            node {
              rawMarkdownBody
            }
          }
        }
        education: allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "about/" }
            frontmatter: { type: { eq: "education" } }
          }
        ) {
          edges {
            node {
              frontmatter {
                school
                major
                minor
                gpa
              }
            }
          }
        }
        papers: allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "about/" }
            frontmatter: { type: { eq: "papers" } }
          }
        ) {
          edges {
            node {
              rawMarkdownBody
            }
          }
        }
        experience: allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "about/" }
            frontmatter: { type: { eq: "experience" } }
          }
        ) {
          edges {
            node {
              frontmatter {
                company
                project
                description
              }
            }
          }
        }
      }
    `
  );
  const skills = {} as SkillMap;
  const skillRawMarkDown = data.skills.edges[0].node.rawMarkdownBody;
  if (skillRawMarkDown) {
    const table = createMarkdownArrayTableSync(skillRawMarkDown);
    for (const row of table.rows) {
      if (!skills[row[2]]) {
        skills[row[2]] = [];
      }
      skills[row[2]].push({ skill: row[0], color: row[1] });
    }
  }

  const papers = [];
  const papersRawMarkDown = data.papers.edges[0].node.rawMarkdownBody;
  if (papersRawMarkDown) {
    const table = createMarkdownArrayTableSync(papersRawMarkDown);
    for (const row of table.rows) {
      papers.push(row);
    }
  }

  const education = data.education.edges[0].node.frontmatter;

  const experiences = data.experience.edges as Array<any>;

  console.log("experiences", experiences);

  return (
    <div className={style.about_section}>
      {/* <Helmet>
      <script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js" type="text/javascript"></script>
      </Helmet> */}
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
              <path clipRule="evenodd" d="M0 0h24v24H0z" fill="none"></path>
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

        {/* EDUCATION */}
        <div className={style.education_container}>
          <div className={style.card_header}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path>
            </svg>
            <h5>Education</h5>
          </div>
          <h3>{education.school}</h3>
          <span>Major: {education.major}</span>
          <br />
          <span>Minor: {education.minor}</span>
          <br />
          <span>GPA: {education.gpa}</span>
        </div>

        {/* PAPERS */}
        <div className={style.papers_container}>
          <div className={style.card_header}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path>
            </svg>
            <h5>Papers</h5>
          </div>

          {papers.map((paper, i) => {
            return <PaperCard paper={paper} key={`__paper_${i}`} />;
          })}
        </div>

        {/* Experience */}
        <div className={style.experience_container}>
          <div className={style.card_header}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path>
            </svg>
            <h5>Experience</h5>
          </div>
          {experiences.map((exp, i) => {
            return (
              <ExperienceCard
                experience={exp.node.frontmatter}
                key={`__exprience_${i}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

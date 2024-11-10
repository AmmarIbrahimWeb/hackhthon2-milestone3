import React from 'react';
import Heading from './Heading';
import Card from './Card';

// Fixed duplicate id and added unique ids to each project
const data = [
  {
    id: 0,
    title: "Static Resume Builder",
    desc: "using Html & Css",
    img: "/project_01.png",
    tags: ["Html", "Css", "Ts", "Js"]
  },
  {
    id: 1,
    title: "Resume Builder",
    desc: "using Html & Css",
    img: "/project_02.png",
    tags: ["Html", "Css", "Ts", "Js"]
  },
  {
    id: 2,
    title: "Resume Generator",
    desc: "using Html & Css",
    img: "/project_03.png", // Fixed image path typo from 'project_3.png' to 'project_03.png'
    tags: ["Html", "Css", "Ts", "Js"]
  },
  {
    id: 3,
    title: "Generated Resume",
    desc: "using Html & Css",
    img: "/project_04.png",
    tags: ["Html", "Css", "Ts", "Js"]
  },
  {
    id: 4,
    title: "Personal Information",
    desc: "using Html & Css",
    img: "/project_05.png",
    tags: ["Html", "Css", "Ts", "Js"]
  },
  {
    id: 5, // Fixed duplicate id
    title: "Profile Card",
    desc: "using Html & Css",
    img: "/project_06.png",
    tags: ["Html", "Css", "Ts", "Js"]
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32"data-aos="zoom-in-up">
      <Heading title="My Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center" >
        {data.map((el) => (
          <Card
            key={el.id} // Use unique `id` as key
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

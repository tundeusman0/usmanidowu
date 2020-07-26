import React from 'react';
import Table from './Table';

const skills = [
  { skill: 'React', rating: 8 },
  { skill: 'Node Js', rating: 8 },
  { skill: 'MongoDB (Mongoose)', rating: 8 },
  { skill: 'Javascript (Front-End)', rating: 7 },
  { skill: 'Css', rating: 8 },
  { skill: 'HTML', rating: 9 },
  { skill: 'Adobe Illustrator', rating: 6 },
  { skill: 'Adobe Photoshop', rating: 6 }
];

const Skills = () => {
  return (
    <div className="portSkills">
      <h1>Skills</h1>
      <div className="skills_details">
        <Table rows={['Skill', 'Rating']} columns={skills} />
      </div>
    </div>
  );
};

export default Skills;

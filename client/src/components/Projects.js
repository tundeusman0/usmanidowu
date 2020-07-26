import React from 'react';
import Table from './Table';

const rows = ['Project', 'Description', 'Link'];
const columns = [
  {
    skill: 'Oppor',
    info: 'A Job/career awarness web application plus Resume/Cv builder',
    link: 'http://oppor.com.ng',
    linkName: 'oppor.com.ng'
  },
  {
    skill: 'Digitnature',
    info: 'A portfolio web App',
    link: 'http://digitnature.com',
    linkName: 'digitnature.com'
  },
  {
    skill: 'Sch-Node-App2',
    info: 'A Demo School Project',
    link: 'https://tundeusman0.github.io/sch-node-app2/',
    linkName: 'schNode'
  },
  {
    skill: 'Expenses Store',
    info: 'Demo Expenses Store',
    link: 'https://react-expense-2.herokuapp.com',
    linkName: 'react-expense-2.herokuapp.com'
  },
  {
    skill: 'My-node-chat',
    info: 'Demo Web chat app',
    link: 'https://whispering-everglades-39686.herokuapp.com',
    linkName: 'whispering-everglades-39686.herokuapp.com'
  },
  {
    skill: 'Reminisce Loan App',
    info: 'Demo Loan App',
    link: 'https://gentle-waters-83618.herokuapp.com',
    linkName: 'gentle-waters-83618.herokuapp.com'
  },
  {
    skill: 'Indecision App',
    info: 'Demo Indecision App',
    link: 'https://indecision-appz.herokuapp.com/',
    linkName: 'indecision-appz.herokuapp.com'
  }
];

export const Projects = () => {
  return (
    <div className="port_projects">
      <h1>Some Projects</h1>
      <Table rows={rows} columns={columns} />
    </div>
  );
};

export default Projects;

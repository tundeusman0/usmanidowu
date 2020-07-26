import React from 'react';
import Table from './Table';

const prices = [
  { skill: 'Static Website', rating: '₦15,000', info: 'Duration of four days' },
  {
    skill: 'Dynamic Website',
    rating: '₦60,000',
    info: 'Duration of One Week'
  },
  {
    skill: 'E-commerce Website',
    rating: '₦100,000',
    info: 'Duration of One Week'
  },
  {
    skill: 'School Website without portal',
    rating: '₦70,000',
    info: 'Duration of Two Weeks'
  },
  {
    skill: 'Static Website with portal',
    rating: '₦150,000',
    info: 'Duration of Two Weeks'
  },
  {
    skill: 'Special Web Application',
    rating: 'from ₦150,000',
    info: 'Duration of Three Weeks'
  }
];
const learn = [
  {
    skill: 'Learn website (Basic)',
    rating: '₦10,000',
    info:
      'Duration of Three Weeks (2 hours a day) plus certificate, you will learn HTML and CSS'
  },
  {
    skill: 'Basic Website Designer Guild',
    rating: '₦5,000',
    info: 'Duration of One Week (1 hours a day), guild on HTML and CSS'
  },
  {
    skill: 'Learn Website (Advance)',
    rating: '₦20,000',
    info:
      'Duration of four Weeks (3 hours a day) plus certificate, you will learn HTML, CSS and Javascript'
  },
  {
    skill: 'Learn Web Application Development',
    rating: '₦60,000',
    info:
      'Duration of 8 Weeks (3 hours a day) plus certificate, you will learn React, Node js and MongoDb(Database)'
  },
  {
    skill: 'Web Developer Guild',
    rating: '₦30,000',
    info:
      'Duration of 4 Weeks (3 hours a day), guild on Javscript(front-end), React, Node js and MongoDb(Database)'
  },
  {
    skill: 'Learn React',
    rating: '₦30,000',
    info:
      'Duration of 4 Weeks (3 hours a day) plus certificate, you will learn React, Node js and MongoDb(Database)'
  },
  {
    skill: 'Learn Node Js',
    rating: '₦30,000',
    info:
      'Duration of 4 Weeks (3 hours a day) plus certificate, you will learn React, Node js and MongoDb(Database)'
  }
];
const rows = ['Service', 'Info', 'Amount'];

const PriceList = () => {
  return (
    <div className="portPrice">
      <h1>Services</h1>
      <h3>
        Let me help you design and build your website/ web app at a very cheap
        rate
      </h3>
      <Table rows={rows} columns={prices} />
      <h3 style={{ marginTop: '20px' }}>Learn from me</h3>
      <Table rows={rows} columns={learn} />
    </div>
  );
};

export default PriceList;

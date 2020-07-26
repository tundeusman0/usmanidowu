import React from 'react';
import Footer from './Footer';
import Header from './NavBar';
import Projects from './Projects';
import ProfilePix from './ProfilePix';
import Skills from './Skills';
import PriceList from './PriceList';
import ContactMe from './ContactMe';

const Dashboard = () => {
  return (
    <div className="port">
      <div className="port_head">
        <Header />
      </div>
      <div className="port_body">
        <div className="port_body_right">
          <ProfilePix />
          <Skills />
        </div>
        <div className="port_body_left">
          <PriceList />
          <ContactMe />
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
};

export default Dashboard;

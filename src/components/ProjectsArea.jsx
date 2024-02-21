import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsArea = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          <div className="work">
            <img src="/images//work-1.png" alt="" />
            <div className="layer">
              <h3>Social Media Store</h3>
              <div className='projects-links'>
                <Link target='blank' to="https://front-ecommerce-git-master-bidyutsikder.vercel.app/"><i className="link fas fa-external-link-alt"></i></Link>
                <Link target='blank' to="https://github.com/Bidyut-Sikder/frontEcommerce"><i className="link fa-brands fa-github"></i></Link>

              </div>
              <p>
               This web store is created using React.js.It is hosted on vercel  and used firebase for authentication.
                
              </p>

            </div>
          </div>
          <div className="work">
            <img src="/images//work-2.png" alt="" />
            <div className="layer">
              <h3>Social Media App</h3>

              <div className='projects-links'>
                <Link to="#"><i className="link fas fa-external-link-alt"></i></Link>
                <Link to="#"><i className="link fa-brands fa-github"></i></Link>

              </div>

              <p>
               This Application is under construction.
              </p>


            </div>
          </div>
          <div className="work">
            <img src="/images//work-3.png" alt="" />
            <div className="layer">
              <h3>Social Media App</h3>
              <div className='projects-links'>
                <Link to="#"><i className="link fas fa-external-link-alt"></i></Link>
                <Link to="#"><i className="link fa-brands fa-github"></i></Link>

              </div>
              <p>
              This Application is under construction.
              </p>

            </div>
          </div>
        </div>
        <Link to="#" className="btn">See More..</Link>
      </div>
    </div>
  );
};

export default ProjectsArea;

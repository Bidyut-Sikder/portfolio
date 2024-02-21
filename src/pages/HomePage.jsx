import React from 'react';

import AboutArea from '../components/AboutArea';
import ServiceArea from '../components/ServiceArea';
import ProjectsArea from '../components/ProjectsArea';
import ContactArea from '../components/ContactArea';
import Hero from '../components/Hero';
import { Toaster } from 'react-hot-toast';


const HomePage = () => {
    return (
        <>
            <Toaster />


             <AboutArea />
            <ServiceArea />
            <ProjectsArea />
            <ContactArea />
 





            {/* <Hero /> */}
        </>
    );


};

export default HomePage;
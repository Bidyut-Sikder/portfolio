import React, { useState } from 'react';

const AboutArea = () => {

    const [activeLinkskill, setActiveLinkskill] = useState(true)
    const [activeLinkexe, setActiveLinkexe] = useState(false)
    const [activeLinkedu, setActiveLinkedu] = useState(false)


    const [skillTab, setSkillTab] = useState(true)
    const [expTab, setExpTab] = useState(false)
    const [eduTab, setEduTab] = useState(false)


    const education = () => {

        setActiveLinkedu(true)
        setActiveLinkskill(false)
        setActiveLinkexe(false)

        //show data

        setEduTab(true)
        setExpTab(false)
        setSkillTab(false)


    }
    const experience = () => {
        setActiveLinkedu(false)
        setActiveLinkskill(false)
        setActiveLinkexe(true)

        //show data

        setEduTab(false)
        setExpTab(true)
        setSkillTab(false)
    }
    const skills = () => {
        setActiveLinkedu(false)
        setActiveLinkskill(true)
        setActiveLinkexe(false)

        //show data

        setEduTab(false)
        setExpTab(false)
        setSkillTab(true)
    }

    //console.log(activeLink)
    //active-tab
    return (

        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col-1">
                        <img src="/images/user.png" alt="" />
                    </div>

                    <div className="about-col-2">
                        <h1 className="sub-title">Bidyut Sikder</h1>
                        <h2 className="title">Full Stack Developer</h2> <br />

                        <p className='about-description' >I am a full stack developer with hands on experience in building web
                            applications using MERN stack, NodeJS, Express and ReactJS. I have also
                            worked with databases like MongoDB and MySQL. My expertise includes designing
                            responsive user interfaces, developing server side logic, working with APIs,
                            managing project workflows, writing clean and efficient code.</p>
                      
                        <div className="tab-titles">
                            <p className={`tab-links ${activeLinkskill ? 'active-link' : ''}`} onClick={skills}>
                                Skills
                            </p>
                            <p className={`tab-links ${activeLinkexe ? 'active-link' : ''} `} onClick={experience}>
                                Experience
                            </p>
                            <p className={`tab-links ${activeLinkedu ? 'active-link' : ''}`} onClick={education}>Education</p>
                        </div>
                        <div className={`tab-contents  ${skillTab ? 'active-tab' : ''}`} id="skills">
                            <ul>
                                <li>
                                    <span>UI/UX</span> <br />
                                    Designing Web/App Interfaces
                                </li>
                                <li>
                                    <span>Web Development</span> <br />
                                    Web App Development
                                </li>
                                <li>
                                    <span>Back End</span> <br />
                                    Developing BackEnd APIs
                                </li>
                            </ul>
                        </div>

                        <div className={`tab-contents  ${expTab ? 'active-tab' : ''}`} id="experience">
                            <ul>
                                <li>
                                    <span>2021-Current</span> <br />
                                    UI/UX Design Training at OSTAD Institute
                                </li>
                                <li>
                                    <span>2017-2021</span> <br />
                                    Team lead at StartApp LLC.
                                </li>
                                <li>
                                    <span>2017-2021</span> <br />
                                    UX/UI Design Executive at Coin Digital LTD.
                                </li>
                            </ul>
                        </div>

                        <div className={`tab-contents  ${eduTab ? 'active-tab' : ''}`} id="education">
                            <ul>
                                <li>
                                    <span>2017</span> <br /> SSC 
                                </li>
                                <li>
                                    <span>2019</span> <br />
                                    HSC
                                </li>
                                <li>
                                    <span>2023</span> <br />
                                    BSC from GBCU,Gopalgonj.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutArea;








// <div id="about">
// <div className="container">
//     <div className="row">
//         <div className="about-col-1">
//             <img src="/images/user.png" alt="" />
//         </div>

//         <div className="about-col-2">
//             <h1 className="sub-title">About Me</h1>
//             <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Excepturi, vel, dolor aliquid inventore sunt laboriosam fuga
//                 minima autem tenetur, maxime quasi rem similique tempore?
//                 Exercitationem in beatae voluptas commodi. Beatae odit nihil
//                 praesentium corporis veniam earum consequuntur libero sint
//                 dolorum.
//             </p>
//             <div className="tab-titles">
//                 <p className={`tab-links ${activeLinkskill ? 'active-link' : ''}`} onClick={skills}>
//                     Skills
//                 </p>
//                 <p className={`tab-links ${activeLinkexe ? 'active-link' : ''} `} onClick={experience}>
//                     Experience
//                 </p>
//                 <p className={`tab-links ${activeLinkedu ? 'active-link' : ''}`} onClick={education}>Education</p>
//             </div>
//             <div className={`tab-contents  ${skillTab ? 'active-tab' : ''}`} id="skills">
//                 <ul>
//                     <li>
//                         <span>UI/UX</span> <br />
//                         Designing Web/App Interfaces
//                     </li>
//                     <li>
//                         <span>Web Development</span> <br />
//                         Web App Development
//                     </li>
//                     <li>
//                         <span>Back End</span> <br />
//                         Developing BackEnd APIs
//                     </li>
//                 </ul>
//             </div>

//             <div className={`tab-contents  ${expTab ? 'active-tab' : ''}`} id="experience">
//                 <ul>
//                     <li>
//                         <span>2021-Current</span> <br />
//                         UI/UX Design Training at OSTAD Institute
//                     </li>
//                     <li>
//                         <span>2017-2021</span> <br />
//                         Team lead at StartApp LLC.
//                     </li>
//                     <li>
//                         <span>2017-2021</span> <br />
//                         UX/UI Design Executive at Coin Digital LTD.
//                     </li>
//                 </ul>
//             </div>

//             <div className={`tab-contents  ${eduTab ? 'active-tab' : ''}`} id="education">
//                 <ul>
//                     <li>
//                         <span>2021</span> <br />UI/UX Training at OSTAD Institute
//                     </li>
//                     <li>
//                         <span>2021</span> <br />
//                         BSC from GBC Gopalgonj.
//                     </li>
//                     <li>
//                         <span>2021</span> <br />
//                         MSC from Kulna University.
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </div>
// </div>
// </div>







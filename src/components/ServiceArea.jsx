import React from 'react';
import { Link } from 'react-router-dom';

const ServiceArea = () => {
    return (
        <div id="services">
            <div className="container">
                <h1 className="sub-title">My Services</h1>
                <div className="services-list">
                    <div>
                        <i className="fa fa-code"></i>
                        <h2>Web Design</h2>
                        <p>
                            Produce design assets for use in social media and marketing channels. Develop and maintain consistent branding. Collaborate with UX, marketing, engineering, and other teams. Utilize data and analytics in making design decision.
                        </p>

                        {/* <Link to="#">Learn More...</Link> */}
                    </div>

                    <div>
                        <i className="fa fa-crop-alt"></i>

                        <h2>UX/UI Design</h2>
                        <p>
                            I create the user interface for an app, website, or other interactive media. My work includes collaborating with product managers and engineers to gather requirements from users before designing ideas that can be communicated using storyboards.
                        </p>

                        {/* <Link to="#">Learn More...</Link> */}
                    </div>

                    <div>
                        <i className="fa fa-app-store"></i>

                        <h2>Web APIS</h2>
                        <p>
                            I  Design, develop, and maintain APIs to support web and mobile applications.Collaborate with frontend and backend developers to define API requirements.Ensure API security and authentication mechanisms are robust. Monitor API performance and troubleshoot issues promptly.
                        </p>

                        {/* <Link to="#">Learn More...</Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceArea;
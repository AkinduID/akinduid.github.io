import React from 'react';
import pic01 from '../../assets/images/pic01.jpg';
import './About.css';
import CommonCard from '../layout/CommonCard';

const About = () => {
	return (
		<div className="about-container">
			<div className="about-content">
				<div className="about-profile-image modern-card">
					<img src={pic01} alt="Akindu Delgahagoda" loading="lazy" />
				</div>
				<CommonCard className="about-info-card">
					<div className="about-text-column">
						<h1 className="about-title gradient-text-card">Akindu Delgahagoda</h1>
						<div className="about-description">
							<p>
								Engineering undergraduate specialized in <strong className="highlight-white">robotics and distributed systems</strong>.
								Proficient in bridging embedded hardware and cloud services to create cohesive intelligent solutions.
								Passionate about <strong className="highlight-white">Photo Editing, Photography, and Graphic Design</strong>.
							</p>
						</div>
						<a href="https://akinduid.github.io/my-cv/" className="about-cv-button icon fa-solid fa-download">Download CV</a>
					</div>
				</CommonCard>
			</div>
		</div>
	);
};

export default About;

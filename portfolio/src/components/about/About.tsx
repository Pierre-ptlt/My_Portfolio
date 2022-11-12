import './about.css';
import portrait from '../../assets/images/portrait_about.jpeg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

function About() {
	return (
		<section id="about" className="about">
			<h5>Get to know</h5>
			<h2>About me</h2>
			<div className="container about__container">
				<div className="about__portrait">
					<div className="about__portrait-img">
						<img src={portrait} alt="portrait_about" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>1 year Working experience</small>
						</article>
						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Clients</h5>
							<small>3 clients worldwide</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>6 completed</small>
						</article>
					</div>
					<p>blablabla</p>
					<a href="#contact" className="btn btn-primary">
						Contact
					</a>
				</div>
			</div>
		</section>
	);
}

export default About;

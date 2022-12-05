import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

function Experience() {
	return (
		<section id="experience" className="experience">
			<h5>My Skills</h5>
			<h2>My Experience</h2>
			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Front-End Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details_icon" />
							<div>
								<h4>HTML / CSS</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details_icon" />
							<div>
								<h4>JavaScript</h4>
								<small className="text-light">Skillful</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details_icon" />
							<div>
								<h4>React.JS</h4>
								<small className="text-light">Skillful</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details_icon" />
							<div>
								<h4>TypeScript</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details_icon" />
							<div>
								<h4>Redux</h4>
								<small className="text-light">Beginner</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details_icon" />
							<div>
								<h4>Jest</h4>
								<small className="text-light">Beginner</small>
							</div>
						</article>
					</div>
				</div>
				<div className="experience__other">
					<h3>Other Skills</h3>
					<div className="experience__content">
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details_icon" />
							<div>
								<h4>Git</h4>
								<small className="text-light">Skillful</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details_icon" />
							<div>
								<h4>WordPress</h4>
								<small className="text-light">Experienced</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details_icon" />
							<div>
								<h4>Elementor</h4>
								<small className="text-light">Skillful</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details_icon" />
							<div>
								<h4>Figma</h4>
								<small className="text-light">Skillful</small>
							</div>
						</article>
						<article className="experience__details">
							<BsPatchCheckFill className="experience__details_icon" />
							<div>
								<h4>Algorithm</h4>
								<small className="text-light">Intermediate</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience;

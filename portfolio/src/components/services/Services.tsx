import './services.css';
import { BiCheck } from 'react-icons/bi';

function Services() {
	return (
		<section id="services" className="services">
			<h5>What I offer</h5>
			<h2>Services</h2>
			<div className="container services__container">
				<article className="service">
					<div className="service__head">
						<h3>Front-end development</h3>
					</div>
					<ul className="service__list">
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit, amet consectetur</p>
						</li>
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit, amet consectetur</p>
						</li>
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit, amet consectetur</p>
						</li>
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit, amet consectetur</p>
						</li>
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit, amet consectetur</p>
						</li>
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit, amet consectetur</p>
						</li>
					</ul>
				</article>
				<article className="service">
					<div className="service__head">
						<h3>Website creation</h3>
					</div>
					<ul className="service__list">
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit, amet consectetur</p>
						</li>
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit, amet consectetur</p>
						</li>
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit, amet consectetur</p>
						</li>
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit, amet consectetur</p>
						</li>
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit, amet consectetur</p>
						</li>
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor sit, amet consectetur</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
}

export default Services;

import './services.css';
import { BiCheck } from 'react-icons/bi';

function Services() {
	return (
		<section id="services" className="services">
			<h5>My services</h5>
			<h2>My technical stack</h2>
			<div className="container services__container">
				<article className="service">
					<div className="service__head">
						<h3>Front-end development</h3>
					</div>
					<ul className="service__list">
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>React.JS</p>
						</li>
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>TypeScript / JavaScript</p>
						</li>
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>HTML / CSS3</p>
						</li>
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>Redux</p>
						</li>
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>Jest - TDD</p>
						</li>
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>Material UI</p>
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
							<p>WordPress</p>
						</li>
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>Elementor</p>
						</li>
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>Shopify</p>
						</li>
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>Woocommerce</p>
						</li>
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>Figma</p>
						</li>
						<li className="service__list-item">
							<BiCheck className="service__list-icon" />
							<p>Agile / Kanban</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
}

export default Services;

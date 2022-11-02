import './header.css';
import CTA from './CTA';
import portrait from '../../assets/images/portrait.png';
import HeaderSocials from './HeaderSocials';

function Header() {
	return (
		<header className="container">
			<div className="container">
				<h5>Hello, I'm</h5>
				<h1>Pierre Petillot</h1>
				<h5 className="text-light">Front-end Developer</h5>
				<CTA />
				<HeaderSocials />

				<div className="portrait">
					<img src={portrait} alt="Portrait" />
				</div>
				<a href="#contact" className="scroll__down">
					Scroll down
				</a>
			</div>
		</header>
	);
}

export default Header;

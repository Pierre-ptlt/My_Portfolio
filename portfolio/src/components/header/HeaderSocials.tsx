import './header.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

function HeaderSocials() {
	return (
		<div className="header__socials">
			<a
				href="https://www.linkedin.com/in/pierre-petillot-00859919b/"
				target="_blank"
				className="header__socials__link"
				rel="noreferrer"
			>
				<BsLinkedin />
			</a>
			<a
				href="https://www.github.com/Pierre-ptlt"
				target="_blank"
				className="header__socials__link"
				rel="noreferrer"
			>
				<FaGithub />
			</a>
		</div>
	);
}

export default HeaderSocials;

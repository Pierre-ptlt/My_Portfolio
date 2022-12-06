import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (e: any) => {
		e.preventDefault();
		const currentForm = form.current;
		if (currentForm === null) return;
		emailjs
			.sendForm(
				'service_muif82o',
				'template_i9razgq',
				currentForm,
				'8y8JX1m8LXmPD0wtH'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<section id="contact" className="contact">
			<h5>Get in touch</h5>
			<h2>Contact</h2>
			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>petillot.pierre@hotmail.fr</h5>
						<a href="mailto:petillot.pierre@hotmail.fr">Send a message</a>
					</article>
					<article className="contact__option">
						<BsWhatsapp className="contact__option-icon" />
						<h4>Whatsapp</h4>
						<h5>+336.15.97.05.78</h5>
						<a
							target="_blank"
							href="https://wa.me/+33615970578/"
							rel="noreferrer"
						>
							Send a message
						</a>
					</article>
				</div>
				<form ref={form} className="contact__form" onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="Your full name"
						required
					/>
					<input type="email" name="email" placeholder="Your email" required />
					<textarea
						name="message"
						id="message"
						rows={7}
						placeholder="Your message"
						required
					></textarea>
					<button id="btn-submit" className="btn btn-primary" type="submit">
						Send message
					</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;

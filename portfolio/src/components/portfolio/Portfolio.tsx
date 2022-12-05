import './portfolio.css';
import dashboard from '../../assets/images/dashboard.jpg';
import bank from '../../assets/images/bank.jpg';
import kasa from '../../assets/images/kasa.png';
import rating from '../../assets/images/rating.png';

function Portfolio() {
	return (
		<section className="portfolio" id="portfolio">
			<h2>My last projects</h2>
			<div className="container portfolio__container">
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img className="image-content" src={rating} alt="rating" />
					</div>
					<h3>
						Complete company rating app front-end from scratch - private for now
					</h3>
					<button disabled={true} className="disabled btn">
						View project
					</button>
				</article>
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img className="image-content" src={dashboard} alt="dashboard" />
					</div>
					<h3>Dashboard UI using React and MUI</h3>
					<a
						href="https://github.com/Pierre-ptlt/PierrePetillot_12_28062022/tree/master/sportsee"
						target="_blank"
						className="btn"
						rel="noreferrer"
					>
						View project
					</a>
				</article>
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img className="image-content" src={bank} alt="bank" />
					</div>
					<h3>Bank app using JWT user auth</h3>
					<a
						href="https://github.com/Pierre-ptlt/PierrePetillot_13_02052022/tree/master/argentbank"
						target="_blank"
						className="btn"
						rel="noreferrer"
					>
						View project
					</a>
				</article>
				<article className="portfolio__item">
					<div className="portfolio__item-image">
						<img className="image-content" src={kasa} alt="kasa" />
					</div>
					<h3>AirBnb style front-end app</h3>
					<a
						href="https://github.com/Pierre-ptlt/-PierrePetillot_11_22032022/tree/master/kasa"
						target="_blank"
						className="btn"
						rel="noreferrer"
					>
						View project
					</a>
				</article>
			</div>
		</section>
	);
}

export default Portfolio;

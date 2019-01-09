import React from 'react';
import {
	FaSass,
	FaHtml5,
	FaReact,
	FaMobileAlt,
	FaRocket,
	FaOsi,
	FaGlobeAmericas,
	FaClock,
	FaBullseye,
	FaUsers
} from 'react-icons/fa';

import './style.scss';
import Emoji from './emoji';

const Midsection = () => (
	<div>
		<section className="section">
			<div className="container">
				<div className="columns is-multiline">
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaGlobeAmericas size="fa-2x" color="#4b833f" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">What is #OWM?</h1>
									<p className="subtitle is-size-5">
										#OWM is a marathon where teams of participants from around the world will combine their efforts to achieve a total of 26.2 miles (or 42.195km) over a four-day weekend.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaClock size="fa-2x" className="has-text-danger" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Location and Dates</h1>
									<p className="subtitle is-size-5">
										Global, April 12th - April 15th. The One World Marathon will start on April 12th with the RunJordan Dead Sea Ultra Marathon events, and it will end when the Boston Marathon’s final participant, and our Global Race Director Dave McGillivray crosses the finish line – approximately midnight EST on April 15th.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaBullseye size="fa-2x" color="#5e227f" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Aims</h1>
									<p className="subtitle is-size-5">
										To reinforce the core principles of connection and cooperation supporting the belief that people around the world should work together toward common goals.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaUsers size="fa-2x" color="blue" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Teams</h1>
									<p className="subtitle is-size-5">
										Teams can have any number of members, and, because the one of the main objectives of the event is to connect people across borders and diverse backgrounds, we will encourage teams that represent multiple continents, countries and cultures. For example, schools and individuals in the Middle East can pair with peers in North America, Africa, Europe, Asia, and South America. 
									</p>
								</div>
							</div>
						</article>
					</div>

					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaOsi size="fa-2x" className="has-text-primary" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Connecting</h1>
									<p className="subtitle is-size-5">
										Using existing social media and the One World Marathon website, participants can organize, communicate and track the contributions of team members throughout their training and during marathon weekend. They can also use these channels to train together, communicate with one another, share their experiences and spread the marathon’s message of cross-cultural collaboration, interpersonal connection and teamwork.
										<Emoji emoji="🤑" />
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaRocket size="fa-2x" className="has-text-danger" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Pledge</h1>
									<p className="subtitle is-size-5">
										Users will be able to pledge a number of miles they will run during #OWM in order to support our cause. This functionality will be brought to the website by efforts from the people at <a href="https://oneworldhackathon.org">One World Hackathon</a>.
									</p>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	</div>
);

export default Midsection;

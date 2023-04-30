import Head from 'next/head'
import Title from "../../modules/Title"
import Layout from '../../modules/layouts'
import Content from '../../modules/Content'

export default function Experience() {
	return (
		<Layout page="Experience">
			<Head>
				<title>Ben Cohen | Conversion Optimsation Specialist</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://use.typekit.net/puh4jzz.css" />
			</Head>
			<Title
				text="Experience"
			/>
			<div className="experience page d-span-11 m-span-3">
				<Content
					title="Conversion Optimisation"
					content={[
						<p key="conversion-optimisation-content-p-1">From Jan 2016, I have been specialising in Conversion Optimisation. My career so far has been focused on a wide range of testing tools and optimisation projects.</p>,
						<p key="conversion-optimisation-content-p-2">I've been actively involved with every step of the optimisation process, managing tests from concept through to analysis.</p>
					]}
				/>
				<Content
					title="Ambrose Wilson / N Brown"
					content={[
						<p key="n-brown-content-p-1">Ambrose Wilson is an N Brown brand specialising in clothing for 65+ women. Other N Brown brands include Jacamo, Simply Be and JD Williams.</p>,
						<p key="n-brown-content-p-2">During my time at N Brown I have been solely responsible for the testing and optimisation program for the Ambrose Wilson website. This has included planning out the testing roadmap, designing and developing A/B tests & personalisation experiences, monitoring and analysing test data and reporting results to relevant stakeholders. In addition to this, I have also collaborated with members of the other CRO teams to in the planning, development, and analysis of cross-brand testing activity.</p>,
						<strong key="n-brown-responsibilities">Responsibilities:</strong>,
						<p key="n-brown-content-p-3">CRO Strategy / A/B & MVT Testing / Personalisation / Marketing Campaign Messaging / Report Automation / User Journey Mapping</p>,
						<strong key="n-brown-toolkit">Toolkit:</strong>,
						<p key="n-brown-content-p-4">Monetate / Teradata / HTML /  CSS / JavaScript / SQL / Python</p>
					]}
				/>
				<Content
					title="Jurys Inn"
					content={[
						<p key="jurys-inn-content-p-1">A hotel chain specialising in city-centre locations across the UK (and a location in Prague)</p>,
						<strong key="jurys-inn-responsibilities">Responsibilities:</strong>,
						<p key="jurys-inn-content-p-2">A/B & MVT Testing / Personalisation / Site Speed Optimisation / Exit Intent Messaging / On-site Sale Messaging</p>,
						<strong key="jurys-inn-toolkit">Toolkit:</strong>,
						<p key="jurys-inn-content-p-3">Google Optimize 360 / VWO /  Sentient Ascend / HTML / CSS / JavaScript / PHP / Python / SQL</p>
					]}
				/>
				<Content
					title="Music Magpie"
					content={[
						<p key="music-magpie-content-p-1">An ecommerce business with brands in the US and UK. They both buy and sell a wide range of Tech, CD's, DVD's & even Lego!</p>,
						<strong key="music-magpie-responsibilities">Responsibilities:</strong>,
						<p key="music-magpie-content-p-2">A/B Testing / Social Proof Messaging / Exit Intent Messaging</p>,
						<strong key="music-magpie-toolkit">Toolkit:</strong>,
						<p key="music-magpie-content-p-3">Google Optimize 360 / VWO / HTML / CSS / JavaScript / PHP</p>
					]}
				/>
				<Content
					title="Aspinal of London"
					content={[
						<p key="aspinal-of-london-content-p-1">Aspinal of London is a London designer, manufacturer and retailer of luxury leather goods and accessories for men and women. Held in high regard by many celebrities and social influencers, their clientele includes models, actors and members of the royal family.</p>,
						<strong key="aspinal-of-london-responsibilities">Responsibilities:</strong>,
						<p key="aspinal-of-london-content-p-2">A/B Testing / Personalisation / Site Speed Optimisation / Exit Intent Messaging</p>,
						<strong key="aspinal-of-london-toolkit">Toolkit:</strong>,
						<p key="aspinal-of-london-content-p-3">Google Optimize 360 / VWO / Qubit / HTML / CSS / JavaScript</p>
					]}
				/>
				<Content
					title="Barratt Homes"
					content={[
						<p key="barratt-homes-content-p-1">Barratt Developments plc is one of the largest residential property development companies in the United Kingdom operating a network of over 30 divisions.</p>,
						<strong key="barratt-homes-responsibilities">Responsibilities:</strong>,
						<p key="barratt-homes-content-p-2">A/B Testing / Feature Implementation Testing</p>,
						<strong key="barratt-homes-toolkit">Toolkit:</strong>,
						<p key="barratt-homes-content-p-3">VWO / HTML / CSS / JavaScript / PHP</p>
					]}
				/>
				<Content
					title="Motoring.co.uk"
					content={[
						<p key="motoring-content-p-1">Motoring.co.uk is a website specialising in car news, reviews, valuations and comparisons. MyMotoring was a sister site that allows users to interact with one another and keep track of important information relating to their vehicle (such as MOT & tax dates).</p>,
						<strong key="motoring-responsibilities">Responsibilities:</strong>,
						<p key="motoring-content-p-2">Front End Web Development / HTML Email Development</p>,
						<strong key="motoring-toolkit">Toolkit:</strong>,
						<p key="motoring-content-p-3">HTML / CSS / JavaScript / PHP</p>
					]}
				/>
			</div>
		</Layout>
	)
}

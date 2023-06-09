import Head from 'next/head'
import Title from '../../modules/Title'
import Layout from '../../modules/layouts'
import Content from '../../modules/Content'

export default function Toolkit() {
	return (
		<Layout page="Toolkit">
			<Head>
				<title>Ben Cohen | Conversion Optimsation Specialist</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://use.typekit.net/puh4jzz.css" />
			</Head>
			<Title
				text="Toolkit"
			/>
			<div className="toolkit page d-span-11 m-span-3">
				<Content
					key="Coding Languages"
					title="Coding Languages"
					content={[
						<p key="toolkit-content">
							Javascript & jQuery<br />
							CSS and SASS/SCSS<br />
							Python <br/>
							SQL<br />
							HTML
						</p>
					]}
				/>
				<Content
					key="Coding Tools & Frameworks"
					title="Coding Tools & Frameworks"
					content={[
						<p key="toolkit-content">
							Webpack<br />
							Gulp<br />
							React<br />
							NextJS<br />
							WordPress<br />
							Shopify<br />
							HubSpot<br />
							Keras<br />
							AWS
						</p>
					]}
				/>
				<Content
					key="Design Tools"
					title="Design Tools"
					content={[
						<p key="toolkit-content">
							Adobe XD<br />
							Figma
						</p>
					]}
				/>
				<Content
					key="Optimisation Tools"
					title="Optimisation Tools"
					content={[
						<p key="toolkit-content">
							VWO<br />
							Qubit<br />
							Google Optimize 360<br />
							Sentient Ascend<br />
							Monetate<br />
							Adobe Target<br />
							Hotjar<br />
							Sessioncam<br />
							AB Tasty<br />
							Google Analytics 360
						</p>
					]}
				/>
				<Content
					key="Site Speed Optimisation"
					title="Site Speed Optimisation"
					content={[
						<p key="toolkit-content">
							Speedcurve<br />
							GT Metrix
						</p>
					]}
				/>
			</div>
		</Layout>
	)
}

export default function CallToAction(props) {
	return [
		<div key={`${props.text}-cta-container`} className="cta-container">
			<a className="cta" href={props.link} target={props.target}>
				<span className="icon">{props.icon}</span>
				<span className="label">{props.text}</span>
			</a>
		</div>
	]
}
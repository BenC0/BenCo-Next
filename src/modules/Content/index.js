export default function Content(props) {
	return  (
        <div key={`${props.title}-container`} className="content m-span-3 d-span-12">
			<h2 className="subtitle">{props.title}</h2>
			<div className="copy">{[...props.content].map(element => element)}</div>
		</div>
    )
}
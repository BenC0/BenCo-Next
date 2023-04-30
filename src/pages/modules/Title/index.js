export function Shapes(title) {
    if (title == "Benji Cohen") {
        return (
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
        )
    }
    return (
        <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
    )
} 
export default function Title(props) {
	return (
		<div id="title" className="content m-span-4 d-span-12">
			<div className="title_container">
				<Shapes title={props.text} />
				<h1 className="title">{props.text}</h1>
			</div>
		</div>
	)
}
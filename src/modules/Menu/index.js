import Link from 'next/link';

export function MenuClick() {
    let isNavActive = document.body.classList.contains('nav-active');
    if (isNavActive) {
        document.body.classList.remove('nav-active')
    } else {
        document.body.classList.add('nav-active')
    }
}

export function MenuIcon() {
	return (
        <div id="menu_icon_container" className="span-1 m-offset-4 d-offset-12">
            <div id="menu" onClick={MenuClick}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </div>
    )
}

export function Menu() {
	return (
        <nav id="nav" className="m-grid-4 d-grid-12" style={{
            display: "none"
        }}>
            <ul className="d-span-11 m-span-3">
                <li>
                    <Link onClick={MenuClick} href="/">Home</Link>
                </li>
                <li>
                    <Link onClick={MenuClick} href="/toolkit">Toolkit</Link>
                </li>
                <li>
                    <Link onClick={MenuClick} href="/experience">Experience</Link>
                </li>
                <li>
                    <Link onClick={MenuClick} href="/side-projects">Side Projects</Link>
                </li>
                <li>
                    <Link onClick={MenuClick} href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu
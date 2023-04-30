import { MenuIcon, Menu } from "../Menu"

export default function Layout({ children, page }) {
	return (
		<main id="root" className="m-grid-4 d-grid-12" page={ page } >
			{children}
			<Menu />
			<MenuIcon />
		</main>
	)
}
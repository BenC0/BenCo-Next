export default function page_transition(page = "") {
    document.body.classList.remove('nav-active')
    document.body.setAttribute("page", page)
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
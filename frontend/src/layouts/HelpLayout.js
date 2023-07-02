import { NavLink, Outlet } from "react-router-dom"

export default function HelpLayout() {
    return (
        <div className="help-layout">

            <h2>Need Help</h2><br />
            <p>If you still have any query please do check out the Frequently Asked Questions or best you can contact us and ask any question related. Thank you :)</p>

            <nav>
                <NavLink to="faq">View the FAQ</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>

            <Outlet />

        </div>
    )
}
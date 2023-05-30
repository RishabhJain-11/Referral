import { Outlet, NavLink } from "react-router-dom"
import Breadcrumbs from "../components/BreadCrumbs"
import Footer from "../pages/Footer"
export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>Referral</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="careers">Jobs</NavLink>
                    <NavLink to="about">About Us</NavLink>
                    <NavLink to="help">Help</NavLink>
                </nav>
                <Breadcrumbs />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
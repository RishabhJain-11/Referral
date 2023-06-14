import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/Home';
import About from "./pages/About";
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout';
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import NotFound from './pages/NotFound';
import Careers from './pages/careers/Careers'
import CareersLayout from './layouts/CareersLayout';
// import CareerDetails from './pages/careers/CareerDetails';
import CareersError from './pages/careers/CareersError';
import SignUp from './pages/Signup';
import Login from './pages/Login';
// import GoogleAuth from './GoogleAuth';

const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Route>

      {/* <Route path='auth' element={<GoogleAuth />} /> */}
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />

      <Route path="/api/jobs" element={<CareersLayout />} errorElement={<CareersError />}>
        <Route
          index
          element={<Careers />}
          // loader={careersLoader}
        />

        {/* <Route
          path='/api/jobs/:id'
          element={<CareerDetails />}
          // loader={careerDetailsLoader}
        /> */}
      </Route>

      <Route path='*' element={<NotFound />}></Route>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Footer></Footer> */}
    </>
  );
}

export default App

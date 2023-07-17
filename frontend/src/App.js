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
import CareersError from './pages/careers/CareersError';
import SignUp from './pages/Signup';
import Login from './pages/Login';
// import Interact from './pages/Interact';
import Resources from './pages/Resources';
import Blogs from './components/Blogs';
import Blogger from './components/Blogger';
// import CareerDetails from './pages/careers/CareerDetails';
// import GoogleAuth from './GoogleAuth';
import { AuthProvider } from './context/AuthContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Route>

      {/* <Route path="interact" element={<Interact />} /> */}
      <Route path="blogs" element={<Blogs />} />
      <Route path="resources" element={<Resources />} />
      <Route path="blogger" element={<Blogger />} />
      
      {/* <Route path='auth' element={<GoogleAuth />} /> */}
      {/* <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} /> */}

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
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;

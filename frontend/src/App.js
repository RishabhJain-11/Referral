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
import Blogger from './pages/blogs/Blogger';
import Material from './pages/resources/Material';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Route>


      <Route path="material" element={<Material />} />
      <Route path="blogger" element={<Blogger />} />


      <Route path="/api/jobs" element={<CareersLayout />} errorElement={<CareersError />}>
        <Route
          index
          element={<Careers />}
        />
      </Route>

      <Route path='*' element={<NotFound />}></Route>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

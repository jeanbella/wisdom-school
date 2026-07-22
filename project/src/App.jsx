import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ClubsPage from './pages/ClubsPage';
import Navbar from './components/Navbar';
import SchoolLevels from './components/schoolLevels';
import InfoWithAlbum from './components/InfoWithAlbum';
import TextImageSlider from './components/objectivePage';
import FooterDetails from './components/footerDetails';
import HomeForPages from './components/homeForPages';
import NewsFeature from './components/newsEvents';
import SportsPage from './pages/sportsPage';
import SpiritualPage from './pages/spiritualLifePage';
import KigaliBlogPage from './pages/kigaliSchoolBlog';
import RubavuBlogPage from './pages/rubavuSchoolBlog';
import ContactUs from './components/ContactUs';
import Footer from './components/footer';
import HeroSlider from './components/HeroSlider';
import DirectorMessage from './components/directorMessage';
import Application from './components/application';
import Gallery from './pages/Gallery';
import AcademicsPage from './components/academicsPage';
import NurserySection from './pages/nursuryPage';
import PrimarySection from './pages/primaryPage';
import HighSchoolSection from './pages/highSchool';

import highImg from './assets/images/galleryHome.JPG';
import primImg from './assets/images/primary.jpg'; // Ensure the correct case
import nursImg from './assets/images/gallery38.JPG';
import clubImg from './assets/images/spell3.jpg';
import sportImg from './assets/images/pich.webp';
import homeImage from './assets/images/aboutImage.jpg';
import ApplicationForm from './pages/ApplicationPage';
import Register from './pages/register';
import Login from './pages/login';
import EnrollPage from './pages/enrollPage';
import Partnership from './pages/partnership';
import OurHistory from './pages/ourHistory';
import PrincipalMessage from './pages/principalsMessage';
import PrincipalsMessage from './pages/principalsMessage';
import BranchesPage from './pages/branches';
import StaffPage from './pages/schoolStaff';
import ChineseClubPage from './pages/chineseClubs';
import SpellingBeeClubPage from './pages/spellingBeeClubPage';
import SchoolOverview from './components/schoolOverview';
import ScrollToTop from "./components/ScrollToTop";
import Dashboard from './components/MainLayout/dashboard';
import DashboardHome from './components/MainLayout/DashboardHome';
import Students from './components/Students';
import Teachers from './components/Teachers';
import Attendance from './components/Attendance';
import Classes from './components/Classes';
import Setings from './components/Settings';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import EIDCard from './components/card';
import BranchStories from './pages/blog';


// Homepage layout component
const HomePage = () => (
  <>
     <ScrollToTop />
    <Navbar />
    <HeroSlider />
    <SchoolLevels />
    <InfoWithAlbum />
    <DirectorMessage />
    {/* <WhatSetsUsApart /> */}
    <TextImageSlider />
    {/* <NewsFeature /> */}
    <Application />
    <FooterDetails />
    {/* <Footer /> */}
  </>
);
// Campus News Page
const CampusNewsPage = () => (
  <>
    <Navbar />
    <HomeForPages title="News & Events" />
    {/* <EventsSlider /> */}
    <NewsFeature />
    <FooterDetails />
    {/* <Footer /> */}
  </>
);
const Clubs = () => (
  <>
    <Navbar />
    <HomeForPages title="Explore Our Clubs" image={clubImg} />
    <ClubsPage />
    <FooterDetails />
    {/* <Footer /> */}
  </>
);
const Sports = () => (
  <>
    <Navbar />
    <HomeForPages title="Explore Sports" image={sportImg} />
    <SportsPage />
    <FooterDetails />
    {/* <Footer /> */}
  </>
);
const SpiritualP = () => (
  <>
    <Navbar />
    {/* <HomeForPages title="Explore Sports" /> */}
    <SpiritualPage />
    <FooterDetails />
    {/* <Footer /> */}
  </>
);
const KigaliBlog = () => (
  <>
    <KigaliBlogPage />
    <FooterDetails />
    {/* <Footer /> */}
  </>
);
const RubavuBlog = () => (
  <>
    <RubavuBlogPage />
    <FooterDetails />
    {/* <Footer /> */}
  </>
);
const GalleryP = () => (
  <>
    <ScrollToTop />
    <Gallery />
    <FooterDetails />
    {/* <Footer /> */}
  </>
);
const Contact = () => (
  <>
  <ScrollToTop />
    <Navbar />
    <HomeForPages title="Contact Us" image={homeImage} />
    <ContactUs />
    <FooterDetails />
    {/* <Footer /> */}
  </>
);
const About = () => (
  <>
    <Navbar />
    <HomeForPages title="About Us" image={homeImage} />
    <SchoolOverview />
    <FooterDetails />
  </>
);
const NurseryPage = () => (
  <>
    <ScrollToTop />
    <Navbar />
    <HomeForPages title="Wisdom School Nursery" image={nursImg} />
    <NurserySection />
    <FooterDetails />
  </>
);
const PrimaryPage = () => (
  <>
    <ScrollToTop />
    <Navbar />
    <HomeForPages title="Wisdom School Primary" image={primImg} />
    <PrimarySection />
    <FooterDetails />
  </>
);
const HighSchoolPage = () => (
  <>
    <ScrollToTop />
    <Navbar />
    <HomeForPages title="Wisdom High School" image={highImg} />
    <HighSchoolSection />
    <FooterDetails />
  </>
);
const Enroll = () => (
  <>
    <ScrollToTop />
    <Navbar />
    <EnrollPage />
    <FooterDetails />
  </>
);

const PartnershipPage = () => (
  <>
    <Navbar />
    <Partnership />
    <FooterDetails />
  </>

);
const WisdomHistory = () => (
  <>
    <Navbar />
    <HomeForPages title="Wisdom Story" image={homeImage} />
    <OurHistory />
    <FooterDetails />
  </>
);
const PrincipalMsg = () => (
  <>
    <Navbar />
    <PrincipalsMessage />
    <Footer />
  </>
);
const BranchePage = () => (
  <>
    <Navbar />
    <BranchesPage />
    <FooterDetails />
  </>
);
const StuffPag = () => (
  <>
    <Navbar />
    <StaffPage />
    <FooterDetails />
  </>
);
const ChinesesClubPage = () => (
  <>
    <Navbar />
    <ChineseClubPage />
    <FooterDetails />
  </>
);
const SpellingbeeClubPage = () => (
  <>
    <Navbar />
    <SpellingBeeClubPage />
    <FooterDetails />
  </>
);
const BlogPage = () => (
  <>
    <BranchStories />
    <FooterDetails />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campus-news" element={<CampusNewsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/schoolOverview" element={<About />} />
        <Route path="/Academic" element={<AcademicsPage />} />
        <Route path="/academics/nursery" element={<NurseryPage />} />
        <Route path="/academics/primary" element={<PrimaryPage />} />
        <Route path="/academics/highSchool" element={<HighSchoolPage />} />
        <Route path="/student-life/clubs" element={<Clubs />} />
        <Route path="/student-life/sports" element={<Sports />} />
        <Route path="/student-life" element={<SpiritualP />} />
        <Route path="/schools/kigali" element={<KigaliBlog />} />
        <Route path="/schools/rubavu" element={<RubavuBlog />} />
        <Route path="/gallery/photo" element={<GalleryP />} />
        <Route path="/application" element={<ApplicationForm />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/enrollPage' element={<Enroll />} />
        <Route path='/partnership' element={<PartnershipPage />} />
        <Route path="/ourHistory" element={<WisdomHistory />} />
        <Route path="/principalsMessage" element={<PrincipalMsg />} />
        <Route path="/branches" element={<BranchePage />} />
        <Route path="/stuffPage" element={<StuffPag />} />
        <Route path="/clubpage" element={<Clubs />} />
        <Route path="/chineseClub" element={<ChinesesClubPage />} />
        <Route path="/spelling-bee-Club" element={<SpellingbeeClubPage />} />
        <Route path="/branchesBlog" element={<BlogPage />} />
        
        <Route path="/admin/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="students" element={<Students />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="classes" element={<Classes />} />
          <Route path="settings" element={<Setings />} />
          <Route path="card" element={<EIDCard />} />
        </Route>

        <Route path="/application/dashboard" element={<StudentDashboard />}>
          <Route index element={<DashboardHome />} />
        </Route>
        <Route path="*" element={<div className="pt-24 text-center">404 - Page Not Found</div>} />
      </Routes>
    </Router>

  );
}

export default App;



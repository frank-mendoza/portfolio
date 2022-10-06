import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'swiper/css';
import "swiper/css/effect-fade";
import "animate.css/animate.min.css";

import "./styles/main.scss"

import Works from './components/Works';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {

  const [loading, setLoading] = useState(false)
  const [toggle, setToggle] = useState(true)
  const [tab, setTabs] = useState({
    all: true,
    branding: false,
    creative: false,
    reactjs: false
  })

  const home = useRef(null)
  const about = useRef(null)
  const works = useRef(null)
  const contact = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 1000)
  }, [])

  const onActiveTav = (active) => {
    if (active === "all") {
      setTimeout(() => {
        setLoading(true)
      }, 1000)
      return setTabs({
        all: true,
        branding: false,
        creative: false,
        reactjs: false
      })
    }
    else if (active === "branding") {
      setTimeout(() => {
        setLoading(true)
      }, 1000)
      return setTabs({
        all: false,
        branding: true,
        creative: false,
        reactjs: false
      })
    }
    else if (active === "creative") {
      setTimeout(() => {
        setLoading(true)
      }, 1000)
      return setTabs({
        all: false,
        branding: false,
        creative: true,
        reactjs: false
      })
    }
    else if (active === "reactjs") {
      setTimeout(() => {
        setLoading(true)
      }, 1000)
      return setTabs({
        all: false,
        branding: false,
        creative: false,
        reactjs: true
      })
    } else
      return
  }

  const scrollToElement = (top, location) => {

    if (top) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      location.current?.scrollIntoView({ behavior: 'smooth' });
    }

    setToggle(!toggle)
  }

  const openSidebar = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setToggle(true)
  }

  return (
    <>
      <Router>
        <Navbar
          scrollToElement={scrollToElement}
          home={home}
          works={works}
          about={about}
          contact={contact}
          openSidebar={openSidebar}
          openToggle={() => setToggle(!toggle)}
        />
        <Sidebar
          scrollToElement={scrollToElement}
          home={home}
          works={works}
          toggle={toggle}
          about={about}
          openToggle={() => setToggle(!toggle)}
          contact={contact}
        />
        <Routes>
          <Route path="/" element={
            <>
              <Home location={home} />
              <Works loading={loading} location={works} worksroute={false} onActiveTav={onActiveTav} tab={tab} />
              <About location={about} />
              <Contact location={contact} />
              <Footer />
            </>}
          />
          <Route path="/works" element={<Works loading={loading} worksroute={true} onActiveTav={onActiveTav} tab={tab} />} />
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found etc</h2>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

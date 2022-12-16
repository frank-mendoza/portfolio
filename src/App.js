import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { motion } from "framer-motion";

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
import HashLoader from 'react-spinners/HashLoader';

import alert from './img/exclamation-mark.png'
import successimg from './img/check.png'
import { MdClose } from 'react-icons/md';

function App() {
  const [error, setError] = useState(false)
  const [toggle, setToggle] = useState(true)
  const [loader, setLoader] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showSvg, setShowSvg] = useState(false)
  const [tab, setTabs] = useState({
    all: true,
    branding: false,
    creative: false,
    reactjs: false
  })
  const [change, setChange] = useState(
    {
      name: '',
      email: '',
      content: ''
    }
  )

  const home = useRef(null)
  const about = useRef(null)
  const works = useRef(null)
  const contact = useRef(null)

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwslINMU-qFNneN-QYV60vS8iks0q13XXd6ONxXOLkcJbz47YkKe9bBkwizfGdUxU_oFw/exec'
  const form = document.forms['submit-to-google-sheet']

  if (loader || error || success) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
  

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
      setShowSvg(true)
    }, 3000)
  }, [])


  const resetWorks = () => {
    setTabs({
      all: true,
      branding: false,
      creative: false,
      reactjs: false
    })
  }

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
  }

  const openSidebar = () => {
    setToggle(!toggle)
  }

  const onSubmit = () => {

    let name = change.name
    let email = change.email
    let content = change.content

    if (name === '' || email === "" || content === '') {
      return setError(true)
    }

    setLoader(true)

    fetch(scriptURL,
      {
        method: 'POST', body: new FormData(form)
      }
    )
      .then(() => {

        setChange({
          name: '',
          email: '',
          content: ''
        })

        setLoader(false)
        setSuccess(true)
        setTimeout(() => {
          setSuccess(false)
        }, 1000)
      })
      .catch(() => {

        setLoader(false)
      })

  }

  const onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;

    if (name === 'name') {
      setChange({
        name: value,
        email: change.email,
        content: change.content
      })
    }
    if (name === 'email') {
      setChange({
        name: change.name,
        email: value,
        content: change.content
      })
    }
    if (name === 'content') {
      setChange({
        name: change.name,
        email: change.email,
        content: value
      })
    }
  }


  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "#fff"
    }
  };
  const rec = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      stroke: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      stroke: "#fff"
    }
  };
  const outer = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "#ffc401"
    }
  };

  return (
    !showSvg ?
      <div className={!showSvg ? 'svg show' : 'svg'}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 148.7 132.28">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <motion.path
                d="M109.44,40.47h0a17.64,17.64,0,0,1,3.81-24.66L133,1.34A23.31,23.31,0,0,0,125.2,0H23.5A23.5,23.5,0,0,0,0,23.5v77.71L12.59,92a15.64,15.64,0,0,1,21.87,3.38h0a15.65,15.65,0,0,1-3.38,21.87L13.55,130.07a23.34,23.34,0,0,0,10,2.21H125.2a23.5,23.5,0,0,0,23.5-23.5V33.58l-14.61,10.7A17.64,17.64,0,0,1,109.44,40.47ZM57.82,67.15c-1.82-.14-3.19-.21-4.1-.21a31.1,31.1,0,0,0-6.61,1.21V84.62a3.21,3.21,0,0,1-1.2,2.54,4.07,4.07,0,0,1-2.74,1,3.23,3.23,0,0,1-2.47-1,3.62,3.62,0,0,1-1-2.56V54.52c0-.68,0-1.72,0-3.1s0-2.41,0-3.1a3.47,3.47,0,0,1,1-2.57,3.57,3.57,0,0,1,2.61-1,3.81,3.81,0,0,1,1.76.4q3-.52,5.6-.78c1.69-.16,3.23-.25,4.59-.25A30.05,30.05,0,0,1,63,45.33q5.7,1.55,5.7,3.6A3.54,3.54,0,0,1,67.6,51.5,3.46,3.46,0,0,1,65,52.58a4.37,4.37,0,0,1-1.34-.24,27.11,27.11,0,0,0-8.27-1.1q-1.6,0-3.69.21c-1.39.14-2.94.35-4.63.63q0,5,0,8.66a29.42,29.42,0,0,1,6.61-1,70,70,0,0,1,8.51.45q3.39.42,3.39,3.57a3.36,3.36,0,0,1-1.08,2.55,3.65,3.65,0,0,1-2.62,1C61,67.36,59.64,67.29,57.82,67.15Zm49.89,19.49a4,4,0,0,1-2.6.94q-2.85,0-4.25-4.09l-1.47-6.36q-1.26-4.72-2.73-13.58-1.18,3.53-3.91,11.06l-1.58,4.83a27.24,27.24,0,0,1-2,4.7,4.31,4.31,0,0,1-3.89,2.45c-1.64,0-2.91-1-3.78-2.92L80,78.79Q78,72.05,76.33,64.66,75.15,68.91,73,77.5q-.49,3-1,5.91c-.72,2.48-2,3.73-4,3.73a3.56,3.56,0,0,1-2.87-1.24,3.74,3.74,0,0,1-.89-2.49A37.6,37.6,0,0,1,66.14,73q2.72-9.16,2.92-10.16c.51-2.69,1-5.39,1.55-8.09.78-3.71,1.64-6.18,2.56-7.42a4.19,4.19,0,0,1,3.48-1.85,3.72,3.72,0,0,1,3.52,2.42q1,2.28,2.25,9.35A134,134,0,0,0,85.87,72q3-7.8,5.56-17.13l1.47-6q1.42-3.75,4.39-3.75t4.25,4.36A43.08,43.08,0,0,1,102.78,56a135,135,0,0,0,3.83,19.17C108.17,80.62,109,83.57,109,84A3.27,3.27,0,0,1,107.71,86.64Z"
                variants={outer}
                stroke="orange"
                strokeMiterlimit="3"
                strokeWidth="2"
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                }}
              />
              <motion.path
                d="M65.62,63.79q0-3.15-3.39-3.57a70,70,0,0,0-8.51-.45,29.42,29.42,0,0,0-6.61,1q0-3.62,0-8.66c1.69-.28,3.24-.49,4.63-.63s2.62-.21,3.69-.21a27.11,27.11,0,0,1,8.27,1.1,4.37,4.37,0,0,0,1.34.24A3.46,3.46,0,0,0,67.6,51.5a3.54,3.54,0,0,0,1.07-2.57q0-2.05-5.7-3.6a30.05,30.05,0,0,0-7.54-1.24c-1.36,0-2.9.09-4.59.25s-3.57.43-5.6.78a3.81,3.81,0,0,0-1.76-.4,3.57,3.57,0,0,0-2.61,1,3.47,3.47,0,0,0-1,2.57c0,.69,0,1.72,0,3.1s0,2.42,0,3.1v30.1a3.62,3.62,0,0,0,1,2.56,3.23,3.23,0,0,0,2.47,1,4.07,4.07,0,0,0,2.74-1,3.21,3.21,0,0,0,1.2-2.54V68.15a31.1,31.1,0,0,1,6.61-1.21c.91,0,2.28.07,4.1.21s3.19.21,4.1.21a3.65,3.65,0,0,0,2.62-1A3.36,3.36,0,0,0,65.62,63.79Z"
                // fill="#fff"
                stroke="#fff"
                strokeMiterlimit="10"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                }}
              />
              <motion.rect
                x="15.09"
                y="13.63"
                width="118.52"
                height="105.43"
                rx="23.5"
                fill="none"
                strokeMiterlimit="10"
                strokeWidth="5"
                variants={rec}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  stroke: { duration: 2, ease: [1, 0, 0.8, 1] }
                }}
              />
              <motion.path
                d="M102.78,56a43.08,43.08,0,0,0-1.24-6.56q-1.38-4.36-4.25-4.36T92.9,48.87l-1.47,6Q88.87,64.24,85.87,72a134,134,0,0,1-3.45-14.76q-1.2-7.06-2.25-9.35a3.72,3.72,0,0,0-3.52-2.42,4.19,4.19,0,0,0-3.48,1.85c-.92,1.24-1.78,3.71-2.56,7.42-.53,2.7-1,5.4-1.55,8.09q-.21,1-2.92,10.16a37.6,37.6,0,0,0-1.81,10.38,3.74,3.74,0,0,0,.89,2.49,3.56,3.56,0,0,0,2.87,1.24c1.92,0,3.24-1.25,4-3.73q.48-2.94,1-5.91,2.13-8.59,3.31-12.84Q78,72.06,80,78.79l1.47,4.88c.87,1.94,2.14,2.92,3.78,2.92a4.31,4.31,0,0,0,3.89-2.45,27.24,27.24,0,0,0,2-4.7l1.58-4.83q2.73-7.53,3.91-11.06,1.47,8.85,2.73,13.58l1.47,6.36q1.4,4.1,4.25,4.09a4,4,0,0,0,2.6-.94A3.27,3.27,0,0,0,109,84c0-.47-.78-3.42-2.34-8.83A135,135,0,0,1,102.78,56Z"
                // fill="#fff"
                stroke="#fff"
                strokeMiterlimit="10"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                }}
              />
            </g>
          </g>
        </motion.svg>
      </div>
      :
      <>
        <div className={loader ? 'loader show' : 'loader'}>
          <HashLoader color='#f9d126' />
        </div>

        <div className={error ? 'error show' : 'error '} >
          <div className='alert red' >
            <img src={alert} alt="alert" />
            <p >Please make sure there are no blank fields.</p>
          <MdClose 
            onClick={() => setError(false)} 
            size={20} 
            color="#000"
            style={{position: 'absolute', right: 20, top: 20, cursor: 'pointer' }
          }/>
          </div>
        </div>

        <div className={success ? 'success show' : 'success '} >
          <div className='alert green' >
            <img src={successimg} alt="success" />
            <p >Message succesfully sent.</p>
          </div>
        </div>

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
            openSidebar={openSidebar}
            openToggle={() => setToggle(!toggle)}
            contact={contact}
          />
          <Routes>
            <Route path="/portfolio" element={
              <>
                <Home location={home} />
                <Works loading={loading} location={works} worksroute={false} onActiveTav={onActiveTav} tab={tab} resetWorks={resetWorks} />
                <About location={about} />
                <Contact
                  location={contact}
                  onSubmit={onSubmit}
                  loader={loader}
                  change={change}
                  onChange={onChange}
                />
                <Footer />
              </>}
            />
            <Route path="/portfolio/works" element={<Works loading={loading} worksroute={true} onActiveTav={onActiveTav} tab={tab} />} />
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

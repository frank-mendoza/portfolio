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
import HashLoader from 'react-spinners/HashLoader';

function App() {

  const inputContent = useRef()
  const inputEmail = useRef()
  const inputName = useRef()
  const [error, setError] = useState(false)
  const [toggle, setToggle] = useState(true)
  const [loader, setLoader] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
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


  const scriptURL = 'https://script.google.com/macros/s/AKfycbwEvTkvzO0dpDYgCtY1wEH6cC1EsfyZXyIVI7sPpOgIB06gFVUe6dMbsk8CsLkORppqhQ/exec'
  const form = document.forms['submit-to-google-sheet']

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
    console.log(change);
  }

  return (
    <>
      <div className={loader ? 'loader show' : 'loader'}>
        <HashLoader color='#fff' />
      </div>

      <div className={error ? 'error show' : 'error '} onClick={() => setError(false)}>
        <p className='alert red'>Please make sure there are no blank fields.</p>
      </div>

      <div className={success ? 'success show' : 'success '} onClick={() => setError(false)}>
        <p className='alert green' >Message succesfully sent.</p>
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
              <Works loading={loading} location={works} worksroute={false} onActiveTav={onActiveTav} tab={tab} />
              <About location={about} />
              <Contact
                location={contact}
                onSubmit={onSubmit}
                loader={loader}
                change={change}
                onChange={onChange}
                inputName={inputName}
                inputEmail={inputEmail}
                inputContent={inputContent}
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

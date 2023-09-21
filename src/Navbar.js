import React, { useState, useEffect } from 'react';
//rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const pdfUrl = './AditiR.pdf';
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'transparent'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#Home" style={{color:'rgb(152, 34, 34)',position: 'fixed',opacity:scrolled ? 0.5 : 1}}><strong>Home</strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item" style={{padding:10}}>
          <a className="nav-link active" aria-current="page" href="#About">About</a>
        </li>
        <li className="nav-item" style={{padding:10}}>
          <a className="nav-link active" aria-current="page" href="#skillsD">Skills</a>
        </li>
        <li className="nav-item" style={{padding:10}}>
          <a className="nav-link active" aria-current="page" href="#ProjD">Projects</a>
        </li>
        <li className="nav-item" style={{padding:10}}>
          <a className="nav-link active" aria-current="page" href="#Exp">Experience</a>
        </li>
        <li className="nav-item" style={{padding:10}}>
          <a className="nav-link active" aria-current="page" href={pdfUrl} download="Aditi Gorde-Resume">Resume</a>
        </li>
        <li className="nav-item" style={{padding:10}} >
          <a className="nav-link active" aria-current="page" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

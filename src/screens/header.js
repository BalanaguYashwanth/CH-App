import React from 'react'
import logo from '../images/logo.png'


export const Header = () =>{
    return (
      <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="main-nav">
             
             <a href="/" class="logo">
                 <img src={logo} alt="logo" /> 
              </a> 
              <ul className="nav">
                <li className="scroll-to-section"><a href="#top" class="active">Home</a></li> 
                <li className="scroll-to-section"><a href="#about">About</a></li>
                <li className="scroll-to-section"><a href="#explore">Explore</a></li>
                <li className="scroll-to-section"><a href="#explore">Communities</a></li>
                <li className="scroll-to-section"><div class="border-first-button"><a href="#connect-us">subscribe now</a></div></li>
              </ul>        
              <a class='menu-trigger'>
                  <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
    );
}
'use client';

import { useState } from 'react';
import Image from "next/image"
import "./Navigation.css"
import SmileFace from "../../../public/cara-sonriente.png"

export default function NavigationBar() {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <header className="">
      <nav className="px-10 py-4 md:px-32">
        <div className="main-elements">
          <a href="/">
            <Image
              src={SmileFace}
              alt="Neshz Ecommerce Logo"
              className="neshz-logo"
            />
          </a>
          <div className="hamburger" onClick={toggleNavLinks}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <ul className={`nav-links ${showNavLinks ? "show" : ""}`}>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className='feather feather-shopping-cart hover:text-yellow-400'
              >
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 17h-11v-14h-2"></path>
                <path d="M6 5l14 1l-1 7h-13"></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
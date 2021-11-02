import { useState } from 'react';

function SideNav() {

  let [open, setOpen] = useState(false);

  let toggleNav = () => {
    setOpen(!open);
  }

  return (
    <>
      <nav id="side-nav" className={"" + (open ? "open" : "")}>
        <button id="toggle-nav" onClick={toggleNav}>
          {open ? "ᐊ" : "ᐅ"}
        </button>
        <ul>
          <li>
            <a href="#title-card">Driving in the Dark</a>
          </li>
          <li>
            <a href="#section-2">Section 2</a>
          </li>
          <li>
            <a href="#section-3">Section 3</a>
          </li>
          <li>
            <a href="#section-4">Section 4</a>
          </li>
        </ul>
      </nav>
      <div id="side-nav-overlay" className={open ? "visible" : ""}></div>
    </>
  )
}

export default SideNav;
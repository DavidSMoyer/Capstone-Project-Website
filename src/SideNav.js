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
            <a href="#section-2">Dangers of Driving in the Dark</a>
          </li>
          <li>
            <a href="#section-3">Crashes Based on Time of Day</a>
          </li>
          <li>
            <a href="#section-4">Safety Measures</a>
          </li>
          <li>
            <a href="#quiz">Test Your Knowledge</a>
          </li>
          <li>
            <a href="#bibliography">Bibliography</a>
          </li>
        </ul>
      </nav>
      <div id="side-nav-overlay" className={open ? "visible" : ""}></div>
    </>
  )
}

export default SideNav;
import { Link } from 'react-router-dom';

function SideNav() {

  let [open, setOpen] = useState(false);

  return (
    <nav id="side-nav" className={"" + (open ? "open" : "")}>
      <button id="toggle-nav">Close</button>
      <ul>
        <li>
          <Link to="">Link 1</Link>
        </li>
        <li>
          <Link to="">Link 2</Link>
        </li>
        <li>
          <Link to="">Link 3</Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideNav;
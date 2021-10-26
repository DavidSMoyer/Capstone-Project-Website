import './App.css';
import SideNav from './SideNav.js';
import Stats from './Stats.js';

function App() {
  return (
    <>
      <SideNav />
      <section id="title-card">
        <h1>Driving in the Dark</h1>
        <h2>And the dangers and challenges it presents.</h2>
      </section>
      <section id="section-2"></section>
      <section id="section-3">
        <Stats />
      </section>
      <section id="section-4"></section>
      <section id="quiz"></section>
    </>
  );
}

export default App;

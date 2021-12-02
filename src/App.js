import './App.css';
import SideNav from './SideNav.js';
import Stats from './Stats.js';
import Quiz from './Quiz.js';

function App() {
  return (
    <>
      <SideNav />
      <section id="title-card">
        <h1>Driving in the Dark</h1>
        <h2>And the dangers and challenges it presents.</h2>
      </section>
      <section id="section-2">
        <h2>Dangers of Driving in the Dark</h2>
        <p>
          In the dark, it is a lot harder to see your surroundings, especially outside of the city where there 
          are no streetlights. This can affect visibility, even with the headlights from vehicles, and affect a
          driver's depth preception. Additionally, there is the danger of impaired drivers. At night, it is much
          more likely that drivers could be driving drunk or tired, which can affect their driving and make them
          a hazard to other drivers. It is generally more dangerous to drive in the night, so it should be
          avoided when possible. However, it isn't always avoidable, and there are ways to keep yourself safe
          in the night.
        </p>
        <p>
          To help increase visibility, drivers must have their headlights on half an hour before sunset and half
          an hour after sunrise. However, you are required by law to dim your headlights when within 200 meters
          of oncoming traffic or when within 60 meters behind traffic going the same way you are. 
        </p>
      </section>
      <section id="section-3">
        <Stats />
      </section>
      <section id="section-4">
        <h2>Driving Safety Questions</h2>
        <p>
          While it is dangerous to be driving in the night, there are a variety of different things that you can
          do to ensure your safety. To protect yourself while driving in the night, you can;
        </p>
        <ul>
          <li>Dim your dashboard</li>
          <li>Look away from oncoming lights</li>
          <li>Drive at slower speeds than usual</li>
          <li>Minimize any and all distractions</li>
          <li>Ensure you are alert at all times</li>
          <li>Keep an eye out for drivers that may be impaired</li>
          <li>Do not drive if you are drowsy</li>
          <li>If you are not fit to drive, find alternative transportation</li>
        </ul>
        <p>
          Doing any of these things can reduce the chance that you are in a collision in the dark, and ultimately
          keep you and everyone around you safe.
        </p>
      </section>
      <section id="quiz">
        <h2>Test Your Knowledge</h2>
        <Quiz />
      </section>
    </>
  );
}

export default App;

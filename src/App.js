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
        <h2>Crashes Based on Time of Day</h2>
        <Stats />
        <p>
          As you can see above, a majority of crashes occur between 4pm - 8pm. This is typically when many people are
          getting off of work, which can leave them antsy to get home, or they could be irrational due to having a bad
          day.
        </p>
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
      <section id="bibliography">
        <h2>Sources Used:</h2>
        <ul>
          <li><a href="https://www.linkedin.com/pulse/dangers-driving-dark-peter-cattell" target="_blank">The dangers of driving in the dark</a></li>
          <li><a href="https://www.nsc.org/road-safety/safety-topics/night-driving"  target="_blank">The Most Dangerous Time to Drive</a></li>
          <li><a href="https://elgphx.com/the-dangers-of-driving-in-the-dark-in-arizona/" target="_blank">The Dangers Of Driving In The Dark In Arizona</a></li>
          <li><a href="https://blog.disabilitycanhappen.org/safety-tips-for-driving-in-the-dark/" target="_blank">Tips to Keep Safe on the Road When Driving in the Dark</a></li>
          <li><a href="https://seriousaccidents.com/legal-advice/top-causes-of-car-accidents/nighttime-driving/" target="_blank">Night Driving</a></li>
          <li><a href="https://injuryfacts.nsc.org/motor-vehicle/overview/crashes-by-time-of-day-and-day-of-week/" target="_blank">Crashes by Time of Day and Day of Week</a></li>
          <li><a href="https://www.vititoelawgroup.com/2016/12/10/a_closer_look_at_car_accident_statistics_at_night/" target="_blank">A Closer Look at Car Accident Statistics at Night</a></li>
          <li><a href="https://www.ddlawtampa.com/resources/car-accident-statistics-you-need-to-know-in-2021/" target="_blank">CAR ACCIDENT STATISTICS YOU NEED TO KNOW IN 2021</a></li>
        </ul>
      </section>
    </>
  );
}

export default App;

import React from "react";
import './Schedule.scss';

function Schedule() {
  return (
    <div className="Schedule">
      <section id="schedule-block">
        <div className="schedule-countdown">
          <div>
            <h3>
              00 HRS
            </h3>
            <h3>
              00 MIN
            </h3>
            <h3>
              00 SEC
            </h3>
          </div>
          <div className="schedule-countdown-border"></div>
        </div>
      </section>
      <section id="credits">
        <p>Made with <a href="https://en.wikipedia.org/wiki/Anteater">&hearts;</a> in Irvine, CA</p>
      </section>
    </div>
  );
}

export default Schedule;

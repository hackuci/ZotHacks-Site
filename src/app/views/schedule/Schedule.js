import React from "react";
import './Schedule.scss';

import { motion } from "framer-motion"

import butterflyOne from "assets/images/butterflyOne.png"
import butterflyTwo from "assets/images/butterflyTwo.png"
import { scheduleData } from "../../../assets/data/schedule-data";
import { LeafRain } from "../../components";

function Schedule() {
  return (
    <div className="Schedule">
      <LeafRain/>
      <section id="schedule-block">
        <div className="schedule-countdown">
          <motion.img 
            className="mentors-butterfly --one" 
            src={butterflyOne}
            animate={{
              rotate: [1,3,2,5,1,2,3,1],
            }}
            transition={{
              duration: 1,
              loop: Infinity,
              ease: "easeInOut",
              repeatDelay: 5
            }}
          />
          <h2>Schedule</h2>
          <motion.img 
            className="mentors-butterfly --two" 
            src={butterflyTwo}
            animate={{
              rotate: [1,3,2,5,1,2,3,1],
            }}
            transition={{
              duration: 1,
              loop: Infinity,
              ease: "easeInOut",
              repeatDelay: 5,
              delay: 3,
            }}
          />
        </div>
      </section>
      <section id="schedule-cards">
        {scheduleData.map(function(schedule, i) {
          return (
          <div className="schedule-card" key={i}>
            <h3>{schedule.day}</h3>
            {schedule.events.map(function(event, j) {
              return (
              <div className="schedule-card-event">
                <h4>
                  {event.name}
                </h4>
                <p>
                  {event.time}
                </p>
              </div>
              );
            })}
          </div>
          );
        })}
      </section>
      <section id="credits">
        <p>Made with <a href="https://en.wikipedia.org/wiki/Anteater">&hearts;</a> in Irvine, CA</p>
      </section>
    </div>
  );
}

export default Schedule;

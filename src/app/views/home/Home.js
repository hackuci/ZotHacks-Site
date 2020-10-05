import React from "react"
import "./Home.scss"
import { faqQuestions } from "assets/data/faq-questions"

import { Button } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import { motion } from "framer-motion"

import { FAQCollapse } from "app/containers"
import zothacksSucc from "assets/images/zothacksucc.png"
import bubbles from "assets/images/bubbles.png"
import mentorship from "assets/images/mentorship.png"
import butterflyOne from "assets/images/butterflyOne.png"
import butterflyTwo from "assets/images/butterflyTwo.png"

function Home() {
  return (
    <div className="Home">
      <section id="intro">
        <div className="intro-wrapper">
          <div className="title-info">
            <Fade duration={1000} left>
              <div>
                <h1>ZotHacks</h1>
                {/* <h4>November 13-14th</h4> */}
                <h4>Date to be revealed!</h4>
                <a href="https://tinyurl.com/zothacks2019">
                  <Button
                    style={{
                      borderRadius: "50px",
                      width: "100px",
                      backgroundColor: "#F95C6F",
                      height: "40px",
                    }}
                  >
                    Apply
                  </Button>
                </a>
              </div>
            </Fade>
            <div className="zucc-wrapper">
              <motion.img
                className="zucc-butterfly"
                src={butterflyTwo}
                animate={{
                  rotate: [1, 3, 2, 5, 1, 2, 3, 1],
                  y: [20, 10, 20],
                }}
                transition={{
                  duration: 5,
                  loop: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                className="succulent"
                src={zothacksSucc}
                animate={{
                  y: [20, 10, 20],
                }}
                transition={{
                  duration: 5,
                  loop: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="zucc-shadow"
                animate={{
                  scale: [1.3, 1, 1.3],
                  y: [-15, -15, -15]
                }}
                transition={{
                  duration: 5,
                  loop: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </div>
        <svg
          className="wave-transition"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#fcfcfc"
            fill-opacity="1"
            d="M0,224L48,208C96,192,192,160,288,138.7C384,117,480,107,576,128C672,149,768,203,864,208C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section id="info">
        <img src={bubbles} />
        <div>
          <Fade duration={1000}>
            <h2>What is ZotHacks?</h2>
            <p>
              ZotHacks is a beginner-friendly hackathon where students with
              minimal computer science experience will learn to build and build
              their first CS project. Through ZotHacks, we introduce these
              students to the world of hackathons and web development by
              providing technical workshops, strong mentorship, and free food!
            </p>
          </Fade>
        </div>
      </section>
      <section id="mentors">
        <img className="mentors-butterfly --one" src={butterflyOne} />
        <div>
          <img src={mentorship} />
          <div className="mentor-information">
            <h3>Interested in becoming a mentor?</h3>
            <p>
              If you love the hackathon experience and would love to share it
              with new developers, apply to be a mentor!
            </p>
            <Button
              style={{
                borderRadius: "50px",
                width: "200px",
                backgroundColor: "#F95C6F",
                height: "40px",
              }}
            >
              Apply to be a Mentor
            </Button>
          </div>
        </div>
        <img className="mentors-butterfly --two" src={butterflyTwo} />
      </section>
      <section id="faq">
        <svg
          className="wave-transition"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fcfcfc"
            fill-opacity="1"
            d="M0,96L60,101.3C120,107,240,117,360,112C480,107,600,85,720,74.7C840,64,960,64,1080,80C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <Fade duration={1000}>
          <h2>FAQ</h2>
          <div>
            {faqQuestions.map(function (item, index) {
              return (
                <FAQCollapse
                  question={item.question}
                  answer={item.answer}
                  key={index}
                />
              )
            })}
          </div>
        </Fade>
      </section>
      <section id="credits">
        <p>
          Made with{" "}
          <a href="https://en.wikipedia.org/wiki/Anteater">&hearts;</a> in
          Irvine, CA
        </p>
      </section>
    </div>
  )
}

export default Home

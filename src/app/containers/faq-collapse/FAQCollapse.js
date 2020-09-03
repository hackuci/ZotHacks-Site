import React, { useState } from "react"
import "./FAQCollapse.scss"

import { Plus, Minus } from "react-feather"
import Fade from "react-reveal/Fade"

function FAQCollapse({ question, answer }) {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div className="faq-collapse">
      <div className="faq-collapse-question">
        <h3>{question}</h3>
        {!isOpened ? (
          <Plus onClick={() => setIsOpened(!isOpened)}/>
        ) : (
          <Minus onClick={() => setIsOpened(!isOpened)} />
        )}
      </div>
      <div className="faq-collapse-divider" />
      {isOpened ? (
        <Fade duration={500} left>
          <p>{answer}</p>
          <div className="faq-collapse-divider" />
        </Fade>
      ) : null}
    </div>
  )
}

export default FAQCollapse

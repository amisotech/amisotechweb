import React from 'react'
import Navbar from './Navbar'
import "../assets/scss/getaquote.css"
function GetAQuote() {
  return (
    <div >
        <Navbar/>
        <div className="getaquote-container">
      <div className="iframe-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScVU5KugwJ9ly18vxZ_ph5I-h-wjlJ-dBaYn8o7TL_god4LXA/viewform?embedded=true"
          title="Quote Form"
          height="1000"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
    </div>
  )
}

export default GetAQuote
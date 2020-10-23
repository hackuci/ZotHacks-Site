import React from "react"
import "./StarterPacks.scss"

function StarterPacks() {
  return (
    <div className="StarterPacks">
      <h2>Starter Packs</h2>
      <section className="starter-pack-block">
        <h3>API Resources</h3>
        <p>
          Application Programming Interface (API) are interfaces or
          communication protocol that simplifies implementation and maintenance
          of software. In order to access most API's, many languages support
          HTTP protocol to communicate with the servers that host the API that
          retrieve data.
        </p>
        <h4>Spotify API</h4>
        <p>
          API that retrieves data on Spotify music, playlists, artists, and
          users.
        </p>
        <ul>
          <li>
            <a href="https://developer.spotify.com/documentation/web-api/">Spotify Web API Reference</a>
          </li>
        </ul>
        <h4>Twitter API</h4>
        <p>API that retrieves data on tweets and trends.</p>
        <ul>
          <li>
            <a href="https://developer.twitter.com/en/docs/twitter-api">Twitter Web API Reference</a>
          </li>
        </ul>
        <h4>Google Cloud API</h4>
        <p>
          API that allows users to access Google services such as storage access
          and machine-learning.
        </p>
        <ul>
          <li>
            <a href="https://cloud.google.com/apis">Google Cloud API Reference</a>
          </li>
        </ul>
      </section>
      <section id="starter-pack-block">
        <h3 style={{marginTop: "2rem"}}>Backend Framework Resources</h3>
        <p>
          Backend frameworks are functional code skeletons that allows you to
          build custom REST APIs on your own server to store data, perform
          functions, and utilize templated tools.
        </p>
        <ul>
          <li>
            <a href="https://flask.palletsprojects.com/en/1.1.x/api/">Flask API Reference</a>
          </li>
          <li>
            <a href="https://github.com/hackuci/zothacks-2020-backend">Flask Backend Workshop Template</a>
          </li>
        </ul>
        {/* <h4>Flask</h4>
        <p>
          A quick lightweight backend framework in Python. Build a quick REST
          server and serve HTML/CSS frontend tmeplates.
        </p> */}
      </section>
    </div>
  )
}

export default StarterPacks

import React from 'react'
import Info from "../components/home/Info"
import Services from "../components/home/Services"
import Teams from "../components/home/Teams"
import Contact from "../components/Contact"

function Home() {
  return (
    <div>
      <Info />
      <Services />
      <Teams />
      <Contact />
    </div>
  )
}

export default Home
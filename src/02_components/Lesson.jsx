import React, { Component } from 'react'

function Welcome() {
  return (<h3>Hello World</h3>);
}

class SuperWelcome extends Component {
  render() {
    return (
      <h3>Super Welcome</h3>
    )
  }
}

function Lesson() {
  return (
    <div>
      <Welcome/>
      <SuperWelcome/>
    </div>
  )
}

export default Lesson;
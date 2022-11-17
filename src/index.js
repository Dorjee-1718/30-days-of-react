// index.js
//import { render } from '@testing-library/react';
import React from 'react'
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
// To get the root element from the HTML document
import pic from './images/nba.jpeg'

// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li key = {tech}>{tech}</li>)

const user = (
  <div>
    <img src={pic} alt='nba pic'/>
  </div>
)

const tech_images = (
  <div className='tech-images'>
    <h2>Front End Technologies</h2>
    <div className='flex-container'>

        <img src = {require('./images/html_logo.png')} alt = 'html_logo'></img>

        <img src = {require('./images/css_logo.png')} alt = 'html_logo'></img> 
    
        <img src = {require('./images/react_logo.png')} alt = 'html_logo'></img> 
    
    </div>

  </div>
)

const form = (
  <div className='form'>
    <h2>SUBSCRIBE</h2>
    <p>Sign up with your email address to receive news and updates.</p>
    <div className='input-container'>
      <form>
        <input type= 'text' placeholder='First name'/>
        <input type= 'text' placeholder='Last name'/>
        <input type= 'text' placeholder='Email'/>
        <div>
          <input type='reset' value='Subscribe' />
        </div>
      </form>
    </div>
  </div>
)

const interests = ['Travelling', 'Foodie', 'Cycling', 'Swimming', 'Basketball', 'Trekking',
'Cooking', 'Movies', 'Camping', 'Coding', 'Sneakers', 'Technology', 'Culture', 'Charity',
'Football', 'Adventure', 'Gardening', 'Music', 'Photography', 'Fashion', 'Art']

const interestsFormatted = interests.map((interest) => <li key={interest}>{interest}</li>)

const joinedDate = 'Sep 18, 2022'

const card = (
  <div className='user-card'>
    <div className='user-pic'>
      <img src = {require('./images/profile.png')} alt = 'kobe'/>
    </div>
    
    <div className='verified'>
      <h4>RAM BAHADUR THAPA</h4>
      <img img src={require('./images/verified_logo.png')} alt = 'verified'/>
    </div>
    <p>Undergraduate, Nepal</p>
    <h4>HOBBIES</h4>
    <div className='hobbies-container'>
      <ul>
        {interestsFormatted}
      </ul>
    </div>
    <div className='joined-container'>
      <img src={require('./images/clock_icon.png')} alt='clock'/>
      <p>
        Joined on {joinedDate}
      </p>
    </div>
  </div>
)


// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
      {tech_images}
      {form}
      {card}
      
    </div>
  </main>
)

const copyRight = 'Copyright 2022'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    {app}
  </StrictMode>
);


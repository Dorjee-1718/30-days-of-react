// index.js
//import { render } from '@testing-library/react';
import React from 'react'
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
// To get the root element from the HTML document
import user_pic from './images/profile.png'
import html_logo from './images/html_logo.png'
import css_logo from './images/css_logo.png'
import react_logo from './images/react_logo.png'
import verified_logo from './images/verified_logo.png'
import clock_icon from './images/clock_icon.png'




const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

//React component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: {firstName, lastName},
    date
  }
}) => {
  return (
    <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {firstName} {lastName}
      </p>
      <small>{showDate(date)}</small>
    </div>
  </header>
  )
}

const Result = (props) => (
  <p>
    {props.numOne} + {props.numTwo} = {props.numOne + props.numTwo}
  </p>
)


const age = () => {
  const yearBorn = 1820
  const currentYear = new Date().getFullYear()

  return currentYear - yearBorn
}

const PersonAge = (props) => (
  <p>
    {props.firstName} {props.lastName} is {age()} years old.
  </p>
)

const TechsFormatted = ({techs}) =>( techs.map((tech) => <li key = {tech}>{tech}</li>))

const User = ({user_image}) => (
  <div>
    <img src={user_image} alt='nba pic'/>
  </div>
)

const TechImages = ({techImages: {html, css, react}}) => (
  <div className='tech-images'>
    <h2>Front End Technologies</h2>
    <div className='flex-container'>

        <img src = {html} alt = 'html_logo'></img>

        <img src = {css} alt = 'css_logo'></img> 
    
        <img src = {react} alt = 'react_logo'></img> 
    
    </div>

  </div>
)

const Form = () => (
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

const Card = ({user: {firstName, lastName, stylePic, profileImage, verifiedLogo, 
  clockIcon, joinedDate}}) => (
  <div className='user-card'>
  {/*
    <div className='user-pic'>
      <img src = {require('./images/profile.png')} alt = 'kobe'/>
    </div>
  */}
    <img src={profileImage} style = {stylePic} alt = 'Kobe'/>
    
    <div className='verified'>
      <h4>{firstName} {lastName}</h4>
      <img img src={verifiedLogo} alt = 'verified'/>
    </div>
    <p>Undergraduate, Nepal</p>
    <h4>HOBBIES</h4>
    <div className='hobbies-container'>
      <ul>
        {interestsFormatted}
      </ul>
    </div>
    <div className='joined-container'>
      <img src={clockIcon} alt='clock'/>
      <p>
        Joined on {joinedDate}
      </p>
    </div>
  </div>
)

const hexaColor = () => {
  let str = '0123456689abcdef'
  let color = ''
  for (let i = 0; i < 6; i++){
    let index = Math.floor(Math.random() * 10)
    color += str[index]
  }
  return '#' + color
}

const colors = [hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor()]

//React component
const HexaColor = () => (
  <div className='hexa-container'>
      <div style={{backgroundColor: `${colors[0]}`}}>{colors[0]}</div>
      <div style={{backgroundColor: `${colors[1]}`}}>{colors[1]}</div>
      <div style={{backgroundColor: `${colors[2]}`}}>{colors[2]}</div>
      <div style={{backgroundColor: `${colors[3]}`}}>{colors[3]}</div>
      <div style={{backgroundColor: `${colors[4]}`}}>{colors[4]}</div>
    </div>
  
)

const Main = ({techs, numOne, numTwo, techImages, user}) =>{
  return(
    <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul><TechsFormatted techs = {techs}/></ul>
      <Result numOne = {numOne}  numTwo = {numTwo} />
      <PersonAge firstName = "Ram" lastName = "Bahadur Thapa"/>
      <User user_image={user_pic}/>
      <TechImages techImages = {techImages}/>
      <Form/>
      <Card user = {user}/>
      <HexaColor/>
      
    </div>
  </main>
  )
}
  

const copyRight = 'Copyright 2022'

const Footer = () =>(
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

//React component, App
const App = () =>{
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Ram',
      lastName: 'Bahadur Thapa',
    },
    date: new Date(), // date needs to be formatted to a human readable format
  }

  let numOne = 5
  let numTwo = 20

  const techs = ['HTML', 'CSS', 'JavaScript']

  const techImages = {
    html: html_logo, 
    css: css_logo, 
    react: react_logo
  }

  const user = {...data.author, 
    stylePic: {
      width: '200px',
      height: '200px',
      borderRadius: '50%'
    },
    profileImage: user_pic, 
    verifiedLogo: verified_logo, 
    clockIcon: clock_icon,
    joinedDate: 'Sep 18, 2022'
  }

  return(
    <div className='app'>
    <Header data={data}/>
    <Main techs = {techs} 
      numOne = {numOne}
      numTwo = {numTwo}
      techImages = {techImages}
      user = {user}
    />
    <Footer/>
  </div>
  )
}

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);


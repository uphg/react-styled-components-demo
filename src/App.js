import logo from './logo.svg'

import styled, { keyframes } from 'styled-components'

const Title = styled.h1`
  color: #ffffff;
`

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Img = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${AppLogoSpin} infinite 20s linear;
`

const AppContent = styled.div`
  text-align: center;
`

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const AppLink = styled.a`
  color: #61dafb;
`

function App() {
  return (
    <AppContent>
      <AppHeader>
        <Img src={logo}></Img>
        <Title>你好</Title>
        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </AppContent>
  )
}

export default App

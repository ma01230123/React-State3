import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PrimaryButton } from './components/atoms/button/PrimaryButton'
import { SecondaryButton } from './components/atoms/button/SecondaryButton'
import { SeachInput } from './components/molecules/SeachInput'
import { UserCard } from './components/organisms/user/UserCard'
import { HeaderOnly } from './components/templates/HeaderOnly'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom'
import { DefaultLayout } from './components/templates/DefaultLayout'
import { Router } from './router/Router'
import { UserProvider } from './providers/UseProvider'


const user = {
  name:"じゃ",
  // image:'https://picsum.photos/id/40/200/200',
  image:'/assets/premium_photo.avif',
  email:'bbb@aaa.com',
  phone:'11-1111-1111',
  company:{
    name:'あああ',
  },
  website:'https'
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <UserProvider>
        <Router />
      </UserProvider>
    </>
  )
}

export default App

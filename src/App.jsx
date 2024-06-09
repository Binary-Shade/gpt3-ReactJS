import './App.css'
import { Footer, Header, Possiblity, WhatGPT3, Blog, Features } from './containers'
import { Article, Brand, Cta, Navbar} from './components'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possiblity />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App

import './App.css';
import Tabbed from './components/Tabbed'



const content = [
  {
    id:1,
    tittle: 'React is the library for web and native user interfaces.', 
    description: 'React components receive data and return what should appear on the screen. You can pass them new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data.'
  },
  {
    id:2,
    tittle: 'React can use standard web APIs to keep your UI responsive even in the middle of rendering.', 
    description: 'Frameworks that implement it let you fetch data in asynchronous components that run on the server or even during the build. Read data from a file or a database, and pass it down to your interactive components.'
  },
  {
    id:3,
    tittle: 'React is also an architecture.', 
    description: 'React lets you build both web apps and native apps using the same skills. It leans upon each platform’s unique strengths to let your interfaces feel just right on every platform.'
  }
]

function App() {
 
  return (
    <>
      <Tabbed content={content}/>
    </>
  )
}

export default App

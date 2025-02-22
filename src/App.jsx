import './App.css'
import Navbar from './components/navbar/Navbar'


function App() {

  let cardinfo = {
    image:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    firstName:"Barbare",
    lastName:"Gogua",
  }

  return (
    <>
    <Navbar/>
    <Card info={cardinfo}/>

    

    </>
  )
}

export default App

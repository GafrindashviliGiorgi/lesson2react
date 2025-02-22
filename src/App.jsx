import './App.css'

function App() {

  let cardinfo = {
    image:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    firstName:"Barbare",
    lastName:"Gogua",
  }

  return (
    <>
      <div className="card">
        <img src={cardinfo.image} alt="" />
        <h4>{cardinfo.firstName}</h4>
        <h5>{cardinfo.lastName}</h5>
      </div>
    </>
  )
}

export default App

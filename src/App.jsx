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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae iste numquam nam minima, dolorum nulla animi fuga quas reprehenderit aliquid, ratione laborum pariatur adipisci quaerat suscipit? Quisquam, ratione consequuntur?</p>
      </div>
    </>
  )
}

export default App

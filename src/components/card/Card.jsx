export default function Card({info}) {
  return (
    <div className="card">
    <img src={info.image} alt="" />
    <h4>{info.firstName}</h4>
    <h5>{info.lastName}</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae iste numquam nam minima, dolorum nulla animi fuga quas reprehenderit aliquid, ratione laborum pariatur adipisci quaerat suscipit? Quisquam, ratione consequuntur?</p>
  </div>
  )
}

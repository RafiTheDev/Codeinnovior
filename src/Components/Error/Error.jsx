import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div>
        <div className="flex justify-center items-center  min-h-screen border-2">
      <h1 className="text-5xl font-extrabold ">Oops!  </h1>
      <p>  Sorry, an unexpected error has occurred.</p>

      <div className="flex justify-center mt-5 ">
      <Link to={'/'}className="btn">Home</Link>

      </div>
      
    </div>
    </div>
  )
}

export default Error
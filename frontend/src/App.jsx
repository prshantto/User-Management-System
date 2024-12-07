import Topbar from "./components/topbar"
import UserCard from "./components/UserCard"



function App() {

  return (
    <>
      <Topbar/>
      <div className='h-full w-full grid grid-cols-4 p-2'>
        <UserCard name={"prashant"} email={"prashant@12fbfbifhbishb3"} phone={"123456789"} website={"prashant.tech"}/>
      </div>
    </>
  )
}

export default App

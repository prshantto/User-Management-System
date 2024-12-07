import Topbar from "./components/topbar"
import UserCard from "./components/UserCard"



function App() {

  return (
    <>
      <Topbar/>
      <div className='h-full w-full p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        <UserCard name={"prashant"} email={"prashant@12fbfbifhbishb3"} phone={"123456789"} website={"prashant.tech"}/>
        <UserCard name={"prashant"} email={"prashant@12fbfbifhbishb3"} phone={"123456789"} website={"prashant.tech"}/>
        <UserCard name={"prashant"} email={"prashant@12fbfbifhbishb3"} phone={"123456789"} website={"prashant.tech"}/>
        <UserCard name={"prashant"} email={"prashant@12fbfbifhbishb3"} phone={"123456789"} website={"prashant.tech"}/>
        <UserCard name={"prashant"} email={"prashant@12fbfbifhbishb3"} phone={"123456789"} website={"prashant.tech"}/>
        <UserCard name={"prashant"} email={"prashant@12fbfbifhbishb3"} phone={"123456789"} website={"prashant.tech"}/>
        <UserCard name={"prashant"} email={"prashant@12fbfbifhbishb3"} phone={"123456789"} website={"prashant.tech"}/>
        <UserCard name={"prashant"} email={"prashant@12fbfbifhbishb3"} phone={"123456789"} website={"prashant.tech"}/>
        <UserCard name={"prashant"} email={"prashant@12fbfbifhbishb3"} phone={"123456789"} website={"prashant.tech"}/>
        <UserCard name={"prashant"} email={"prashant@12fbfbifhbishb3"} phone={"123456789"} website={"prashant.tech"}/>
        <UserCard name={"prashant"} email={"prashant@12fbfbifhbishb3"} phone={"123456789"} website={"prashant.tech"}/>

      </div>
    </>
  )
}

export default App

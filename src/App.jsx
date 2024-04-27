import Details from "./components/details/Details";
import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Login from './components/login/Login';
import Notification from "./components/notification/Notification";

const App = () => {

  const user = true

  return (
    <div className='container'>
    {
      user ? (
      <>  
        <List />
        <Chat />
        <Details />
      </>
      ) : (
      <Login/>
      )
    }
    <Notification />
      
    </div>
  )
}

export default App

// 1:19:30 hrs
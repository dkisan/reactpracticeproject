import { useState } from 'react'
import './App.css'
import Userform from './components/Userform'
import Overlaycomponent from './components/Overlaycomponent'
import Username from './components/UserName'

function App() {
  const [isInvalid, setIsinvalid] = useState(false)
  const [isInvalidmsg, setIsinvalidmsg] = useState('')
  const [user, setUser] = useState([])
  const isinvalidset = (a) => {
    setIsinvalidmsg(() => {
      return a
    })
    setIsinvalid(() => {
      return true
    })
  }

  const isinvalidunset = (a) => {
    setIsinvalidmsg(() => {
      return a
    })
    setIsinvalid(() => {
      return false
    })
  }

  const addUser = (u) => {
    setUser((prevuser) => {
      return [u, ...prevuser]
    })
  }

  return (
    <>
      <div className='container'>
        <Userform isinvalidset={isinvalidset} isinvalidunset={isinvalidunset} addUser={addUser} />
      </div>
      {user.length > 0 && <div className='container'>
        {
          user.map(u => {
            return <Username data={u} key={u.id} />
          })
        }
      </div>}
      {isInvalid && <Overlaycomponent isinvalidunset={isinvalidunset} msg={isInvalidmsg} />}
    </>
  )
}

export default App

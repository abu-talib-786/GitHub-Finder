import { useContext, useState } from "react"
import GitHubContext from "../../Context/github/GitHubContext"
import AlertContext from "../../Context/alert/AlertContext"
import { searchUsers } from "../../Context/github/GitHubActions"


function UserSearch() {
const [text, setText] = useState('')

const {users, dispatch,} = useContext(GitHubContext)

const {setAlert} = useContext(AlertContext)

const handleChange = (e) => setText(e.target.value)
const handleSubmit = async (e) => {
    e.preventDefault() 
    if (text === '') {
        return setAlert('please enter something', 'error' )
    } else {
        dispatch({type: 'SET_LOADING' })
        const users = await searchUsers(text)
        dispatch({type: 'GET_USERS', payload: users})
        
        setText ('')
    }
}


  return (
    <div className="text-white grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
            <div className="from-control">
                <div className="relative">
                    <input type="text" placeholder="search" value={text} onChange={handleChange} className="w-full pr-40 bg-gray-200 input input-lg text-black" />
                    <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">Go</button>
                </div>
            </div>
        </form>
      </div>
      {users.length > 0 && (
          <div>
          <button onClick={() => dispatch({type: 'CLEAR_USERS'})} className="btn btn-ghost btn-lg">
          clear
          </button>
        </div>
      )}
    </div>
  )
}

export default UserSearch

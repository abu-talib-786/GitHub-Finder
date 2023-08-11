import propTypes from 'prop-types'
import RepoItem from './RepoItem'

function ReposList({ repos }) {
  return (
    <div className='rounded-lg shadow-lg card bg-neutral '>
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
            Latest repositories
        </h2>
        {repos.map((repo) => (
         <RepoItem key={repo.id} repo={repo}/>
        ))}
      </div>
    </div>
  )
}

ReposList.propTypes = {
    repos: propTypes.array.isRequired
}

export default ReposList

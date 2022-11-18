import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Loading = () => {
    return (
        <div className='page-status'>
            <FontAwesomeIcon icon={faSpinner} size='5x' spin />
            <h1>Loading</h1>
        </div>
    )
}

export default Loading

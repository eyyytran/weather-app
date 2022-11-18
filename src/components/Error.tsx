import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const Error = () => {
    return (
        <div className='page-status'>
            <FontAwesomeIcon icon={faTriangleExclamation} size='5x' />
            <h1>Oh No! Something went Wrong!</h1>
        </div>
    )
}

export default Error

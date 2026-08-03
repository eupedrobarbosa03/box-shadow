import './css/ReturnHome.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const ReturnHome = () => {
  return (
    <a className='button-return-home' href='#'>
        <FontAwesomeIcon icon={faArrowUp} />
    </a>
  )
}

export default ReturnHome
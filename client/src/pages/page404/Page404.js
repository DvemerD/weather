import { Link } from 'react-router-dom';

import './page404.scss';

const Page404 = () => {
    return (
        <div className='not-found'>
            <div className='not-found__wrapper'>
                <h1 className='not-found__code'>404</h1>
                <div className='not-found__text'>Oops! This Page Could Not Be Found</div>
                <Link to="/">
                    <div className='not-found__btn'>GO TO HOMEPAGE</div>
                </Link>
            </div>
        </div>
    )
}

export default Page404;
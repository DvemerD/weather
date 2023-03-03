import { useHistory } from 'react-router-dom';

import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector';

import './buttonBack.scss';

const ButtonBack = () => {
    const history = useHistory();

    return (
        <div onClick={() => history.goBack()} 
              className="button__back">
            <button className="button__back-btn">
                <div>
                    <GlobalSvgSelector id={'arrow-back'} />   
                </div>
            </button>
            <div className="button__back-text">BACK</div>
        </div>
    )
}

export default ButtonBack;
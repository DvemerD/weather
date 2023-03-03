import Spinner from '../shared/spinner/Spinner';

const setContent = (process, Component, data) => {
    switch (process) {
        case 'waiting':
            return <div className="search__name">Choose city</div>;
        case 'loading':
            return <div className="spinner__wrapper"><Spinner /></div>;
        case 'confirmed':
            return <Component {...data} />;
        case 'error':
            return <div className="search__name">Loading error</div>;
        default:
            throw new Error('Unexpecte process state');
    }
}

export default setContent;
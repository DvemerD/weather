import GlobalSvgSelector from '../../../../assets/icons/GlobalSvgSelector';

const TwitterFeed = () => {
    return (
        <div className="twitter">
            <div className="twitter__header">
                <div className="twitter__icon">
                    <GlobalSvgSelector id={'twitter-icon'} />
                </div>
                <h2 className="twitter__title">Twitter Feed</h2>
                <div className="twitter__hashtag">#France</div>
            </div>
            <div className="twitter__list">
                <div className="twitter__list-item">
                    <div className="twitter__thumbnail">
                        <GlobalSvgSelector id={'twitter-thumbnail'} />
                    </div>
                    <p className="twitter__descr">Don't Forget your sunscreen tomorrow!</p>
                </div>
                <div className="twitter__list-item">
                    <div className="twitter__thumbnail">
                        <GlobalSvgSelector id={'twitter-thumbnail'} />
                    </div>
                    <p className="twitter__descr">Amazing weather in Paris!</p>
                </div>
            </div>
            <button className="twitter__btn">NEXT</button>
        </div>
    )
}

export default TwitterFeed;
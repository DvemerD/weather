import './statusMessage.scss';

const StatusMessage = ({ message, clearError }) => {
    

    return (
        <div className="status-message">
            <div className='notif notif-color-1 notif-active'>
                <p>{message}</p>
                <div className="notif-progress"></div>
            </div>
        </div>
    )
}

export default StatusMessage;
import React from 'react';

const Notification = ({message, type}) => {
    let className = '';
    switch(type) {
        case 'notification':
            className = 'notification';
            break;
        case 'error':
            className = 'notification notification-error'
            break;
        default:
    }
    return message && (
        <div className={className}>
            {message}
        </div>
    );
};

export default Notification;
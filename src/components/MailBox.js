import React from 'react';
import {Button} from 'reactstrap';
const MailBox = props => {
    const show = props.show;
    const messagesLength = props.messagesLength;
    const showMessages = props.showMessages;
    return (
        <div className="mt-3">
            {
                messagesLength > 0 &&
                    <h2>
                        You have {messagesLength} unread messages.
                        <Button className="ml-3" color="primary" onClick={showMessages}>{show ? 'Hide' : 'Show'} them</Button>
                    </h2>
            }
        </div>
    )
};

export default MailBox;
import { Link } from 'react-router';
import '/src/index.css';

const MailboxList = (props) => {
    return (
        <>
            <h1>Mailbox List</h1>
            <ul>
                {props.mailboxes.map((mailbox) => (
                    <li key={mailbox._id}>
                        <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id}>
                            <div className="mail-box">
                                <p>Mailbox {mailbox._id}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MailboxList;
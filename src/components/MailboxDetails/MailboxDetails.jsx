import { useParams } from 'react-router';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();

    const selectedBox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ));
    
    const selectedLetters = props.letters.filter((letter) => (
        letter.mailboxId === Number(mailboxId)
    ));
    
    if (!selectedBox) {
        return <div>Mailbox Not Found!</div>;
    }

    return (
        <>
            <h1>Mailbox {selectedBox._id}</h1>
            <h2>Details</h2>
            <p>Boxholder: {selectedBox.boxOwner}</p>
            <p>Box Size: {selectedBox.boxSize}</p>

            <h2>Letters:</h2>
            {selectedLetters.length === 0 ? (
                <p>No letters yet.</p>
            ) : (
                <ul>
                    {selectedLetters.map((letter, index) => (
                        <li key={index}>
                            <p>Dear {letter.recipient},</p>
                            <p>{letter.message}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default MailboxDetails;
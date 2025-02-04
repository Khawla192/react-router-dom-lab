import { useState } from 'react';
import { useNavigate } from 'react-router';

const LetterForm = ({mailboxes, addLetter}) => {
    const initialState = {
        mailboxId: mailboxes.length > 0 ? mailboxes[0]._id : '',   
        recipient: '',
        message: '',
    };
    
    const [letterData, setLetterData] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        addLetter(letterData);
        setLetterData(initialState);
        navigate(`/mailboxes/${letterData.mailboxId}`); 
    };

    const handleChange = ({ target }) => {
        setLetterData({ ...letterData, [target.name]: target.value });
    };

    return (
        <main>
            <h1>New Letter</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mailboxId">Select a Mailbox:</label>
                <select id="mailboxId" name="mailboxId" value={letterData.mailboxId} onChange={handleChange}>
                    {mailboxes.map((mailbox) => (
                    <option key={mailbox._id} value={mailbox._id}>
                        {mailbox._id}
                    </option>
                    ))}
                </select>

                <label htmlFor="recipient">Recipient:</label>
                <input type="text" placeholder="Recipient Name" id="recipient" name="recipient" value={letterData.recipient} onChange={handleChange} required />
                
                <label htmlFor="message">Message:</label>
                <textarea  type="text" placeholder="message" id="message" name="message" value={letterData.message} onChange={handleChange} required ></textarea>

                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default LetterForm;

import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
    boxSize: 'Small',
    boxOwner: '',
};

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addBox(formData);
        setFormData(initialState);
        navigate('/mailboxes'); 
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    return (
        <main>
            <h1>New Mailbox</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner">Enter a Boxholder:</label>
                <input type="text" id="boxOwner" name="boxOwner" value={formData.boxOwner} onChange={handleChange} />

                <label htmlFor="boxSize">Select a Box Size:</label>
                <select name="boxSize" id="boxSize" value={formData.boxSize} onChange={handleChange}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default MailboxForm;

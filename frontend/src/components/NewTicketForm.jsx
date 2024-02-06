import React, {useEffect, useRef, useState } from 'react'
import { enteredTodoFormIsNotEmpty } from '../utils/utils';
import { addTickets } from '../apis/ticket';



const NewTicketForm = ({closeAddModal, children}) => {

    const [userId, setUserId] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState('');
    const [isFormInvalid, setInvalid] = useState(true);
    const dateInputRef = useRef(null);


    const handleChange = (e) => {
        setDate(e.target.value);
    };

    // const addNewTicketHandler = () => {
    //     dispatch({type:'ADD', newTodo:{userId, description}})
    //     onClose();
    // }

    useEffect(() => {
        if (enteredTodoFormIsNotEmpty(userId, description)) {
            setInvalid(false);
        } else {
            setInvalid(true);
        }
    }, [userId, description]);


  return (
    <>
        <h3>New Ticket</h3>
        <form>
            <div>
                <label htmlFor="userId">UserID</label>
                <input type="text" id='UserID' onChange={event => setUserId(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea name="" id="description" rows="5" value={description} onChange={event => setDescription(event.target.value)}></textarea>
            </div>
            <div>
                <label htmlFor="expiredAt">ExpiredAt</label>
                <input type="date" onChange={handleChange} ref={dateInputRef} />
            </div>
            {isFormInvalid && <div className='mt-2 text-red-500'>모든 항목을 채워서 작성해주세요</div>}

            <div className='flex justify-end gap-4'>
                 <button type='button' onClick={() => closeAddModal}>Cancel</button>
                 <button type='button' onClick={() => addTickets({userId: userId, description: description, expiredAt: date })} disabled={isFormInvalid}>Add Ticket</button>
            </div>
        </form>

    </>
  )
}

export default NewTicketForm
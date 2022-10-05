import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ open, onClose, rowList, updateRows }) => {
    
    const [changeList, setChangeList] = useState([]);
    useEffect(()=>{
        const data = rowList.map(row => {return {...row}})
        setChangeList(data)
    }, [rowList]);

    const handleFormChange = (index, event) => {
        let data = [...changeList];
        data[index][event.target.name] = event.target.value;
        setChangeList(data);
    }

    const validateChanges = (e) => {
        e.preventDefault();
        console.log('send http PATCH request with :');
        console.log(changeList);
        updateRows(changeList);
        onClose();
    }

    if (!open) return null
    return createPortal(
        <div className="modal">
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modalBody column-center">
                <form className="column-center modalForm">
                    <h3>Update rows</h3>
                    {changeList.map((row, index) => {
                        return (
                            <div className="inputField" key={row.id}>
                                <label htmlFor={row.id+'name'} placeholder="Modifier le nom">Name</label>
                                <input type="text" id={row.id+'name'} name="name" placeholder={row.name} value={row.name} onChange={event => handleFormChange(index, event)}/>
                                <label htmlFor={row.id+'rank'} placeholder="Modifier le nom">Nank</label>
                                <input type="number" id={row.id+'rank'} name="rank" placeholder={row.rank} value={row.rank} onChange={event => handleFormChange(index, event)}/>
                            </div>
                        )
                    })}
                    <button onClick={(e)=>{validateChanges(e)}}>Valider les changements</button>
                </form>
            </div>
        </div>,
        document.querySelector("#modal")
    )
};

export default Modal;
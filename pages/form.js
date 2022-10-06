import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotificationAction } from "../store/reducers/notificationsReducer";

const FormView = () => {

    const dispatch = useDispatch();

    const optionTypes = [
        {
            name: "",
            value: '',
        },
        {
            name: "Succès",
            value: 'success',
        },
        {
            name: "Erreur",
            value: 'error',
        }
    ]

    const [selectValue, setSelectValue] = useState('');
    const [inputText, setInputText] = useState('');
    const [textArea, setTextArea] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(addNotificationAction({
            type: selectValue,
            message: inputText
        }));
        setSelectValue('');
        setInputText('');
    }

    return (
        <main className="column-center form">
            <h1>Form test case</h1>
            <form className="column-center">
                <div>
                    <label htmlFor="optionSelect">Choisissez un type. (Laissez vide pour une notification neutre)</label>
                    <select name="optionSelect" id="" value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                        {optionTypes.map(option => {
                            return (
                                <option value={option.value} key={option.value}>
                                    {option.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <input value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Entrez votre nom" />
                <p>Bonjour, { inputText }</p>
                <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)}></textarea>
                <p>{ textArea }</p>
                <input type="hidden" />
                <input type="submit" onClick={submitForm}/>
            </form>
        </main >
    )
}

export default FormView
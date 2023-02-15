import AddErrorForm from "./addErrorForm"
import EditErrorForm from "./editErrorForm"
import { useSelector } from "react-redux";
import { useReducer } from 'react'

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

export default function Form() {

    const [formData, setFormData] = useReducer(formReducer, {})
    const formId = useSelector((state) => state.app.client.formId)

    return (
        <div className='container mx-auto max-w-screen flex justify-center py-2 px-2 border-2 rounded-md'>
            { formId ? EditErrorForm({formId, formData, setFormData}) : AddErrorForm({formData, setFormData})}
        </div>
    )
}

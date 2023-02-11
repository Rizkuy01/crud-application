import AddErrorForm from "./addErrorForm"
import EditErrorForm from "./editErrorForm"

export default function Form() {

    const flag = true;

    return (
        <div className='container mx-auto max-w-screen flex justify-center py-2 px-2 border-2 rounded-md'>
            { flag ? <AddErrorForm /> : <EditErrorForm />}
        </div>
    )
}

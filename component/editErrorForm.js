import { useReducer } from 'react'
import Alert from './alert'

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

export default function EditErrorForm() {

    const [formData, setFormData] = useReducer(formReducer, {})
    const handleSubmit = (e) => {
        e.preventDefault()
        if(Object.keys(formData).length === 0) return console.log('data is empty');
        console.log(formData)
    }

    if(Object.keys(formData).length > 0) return <Alert></Alert>

    return (
        <>
            <form className="grid lg:grid-cols-3 w-4/6 gap-4" onSubmit={handleSubmit}>

                {/* date */}
                <div className="input-date">
                <label htmlFor='product' className='block mt-2 ml-1 text-sm'>entry date:</label>
                    <input type='date' onChange={setFormData} name='date' placeholder="code product" className="border w-full px-5 py-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 rounded-md"></input>
                </div>

                {/* error description */}
                <div className="input-error">
                <label htmlFor='error' className='block mt-2 ml-1 text-sm'>error description:</label>
                    <input type='text' onChange={setFormData} name='error' placeholder="error description" className="border w-full px-5 py-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 rounded-md"></input>
                </div>

                {/* product status */}
                <div className="form-check grid-rows-3">
                <label htmlFor='status' className='block mt-2 ml-1 text-sm'>status:</label>
                    <div className="flex justify-center items-center mt-3">
                        <input type='radio' onChange={setFormData} name='status' value='Resolved' id='Default1' className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-500 bg-white checked:bg-green-500 checked:border-yellow-500 focus:outline-none transition duration-150 mt-1 align-top bg-no-repeat bg-center bg-contain float-left ml-2 cursor-pointer'/>
                        <label htmlFor='Default1' className='p-1 mt-1 text-sm inline-block'>Resolved</label>
                        <input type='radio' onChange={setFormData} name='status' value='Reject' id='Default2' className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-500 bg-white checked:bg-red-600 checked:border-yellow-500 focus:outline-none transition duration-150 mt-1 align-top bg-no-repeat bg-center bg-contain float-left ml-2 cursor-pointer'/>
                        <label htmlFor='Default2' className='p-1 mt-1 text-sm inline-block'>Reject</label>
                        <input type='radio' onChange={setFormData} name='status' value='Complain' id='Default3' className='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-500 bg-white checked:bg-yellow-500 checked:border-yellow-500 focus:outline-none transition duration-150 mt-1 align-top bg-no-repeat bg-center bg-contain float-left ml-2 cursor-pointer'/>
                        <label htmlFor='Default3' className='p-1 mt-1 text-sm inline-block'>Complain</label>
                    </div>
                </div>
                
                {/* code product */}
                <div className="input-product">
                <label htmlFor='product' className='block mt-2 ml-1 text-sm'>code product:</label>
                    <input type='text' onChange={setFormData} name='product' placeholder="code product" className="border w-full px-5 py-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 rounded-md"></input>
                </div>
                
                {/* PIC / Operator */}
                <div className="input-pic">
                <label htmlFor='pic' className='block mt-2 ml-1 text-sm'>PIC:</label>
                    <input type='text' onChange={setFormData} name='pic' placeholder="operator name" className="border w-full px-5 py-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 rounded-md"></input>
                </div>
                
                {/* button */}
                <div className=" flex justify-center items-center">
                    <button onChange={setFormData} type='submit' className="bg-yellow-400 text-white px-24 py-2 mt-6 border rounded-md hover:border-yellow-400 hover:bg-yellow-500">Edit</button>
                </div>
                
                {/* customer name */}
                <div className="input-costumer">
                <label htmlFor='name' className='block mt-2 ml-1 text-sm'>customer name:</label>
                    <input type='text' onChange={setFormData} name='name' placeholder="costumer name" className="border w-full px-5 py-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 rounded-md"></input>
                </div>

                {/* Problem Solving */}
                <div className="input-resolver">
                <label htmlFor='resolve' className='block mt-2 ml-1 text-sm'>problem solve:</label>
                    <textarea type='text-area' onChange={setFormData} name='resolve' placeholder="add solving" className="border w-full px-5 py-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 rounded-md"></textarea>
                </div>

            </form>
        </>
    )
}

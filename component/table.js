import { useQuery } from 'react-query';
import { getUsers } from '../lib/helper';
import { useSelector, useDispatch } from 'react-redux';
import { toogleChangeAction, updateAction, deleteAction } from '../redux/reducer';
import data from '../database/data.json'

export default function table () {

    
    // console.log(state);

    const { isLoading, isError, error } = useQuery('users', getUsers)

    if(isLoading) return <div className='flex justify-center mx-auto border border-red-300 bg-red-400 w-3/6 text-gray-900 text-md my-4 py-2 text-ceneter bg-opacity-25'> Loading data...</div>
    if(isError) return <div className='flex justify-center mx-auto border border-green-300 bg-green-400 w-3/6 text-gray-900 text-md my-4 py-2 text-ceneter bg-opacity-25'> Data Error! {error} </div>

    return (
        <>
        <table className='min-w-full table-auto'>
            <thead>
                <tr className='bg-gray-800'>
                    <th className="py-2">
                        <span className='text-gray-200'>Entry Date</span>
                    </th>
                    <th className="py-2">
                        <span className='text-gray-200'>Code Product</span>
                    </th>
                    <th className="py-2">
                        <span className='text-gray-200'>Costumer Name</span>
                    </th>
                    <th className="py-2">
                        <span className='text-gray-200'>Error</span>
                    </th>
                    <th className="py-2">
                        <span className='text-gray-200'>PIC</span>
                    </th>
                    <th className="py-2">
                        <span className='text-gray-200'>Resolve</span>
                    </th>
                    <th className="py-2">
                        <span className='text-gray-200'>Status</span>
                    </th>
                    <th className="py-2">
                        <span className='text-gray-200'>Action</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((obj, i) => <Tr {...obj} key={i} />)
                }
            </tbody>
        </table>
        </>
    )
}

function Tr ({id, date, code, name, error, pic, solve, status}){

    const visible = useSelector((state) => state.app.client.toogleForm)
    const dispatch = useDispatch()

    const onUpdate = () =>{
        dispatch(toogleChangeAction(id))
        console.log(visible)
        if(visible){
            dispatch(toogleChangeAction(id))
        }
    }

    const onDelete = () =>{
        if(!visible){
            dispatch(deleteAction(id))
        }
    }

    return (
        <tr className="bg-gray-200 text-center">
                    <td className="py-2">
                        <span className='text-black'>{date || 'unknown'}</span>
                    </td>
                    <td className="py-2">
                        <span className='text-black'>{code || 'unknown'}</span>
                    </td>
                    <td className="py-2">
                        <span className='text-black'>{name || 'unknown'}</span>
                    </td>
                    <td className="py-2">
                        <span className='text-black'>{error|| 'unknown'}</span>
                    </td>
                    <td className="py-2">
                        <span className='text-black'>{pic || 'unknown'}</span>
                    </td>
                    <td className="py-2">
                        <span className='text-black'>{solve || 'unknown'}</span>
                    </td>
                    <td className="py-2">
                        <button className="cursor" disabled><span className={`${status == "Resolved" ? 'bg-green-500' : 'bg-red-600' } text-white px-5 py-1 rounded full`}>{status || 'unknown'}</span></button>
                    </td>
                    <td className="py-2 flex justify-around text-white">
                        <button onClick={onUpdate} className='cursor bg-yellow-400 text-sm py-1 px-2 border rounded-full hover:border-black hover:bg-yellow-500'>edit</button>
                        <button  onclick={onDelete} className='cursor bg-red-600 text-sm py-1 px-2 border rounded-full hover:border-black hover:bg-red-700'>delete</button>
                    </td>
                </tr>
    )
}


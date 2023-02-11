import data from '../database/data.json';

export default function table () {
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
                        <button className="cursor" disabled><span className="bg-green-500 text-white px-5 py-1 rounded-full">{status || 'unknown'}</span></button>
                    </td>
                    <td className="py-2 flex justify-around text-white">
                        <button className='cursor bg-yellow-400 text-sm py-1 px-2 border rounded-full hover:border-black hover:bg-yellow-500'>edit</button>
                        <button className='cursor bg-red-600 text-sm py-1 px-2 border rounded-full hover:border-black hover:bg-red-700'>delete</button>
                    </td>
                </tr>
    )
}


import { Close } from './Icons'

const Settings = (props) => {
    return (
        <div className='w-full min-h-screen bg-gray-200 dark:bg-gray-900 absolute z-20 top-0 left-0 md:p-10 p-2'>
            <div className='flex justify-end'>
                <button
                    className='p-2 rounded-full hover:bg-purple-200 dark:hover:bg-gray-700 focus:outline-none transition duration-300'
                    onClick={() => props.toggleOpenSettings()}>
                    <Close />
                </button>
            </div>
            <div className='grid place-items-center'>
                <h2 className='text-2xl font-bold text-purple-500 mt-3'>Voice</h2>
                <h2 className='text-2xl font-bold text-purple-500 mt-3'>Voice Speed</h2>
                <h2 className='text-2xl font-bold text-purple-500 mt-3'>Voice Pitch</h2>
            </div>
        </div>
    )
}

export default Settings

import { Pause, Play, Refresh, Stop } from './Icons'
import { useSpeechSynthesis } from 'react-speech-kit'

const Player = ({ story, getStory }) => {
    const { speak, speaking, cancel } = useSpeechSynthesis()

    const play = () => {
        speak({
            text: `
            ${story.title}.
            by : ${story.author}.
            ${story.story}.
            Moral : ${story.moral}`,
        })
    }

    const stop = () => {
        cancel()
    }

    return (
        <footer className='fixed w-full z-10 bottom-0 bg-purple-600 dark:bg-purple-800 py-3'>
            <div className='md:w-3/4 md:mx-auto w-full flex items-center justify-center space-x-4'>
                <button
                    className='p-2 rounded-full hover:bg-purple-500 dark:hover:bg-purple-600 transition duration-300 focus:outline-none'
                    onClick={getStory}>
                    <Refresh />
                </button>
                <button
                    className='p-2 rounded-full hover:bg-purple-500 dark:hover:bg-purple-600 transition duration-300 focus:outline-none'
                    onClick={speaking ? stop : play}>
                    {speaking ? <Pause /> : <Play />}
                </button>
                <button
                    className={`${
                        speaking ? '' : 'disabled:opacity-50 disabled:pointer-events-none'
                    } p-2 rounded-full hover:bg-purple-500 dark:hover:bg-purple-600 transition duration-300 focus:outline-none  disabled:hover:bg-transparent`}
                    disabled={speaking ? false : true}
                    onClick={stop}>
                    <Stop />
                </button>
            </div>
        </footer>
    )
}

export default Player

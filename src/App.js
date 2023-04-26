import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Player from './components/Player'
import Spinner from './components/Spinner'
import Story from './components/Story'

const App = () => {
    const [darkmode, setDarkmode] = useState(false)
    const [loading, setLoading] = useState(false)
    const [story, setStory] = useState({
        title: '',
        author: '',
        story: '',
        moral: '',
    })

    const getStory = async () => {
        setLoading(true)
        const data = await fetch('https://shortstories-api.onrender.com/')
            .then((res) => res.json())
            .catch((err) => console.log(err))

        setStory({
            title: data.title,
            author: data.author,
            story: data.story,
            moral: data.moral,
        })
        setLoading(false)
    }

    useEffect(() => { getStory() }, [])

    useEffect(() => {
        if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
            setDarkmode(false)
        } else {
            setDarkmode(true)
        }
    }, [])

    const toggleDarkmode = () => {
        localStorage.theme = darkmode ? 'light' : 'dark'
        setDarkmode(!darkmode)
    }

    return (
        <div className={`w-full min-h-screen ${darkmode ? 'dark' : ''}`}>
            <div className='relative min-h-screen w-full bg-gray-100 dark:bg-gray-900'>
                <Navbar toggleDarkmode={toggleDarkmode} isDark={darkmode} />

                {loading ? (
                    <div className='absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4'>
                        <Spinner />
                    </div>
                ) : (
                    <Story story={story} />
                )}

                <Player story={story} getStory={getStory} loading={loading} />
            </div>
        </div>
    )
}

export default App

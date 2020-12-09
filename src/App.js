import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Player from './components/Player'
import Settings from './components/Settings'
import Story from './components/Story'

const App = () => {
    const [darkmode, setDarkmode] = useState(false)
    const [openSettings, setOpenSettings] = useState(false)

    const [story, setStory] = useState({
        title: '',
        author: '',
        story: '',
        moral: '',
    })

    useEffect(() => {
        ;(async () => {
            const data = await fetch('https://shortstories-api.herokuapp.com/')
                .then((res) => res.json())
                .catch((err) => console.log(err))

            setStory({
                title: data.title,
                author: data.author,
                story: data.story,
                moral: data.moral,
            })
        })()
    }, [])

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

    const toggleOpenSettings = () => {
        setOpenSettings(!openSettings)
    }

    return (
        <div className={`w-full min-h-screen ${darkmode ? 'dark' : ''}`}>
            <div className='relative min-h-screen w-full bg-gray-100 dark:bg-gray-900'>
                <Navbar toggleDarkmode={toggleDarkmode} isDark={darkmode} toggleOpenSettings={toggleOpenSettings} />

                <Story story={story} />

                {openSettings && <Settings toggleOpenSettings={toggleOpenSettings} />}

                <Player />
            </div>
        </div>
    )
}

export default App

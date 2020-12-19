import { Dark, Light, Github, Api, Code } from './Icons'

const Navbar = (props) => {
    const classes = {
        button: 'p-2 rounded-full hover:bg-purple-500 dark:hover:bg-purple-600 focus:outline-none transition duration-300',
    }

    return (
        <nav className='fixed w-full z-10 top-0 bg-purple-600 dark:bg-purple-800 py-3 px-2'>
            <div className='md:w-3/4 md:mx-auto w-full flex items-center justify-between'>
                <h2 className='font-serif md:text-3xl text-2xl text-white'>Stories.io</h2>
                <div className='flex space-x-2'>
                    <a
                        href='https://github.com/poseidon-code/shortstories-api'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={classes.button}>
                        <Api />
                    </a>

                    <a
                        href='https://github.com/poseidon-code/stories.io'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={classes.button}>
                        <Code />
                    </a>

                    <a href='https://github.com/poseidon-code' target='_blank' rel='noopener noreferrer' className={classes.button}>
                        <Github />
                    </a>

                    <button className={classes.button} onClick={props.toggleDarkmode}>
                        {props.isDark ? <Dark /> : <Light />}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

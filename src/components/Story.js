import { useEffect, useState } from 'react'

const Story = () => {
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

    return (
        <div className='md:w-3/4 md:mx-auto w-full z-0'>
            <div className='py-28 px-6'>
                <h1 className='font-serif text-center md:text-5xl text-3xl text-purple-900 dark:text-purple-400'>{story.title}</h1>

                <p className='font-sans text-right md:text-2xl text-lg mt-2 text-gray-500 dark:text-gray-400 pr-10'>- {story.author}</p>

                <p className='font-sans mt-10 md:text-2xl text-xl text-center text-gray-900 dark:text-gray-300'>{story.story}</p>

                <p className='font-serif text-center text-2xl mt-14 text-purple-900 dark:text-purple-400'>{story.moral}</p>
            </div>
        </div>
    )
}

export default Story

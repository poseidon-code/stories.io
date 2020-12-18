const Spinner = () => (
    <svg
        className='animate-spin w-48 h-48 text-purple-300 dark:text-gray-700'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M 4 19.998 L 4 14.998 L 4.582 14.998 M 19.938 12.998 C 19.169 19.109 12.073 22.096 7.165 18.374 C 6.015 17.502 5.123 16.336 4.582 14.998 M 4.582 14.998 L 9 14.998 M 20 3.998 L 20 8.998 L 19.419 8.998 M 19.419 8.998 C 17.106 3.288 9.479 2.224 5.69 7.082 C 4.805 8.217 4.243 9.57 4.062 10.998 M 19.419 8.998 L 15 8.998'
            transform='matrix(-1, 0, 0, -1, 24, 24.007215)'
        />
    </svg>
)

export default Spinner

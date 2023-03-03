const GlobalSvgSelector = ({ id }) => {
    switch (id) {
        case 'twitter-thumbnail':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="65.612" height="65.612" viewBox="0 0 65.612 65.612">
                    <ellipse id="Эллипс_33" data-name="Эллипс 33" cx="32.806" cy="32.806" rx="32.806" ry="32.806" fill="#69b9ff" opacity="0.2" />
                </svg>
            );
        case 'twitter-icon':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24.375" viewBox="0 0 30 24.375">
                    <path id="twitter" d="M30,50.886a12.823,12.823,0,0,1-3.544.971,6.116,6.116,0,0,0,2.706-3.4,12.291,12.291,0,0,1-3.9,1.489,6.15,6.15,0,0,0-10.639,4.206,6.333,6.333,0,0,0,.143,1.4A17.408,17.408,0,0,1,2.089,49.121a6.152,6.152,0,0,0,1.89,8.22A6.074,6.074,0,0,1,1.2,56.584v.067a6.179,6.179,0,0,0,4.928,6.043,6.139,6.139,0,0,1-1.613.2,5.439,5.439,0,0,1-1.164-.1A6.209,6.209,0,0,0,9.1,67.076,12.358,12.358,0,0,1,1.472,69.7,11.521,11.521,0,0,1,0,69.615a17.315,17.315,0,0,0,9.435,2.76c11.318,0,17.505-9.375,17.505-17.5,0-.272-.009-.534-.023-.8A12.269,12.269,0,0,0,30,50.886Z" transform="translate(0 -48)" fill="#03a9f4" />
                </svg>
            );
        case 'logo':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 213.708 42.841">
                    <g id="Logo" transform="translate(-149.292 -17.159)">
                        <path id="Контур_1" data-name="Контур 1" d="M588.076-43.217V-86.058l42.841,42.841Z" transform="translate(-438.784 103.216)" fill="#00ff9b" />
                        <path id="Контур_2" data-name="Контур 2" d="M0,42.841V0L42.841,42.841Z" transform="translate(149.292 60) rotate(-90)" fill="#003eff" />
                        <text id="Minimis" transform="translate(236 51)" fontSize="30" fontFamily="SegoeUI-Semibold, Segoe UI" fontWeight="600" letterSpacing="0.1em"><tspan x="0" y="0">Minimis</tspan></text>
                    </g>
                </svg>
            );
        case 'user':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.53 45.53"><defs><style>{".cls-1{fill:#fff;}.cls-2{fill:#c7c4be;}"}</style></defs><g id="Слой_2" data-name="Слой 2"><g id="Capa_1" data-name="Capa 1"><ellipse className="cls-1" cx="22.86" cy="23.45" rx="15.35" ry="18.8" /><path className="cls-2" d="M22.77,0A22.77,22.77,0,1,0,45.53,22.76,22.76,22.76,0,0,0,22.77,0Zm0,6.81a7.53,7.53,0,1,1-7.53,7.53A7.53,7.53,0,0,1,22.77,6.81Zm0,32.77a16.71,16.71,0,0,1-10.88-4,3.24,3.24,0,0,1-1.13-2.44,7.61,7.61,0,0,1,7.64-7.6h8.76a7.59,7.59,0,0,1,7.62,7.6,3.17,3.17,0,0,1-1.13,2.43A16.66,16.66,0,0,1,22.76,39.58Z" /></g></g></svg>
            )
        case 'arrow-back':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="80.72" height="54.401" viewBox="0 0 80.72 54.401">
                    <g id="Сгруппировать_29" data-name="Сгруппировать 29" transform="translate(-122.78 -163.793)">
                        <line id="Линия_1" data-name="Линия 1" x1="80" transform="translate(123.5 190.5)" fill="rgba(0,0,0,0)" stroke="#fff" strokeWidth="2" />
                        <line id="Линия_2" data-name="Линия 2" y1="26" x2="26" transform="translate(123.5 164.5)" fill="rgba(0,0,0,0)" stroke="#fff" strokeWidth="2" />
                        <line id="Линия_3" data-name="Линия 3" x1="26" y1="27" transform="translate(123.5 190.5)" fill="none" stroke="#fff" strokeWidth="2" />
                    </g>
                </svg>

            )
        case 'search-icon':
            return (
                <svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/></svg>
            )
        default:
            return <svg></svg>
    }
}

export default GlobalSvgSelector;
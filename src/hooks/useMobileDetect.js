import { useState, useEffect } from 'react'

const useMobileDetect = () => {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSize () {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSize);
        return () => {
            window.removeEventListener('resize', handleWindowSize);
        }
    }, [])

    const isMobile = width < 675;

  return { isMobile };
}

export default useMobileDetect;
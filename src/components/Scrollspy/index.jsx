import { useEffect, useState } from "react"

const Scrollspy = () => {
    const [scrolled, setScrolled] = useState(0)

    const scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;

        const scroll = scrollPx / winHeightPx * 100;
        setScrolled(scroll);
    };

    useEffect(() => {
        scrollProgress()

        window.addEventListener("scroll", scrollProgress)
        return () => window.removeEventListener("scroll", scrollProgress);
    },[])

    return (
        <div className="position-fixed top-50 start-0 translate-middle-y ps-5 ms-5 ps-5" >
            <div className="scrollspy">
                <div className="scrollspy-value" style={{height : scrolled+'%'}}></div>
            </div>
        </div>
    )
}

export default Scrollspy
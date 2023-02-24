import { useEffect, useRef } from "react";

export default function useScroll(parentRef, childRef, callback) {
    const obServer = useRef()

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        } 

        obServer.current = new IntersectionObserver(([target]) => {
            if(target.isIntersecting){
                console.log('test')
                callback()
            }
        }, options)
        obServer.current.observe(childRef.current)

        return function () {
            obServer.current.unobserve(childRef.current)
        }
    }, [callback])
}
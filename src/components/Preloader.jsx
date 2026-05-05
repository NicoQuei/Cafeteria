import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader() {
    const loaderRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        const tl = gsap.timeline();

        // Faster animation
        tl.to(textRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out"
        })
        .to(textRef.current, {
            opacity: 0,
            y: -10,
            duration: 0.4,
            ease: "power2.in",
            delay: 0.2
        })
        // Slide the preloader up faster
        .to(loaderRef.current, {
            yPercent: -100,
            duration: 0.6,
            ease: "power3.inOut",
            onComplete: () => {
                if (loaderRef.current) {
                    loaderRef.current.style.display = 'none';
                }
            }
        });

    }, []);

    return (
        <div 
            ref={loaderRef} 
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                backgroundColor: 'var(--bg-main)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'var(--text-primary)',
            }}
        >
            <div 
                ref={textRef}
                style={{
                    opacity: 0,
                    transform: 'translateY(15px)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2rem',
                    fontWeight: '300',
                    color: 'var(--text-primary)'
                }}
            >
                Grão & Alma.
            </div>
        </div>
    );
}

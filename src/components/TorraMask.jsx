import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function TorraMask() {
    const container = useRef();

    useGSAP(() => {
        gsap.to('.mask-reveal-content', {
            clipPath: 'circle(150% at 50% 50%)',
            ease: 'none',
            scrollTrigger: {
                trigger: container.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
            }
        });
    }, { scope: container });

    return (
        <section id="torra" className="mask-section" ref={container}>
            <div className="mask-container">
                <div className="mask-text-wrapper">
                    <h2 className="mask-text">O Fogo.</h2>
                </div>
                <div className="mask-reveal-content">
                    <div className="reveal-inner">
                        <img src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=1200&auto=format&fit=crop" alt="Grãos de café sendo torrados" className="reveal-img" />
                        <div className="reveal-text-box">
                            <h3>A Ciência da Torra</h3>
                            <p>Monitoramos o desenvolvimento de cada grão segundo a segundo. A caramelização perfeita exige paciência.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

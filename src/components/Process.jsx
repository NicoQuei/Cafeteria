import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
    const container = useRef();
    const wrapper = useRef();

    useGSAP(() => {
        const getScrollAmount = () => wrapper.current.scrollWidth - window.innerWidth;
        
        gsap.to(wrapper.current, {
            x: () => -getScrollAmount(),
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                pin: true,
                scrub: 1,
                start: "top top",
                end: () => `+=${getScrollAmount()}`,
                invalidateOnRefresh: true
            }
        });
    }, { scope: container });

    return (
        <section id="processo" className="process-section" ref={container}>
            <div className="process-container" ref={wrapper}>
                <div className="process-panel">
                    <div className="panel-content">
                        <span className="panel-step">01</span>
                        <h2>A Fazenda.</h2>
                        <p>Colheita seletiva manual em altitudes elevadas, garantindo apenas cerejas maduras e doçura extrema.</p>
                    </div>
                    <div className="panel-image">
                        <img src="https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=800&auto=format&fit=crop" alt="Colheita de café" loading="lazy" />
                    </div>
                </div>
                <div className="process-panel">
                    <div className="panel-content">
                        <span className="panel-step">02</span>
                        <h2>A Seleção.</h2>
                        <p>Processamento cuidadoso. Separação de defeitos físicos para garantir pureza impecável no lote final.</p>
                    </div>
                    <div className="panel-image">
                        <img src="https://images.unsplash.com/photo-1485600600373-3ce1a547071e?q=80&w=800&auto=format&fit=crop" alt="Seleção de grãos" loading="lazy" />
                    </div>
                </div>
                <div className="process-panel">
                    <div className="panel-content">
                        <span className="panel-step">03</span>
                        <h2>O Laboratório.</h2>
                        <p>Cada lote passa por rigorosas provas de cupping. Calibramos a curva de torra para exaltar a identidade do terroir.</p>
                    </div>
                    <div className="panel-image">
                        <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop" alt="Prova de café" loading="lazy" />
                    </div>
                </div>
                <div className="process-panel">
                    <div className="panel-content">
                        <span className="panel-step">04</span>
                        <h2>A Extração.</h2>
                        <p>Geometria da xícara, temperatura da água e fluxo controlados milimetricamente no nosso bar.</p>
                    </div>
                    <div className="panel-image">
                        <img src="https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop" alt="Extração do café" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    );
}

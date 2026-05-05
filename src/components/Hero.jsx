import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Coffee, Thermometer } from 'lucide-react';

export default function Hero() {
    const container = useRef();
    const navigate = useNavigate();

    useGSAP(() => {
        gsap.fromTo('.title-line-inner', 
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.2 }
        );

        gsap.fromTo('.floating-img',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: 'power4.out', delay: 0.8 }
        );

        // Parallax image
        gsap.to('.parallax-img', {
            y: (i, el) => (window.innerHeight / 2) * 0.1, // approximate
            ease: "none",
            scrollTrigger: {
                trigger: '.hero-visual',
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

    }, { scope: container });

    const handleMouseMove = (e) => {
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        const moveX = (e.clientX - rect.left - rect.width / 2) * 0.2;
        const moveY = (e.clientY - rect.top - rect.height / 2) * 0.2;
        btn.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = `translate(0px, 0px) scale(1)`;
    };

    return (
        <section className="hero" ref={container}>
            <div className="hero-grid">
                <div className="hero-content">
                    <div className="badge">Colheita 2026 — Lote Limitado</div>
                    <h1 className="hero-title">
                        <div className="title-line"><div className="title-line-inner">O tempo</div></div>
                        <div className="title-line"><div className="title-line-inner">dita a <span className="italic-serif">extração</span></div></div>
                        <div className="title-line"><div className="title-line-inner">perfeita.</div></div>
                    </h1>
                    <p className="hero-desc">
                        Trabalhamos exclusivamente com grãos de origem única rastreável, torrados artesanalmente para extrair notas limpas, vibrantes e autênticas. Sem pressa. Sem concessões.
                    </p>
                    <div className="hero-actions">
                        <button 
                            className="btn-primary magnetic-btn"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => navigate('/cardapio')}
                        >
                            <span>Ver Cardápio</span>
                            <ArrowRight size={20} />
                        </button>
                        
                        <div 
                            className="spin-badge magnetic-btn"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <svg viewBox="0 0 100 100" className="spin-text">
                                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none"/>
                                <text>
                                    <textPath href="#circlePath" startOffset="0%">100% ARÁBICA • ORIGEM ÚNICA • 100% ARÁBICA • ORIGEM ÚNICA • </textPath>
                                </text>
                            </svg>
                            <Coffee size={32} />
                        </div>
                    </div>
                </div>
                
                <div className="hero-visual">
                    <div className="image-wrapper main-img">
                        <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop" alt="Extração de espresso em máquina profissional" className="hero-image parallax-img" />
                        <div className="glass-overlay">
                            <div className="glass-content">
                                <Thermometer size={24} />
                                <div className="glass-text">
                                    <span className="label">Água Filtrada V60</span>
                                    <span className="value">93.2°C</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="image-wrapper floating-img">
                        <img src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=400&auto=format&fit=crop" alt="Detalhe do grão" className="parallax-img" style={{transform: 'translateY(-20px)'}} />
                    </div>
                </div>
            </div>
        </section>
    );
}

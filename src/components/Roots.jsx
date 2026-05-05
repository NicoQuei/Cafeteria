import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Roots() {
    const container = useRef();

    return (
        <section id="produtores" className="roots-section" ref={container}>
            <div className="roots-header stagger-child">
                <h2 className="section-title">Nossas Raízes.</h2>
                <p className="section-subtitle">Rastreabilidade absoluta. Conheça as famílias que cultivam a alma do nosso café em diferentes terroirs do Brasil.</p>
            </div>
            
            <div className="roots-stack stagger-parent">
                {/* Card 1 */}
                <div className="root-card stagger-child" style={{ top: '100px', zIndex: 1 }}>
                    <div className="root-card-inner">
                        <img src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1600&auto=format&fit=crop" alt="Fazenda Caparaó" className="root-img" loading="lazy" />
                        <div className="root-card-content glass-overlay-premium">
                            <div className="root-meta">
                                <span className="tag">01</span>
                                <span className="coord">20° 25' S / 41° 48' W</span>
                            </div>
                            <h3>Sítio Alto da Serra</h3>
                            <div className="root-specs">
                                <div className="spec"><span className="label">Região</span><span className="value">Caparaó, MG</span></div>
                                <div className="spec"><span className="label">Altitude</span><span className="value">1.400m</span></div>
                                <div className="spec"><span className="label">Variedades</span><span className="value">Caparaó Amarelo, Catucaí</span></div>
                            </div>
                            <p className="root-desc">Cafés colhidos a dedo por três gerações. Especialistas em fermentação anaeróbica que resulta em xícaras com notas vibrantes de frutas vermelhas e acidez licorosa.</p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="root-card stagger-child" style={{ top: '130px', zIndex: 2 }}>
                    <div className="root-card-inner">
                        <img src="https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=1600&auto=format&fit=crop" alt="Fazenda Cerrado" className="root-img" loading="lazy" />
                        <div className="root-card-content glass-overlay-premium">
                            <div className="root-meta">
                                <span className="tag">02</span>
                                <span className="coord">18° 55' S / 46° 59' W</span>
                            </div>
                            <h3>Fazenda Alvorada</h3>
                            <div className="root-specs">
                                <div className="spec"><span className="label">Região</span><span className="value">Cerrado Mineiro</span></div>
                                <div className="spec"><span className="label">Altitude</span><span className="value">1.100m</span></div>
                                <div className="spec"><span className="label">Variedades</span><span className="value">Bourbon Amarelo, Mundo Novo</span></div>
                            </div>
                            <p className="root-desc">Pioneiros em energia 100% limpa no processamento natural. A base estrutural dos nossos espressos, entregando um corpo denso e notas inconfundíveis de chocolate amargo e nozes.</p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="root-card stagger-child" style={{ top: '160px', zIndex: 3 }}>
                    <div className="root-card-inner">
                        <img src="https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1600&auto=format&fit=crop" alt="Mantiqueira de Minas" className="root-img" loading="lazy" />
                        <div className="root-card-content glass-overlay-premium">
                            <div className="root-meta">
                                <span className="tag">03</span>
                                <span className="coord">22° 06' S / 45° 15' W</span>
                            </div>
                            <h3>Sítio das Pedras</h3>
                            <div className="root-specs">
                                <div className="spec"><span className="label">Região</span><span className="value">Mantiqueira de Minas</span></div>
                                <div className="spec"><span className="label">Altitude</span><span className="value">1.350m</span></div>
                                <div className="spec"><span className="label">Variedades</span><span className="value">Arara, Catuaí Vermelho</span></div>
                            </div>
                            <p className="root-desc">Micro-lotes raros cultivados em encostas íngremes. Um terroir privilegiado que confere doçura extrema, notas florais e uma finalização longa e elegante na xícara.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle hash scroll after navigation
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    useGSAP(() => {
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            delay: 0.1
        });
    }, { scope: navRef });

    // Magnetic Button Micro-Physics
    const handleMouseMove = (e) => {
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const moveX = (x - rect.width / 2) * 0.2;
        const moveY = (y - rect.height / 2) * 0.2;
        btn.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = `translate(0px, 0px) scale(1)`;
    };

    return (
        <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
            <div className="nav-container">
                <Link to="/" className="logo">
                    Grão & Alma <span className="logo-dot"></span>
                </Link>
                <div className="nav-links">
                    <Link to="/#torra" className="nav-link">A Torra</Link>
                    <Link to="/#produtores" className="nav-link">Produtores</Link>
                    <Link to="/#processo" className="nav-link">Processo</Link>
                    <Link to="/#manifesto" className="nav-link">Manifesto</Link>
                    <Link to="/cardapio" className="nav-link" style={{ color: 'var(--accent)' }}>Cardápio</Link>
                </div>
                <button 
                    className="btn-primary magnetic-btn"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}
                >
                    <span>Reservar</span>
                </button>
            </div>
        </nav>
    );
}

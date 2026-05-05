import { useEffect } from 'react';

export default function Cardapio() {
    // Scroll to top when entering this page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main style={{ paddingTop: '8rem', minHeight: '100vh', paddingBottom: '6rem' }}>
            <section id="menu" className="premium-menu-section stagger-parent">
                <div className="section-header stagger-child" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '1rem' }}>Cardápio.</h1>
                    <p className="section-subtitle">Simplicidade elevada. Foco na pureza dos ingredientes.</p>
                </div>
                
                <div className="menu-list-container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                    
                    {/* Categoria 1 */}
                    <div className="menu-category stagger-child">
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--accent)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '2rem' }}>Espressos & Clássicos</h3>
                        <div className="menu-list">
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Espresso Single Origin</span>
                                    <span className="menu-item-desc">Extrato puro do nosso microlote da semana. Xaroposo e vibrante.</span>
                                </div>
                                <span className="menu-item-price">R$ 12</span>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Macchiato Clássico</span>
                                    <span className="menu-item-desc">Espresso duplo "manchado" com aveludada espuma de leite.</span>
                                </div>
                                <span className="menu-item-price">R$ 14</span>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Flat White</span>
                                    <span className="menu-item-desc">A proporção perfeita entre espresso duplo e microespuma sedosa.</span>
                                </div>
                                <span className="menu-item-price">R$ 18</span>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Cappuccino Italiano</span>
                                    <span className="menu-item-desc">1/3 espresso, 1/3 leite vaporizado, 1/3 espuma densa. Sem cacau.</span>
                                </div>
                                <span className="menu-item-price">R$ 16</span>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Americano</span>
                                    <span className="menu-item-desc">Espresso duplo diluído em água quente. Notas claras e corpo leve.</span>
                                </div>
                                <span className="menu-item-price">R$ 14</span>
                            </div>
                        </div>
                    </div>

                    {/* Categoria 2 */}
                    <div className="menu-category stagger-child">
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--accent)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '2rem' }}>Métodos de Extração</h3>
                        <div className="menu-list">
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Hario V60</span>
                                    <span className="menu-item-desc">Filtragem limpa, exalta notas florais e acidez brilhante. Ratio 1:15.</span>
                                </div>
                                <span className="menu-item-price">R$ 20</span>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">AeroPress</span>
                                    <span className="menu-item-desc">Corpo denso, doçura destacada. Imersão sob pressão controlada.</span>
                                </div>
                                <span className="menu-item-price">R$ 18</span>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Chemex (Para Dois)</span>
                                    <span className="menu-item-desc">Filtro triplo garantindo a xícara mais limpa possível. Extração lenta.</span>
                                </div>
                                <span className="menu-item-price">R$ 32</span>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Prensa Francesa</span>
                                    <span className="menu-item-desc">Óleos essenciais preservados. Corpo pesado e textura rústica.</span>
                                </div>
                                <span className="menu-item-price">R$ 18</span>
                            </div>
                        </div>
                    </div>

                    {/* Categoria 3 */}
                    <div className="menu-category stagger-child">
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--accent)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '2rem' }}>Bebidas Especiais</h3>
                        <div className="menu-list">
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Cold Brew N2</span>
                                    <span className="menu-item-desc">Infusão a frio por 24h, extraída com nitrogênio para textura cremosa.</span>
                                </div>
                                <span className="menu-item-price">R$ 22</span>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Espresso Tônica</span>
                                    <span className="menu-item-desc">Espresso duplo sobre gelo artesanal, tônica premium e zest de limão.</span>
                                </div>
                                <span className="menu-item-price">R$ 24</span>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Mocha de Origem</span>
                                    <span className="menu-item-desc">Espresso, ganache de chocolate 70% da Amazônia e leite vaporizado.</span>
                                </div>
                                <span className="menu-item-price">R$ 24</span>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Matcha Cerimonial Latte</span>
                                    <span className="menu-item-desc">Matcha orgânico de Uji preparado no chasen com leite vaporizado.</span>
                                </div>
                                <span className="menu-item-price">R$ 26</span>
                            </div>
                        </div>
                    </div>

                    {/* Categoria 4 */}
                    <div className="menu-category stagger-child">
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--accent)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '2rem' }}>Comidinhas</h3>
                        <div className="menu-list">
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Sourdough Clássico na Chapa</span>
                                    <span className="menu-item-desc">Fatia espessa, fermentação natural 36h. Servida com manteiga noisette.</span>
                                </div>
                                <span className="menu-item-price">R$ 16</span>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Tosta de Cogumelos</span>
                                    <span className="menu-item-desc">Mix de cogumelos defumados, creme de ricota, azeite trufado e tomilho.</span>
                                </div>
                                <span className="menu-item-price">R$ 32</span>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Avocado Toast Premium</span>
                                    <span className="menu-item-desc">Abacate amassado, ovo perfeito (63°C), za'atar e brotos orgânicos.</span>
                                </div>
                                <span className="menu-item-price">R$ 34</span>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Croque Monsieur</span>
                                    <span className="menu-item-desc">Brioche tostado, presunto royale, queijo gruyère derretido e béchamel.</span>
                                </div>
                                <span className="menu-item-price">R$ 38</span>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Pão de Queijo da Serra</span>
                                    <span className="menu-item-desc">Massa artesanal com queijo da Canastra meia cura. Assado na hora.</span>
                                </div>
                                <span className="menu-item-price">R$ 12</span>
                            </div>
                        </div>
                    </div>

                    {/* Categoria 5 */}
                    <div className="menu-category stagger-child">
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--accent)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '2rem' }}>Doces & Viennoiserie</h3>
                        <div className="menu-list">
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Croissant Tradicional</span>
                                    <span className="menu-item-desc">Feito com manteiga francesa, massa folhada crocante por fora e alveolada por dentro.</span>
                                </div>
                                <span className="menu-item-price">R$ 15</span>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Pain au Chocolat</span>
                                    <span className="menu-item-desc">Clássico folhado recheado com duas barras de chocolate amargo belga.</span>
                                </div>
                                <span className="menu-item-price">R$ 18</span>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Cookie Flor de Sal</span>
                                    <span className="menu-item-desc">Massa densa de baunilha, pedaços rústicos de chocolate 70% e flor de sal.</span>
                                </div>
                                <span className="menu-item-price">R$ 14</span>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Bolo de Especiarias</span>
                                    <span className="menu-item-desc">Bolo úmido de cenoura com nozes, canela, gengibre e cobertura de cream cheese.</span>
                                </div>
                                <span className="menu-item-price">R$ 22</span>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-info">
                                    <span className="menu-item-name">Tartelete de Limão Siciliano</span>
                                    <span className="menu-item-desc">Massa sablée crocante, curd de limão siciliano intenso e merengue tostado.</span>
                                </div>
                                <span className="menu-item-price">R$ 26</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}

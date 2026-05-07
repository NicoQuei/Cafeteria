import { useState } from 'react';
import { Calendar, Users, Clock, ArrowRight } from 'lucide-react';

export default function Reservation() {
    const [focused, setFocused] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here we could simulate sending a reservation
        alert("Reserva solicitada com sucesso! Entraremos em contato.");
    };

    return (
        <section id="reservas" className="reservation-section">
            <div className="reservation-container">
                <div className="reservation-info">
                    <h2>Reserve sua Mesa.</h2>
                    <p>
                        Seja para uma imersão na nossa sala de cupping ou para um brunch tranquilo no salão principal, garantimos que sua experiência seja impecável.
                    </p>
                    
                    <div className="reservation-details">
                        <div className="detail-item">
                            <span className="detail-label">Localização</span>
                            <span className="detail-value">Rua das Acácias, 120 - Jardins</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Horário de Funcionamento</span>
                            <span className="detail-value">Terça a Domingo, 08h às 19h</span>
                        </div>
                    </div>
                </div>

                <div className="reservation-form-wrapper">
                    <form className="reservation-form" onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className={`input-group ${focused === 'name' ? 'focused' : ''}`}>
                                <label htmlFor="res-name">Nome completo</label>
                                <input 
                                    type="text" 
                                    id="res-name" 
                                    required 
                                    onFocus={() => setFocused('name')} 
                                    onBlur={() => setFocused(null)} 
                                />
                            </div>
                            
                            <div className={`input-group ${focused === 'email' ? 'focused' : ''}`}>
                                <label htmlFor="res-email">E-mail</label>
                                <input 
                                    type="email" 
                                    id="res-email" 
                                    required 
                                    onFocus={() => setFocused('email')} 
                                    onBlur={() => setFocused(null)} 
                                />
                            </div>

                            <div className={`input-group ${focused === 'date' ? 'focused' : ''}`}>
                                <label htmlFor="res-date"><Calendar size={16} /> Data</label>
                                <input 
                                    type="date" 
                                    id="res-date" 
                                    required 
                                    onFocus={() => setFocused('date')} 
                                    onBlur={() => setFocused(null)} 
                                />
                            </div>

                            <div className={`input-group ${focused === 'time' ? 'focused' : ''}`}>
                                <label htmlFor="res-time"><Clock size={16} /> Horário</label>
                                <select 
                                    id="res-time" 
                                    required
                                    onFocus={() => setFocused('time')} 
                                    onBlur={() => setFocused(null)}
                                >
                                    <option value="" disabled selected>Selecione...</option>
                                    <option value="09:00">09:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="16:00">16:00</option>
                                    <option value="17:00">17:00</option>
                                </select>
                            </div>

                            <div className={`input-group ${focused === 'guests' ? 'focused' : ''}`}>
                                <label htmlFor="res-guests"><Users size={16} /> Pessoas</label>
                                <select 
                                    id="res-guests" 
                                    required
                                    onFocus={() => setFocused('guests')} 
                                    onBlur={() => setFocused(null)}
                                >
                                    <option value="" disabled selected>Mesa para...</option>
                                    <option value="1">1 pessoa</option>
                                    <option value="2">2 pessoas</option>
                                    <option value="3">3 pessoas</option>
                                    <option value="4">4 pessoas</option>
                                    <option value="5+">5+ pessoas</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="btn-primary submit-btn">
                            <span>Solicitar Reserva</span>
                            <ArrowRight size={20} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

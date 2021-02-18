import React from 'react';
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa'
import { Button } from './Button';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import './Pricing.css';

function Pricing() {
    return (
        <IconContext.Provider value={{color:'#fff', size:64}}>
        <div>
            <div className="section">
                <div className="wrapper">
                    <h1 className="pricing_heading">Preço</h1>
                    <div className="pricing_container">
                        <Link to="/sign-up" className="pricing_container-card">
                            <div className="pricing_container-cardInfo">
                                <div className="icon">
                                    <FaFire/>
                                </div>
                                <h3>Tradicional</h3>
                                <h4>R$8.99</h4>
                                <p>Por mês</p>
                                <ul className="pricing_container-features">
                                   <li>100 transações</li> 
                                   <li>2% dinheiro de volta</li>
                                   <li>R$10,000 límite</li>
                                </ul>
                                <Button buttonSize="btn-wide" buttonColor="primary">
                                    Escolha seu plano
                                </Button>
                            </div>
                        </Link>
                        <Link to="/sign-up" className="pricing_container-card">
                            <div className="pricing_container-cardInfo">
                                <div className="icon">
                                    <BsXDiamondFill/>
                                </div>
                                <h3>Ouro</h3>
                                <h4>R$29.99</h4>
                                <p>Por mês</p>
                                <ul className="pricing_container-features">
                                   <li>1000 transações</li> 
                                   <li> 3.52% dinheiro de volta</li>
                                   <li>R$100,000 límite</li>
                                </ul>
                                <Button buttonSize="btn-wide" buttonColor="blue">
                                    Escolha seu plano
                                </Button>
                            </div>
                        </Link>
                        <Link to="/sign-up" className="pricing_container-card">
                            <div className="pricing_container-cardInfo">
                                <div className="icon">
                                    <GiCrystalize/>
                                </div>
                                <h3>Diamante</h3>
                                <h4>R$99.99</h4>
                                <p>Por mês</p>
                                <ul className="pricing_container-features">
                                   <li>Transações Ilimitadas</li> 
                                   <li> 5% dinheiro de volta</li>
                                   <li>Ilimitadas</li>
                                </ul>
                                <Button buttonSize="btn-wide" buttonColor="primary">
                                    Escolha seu plano
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    );
}

export default Pricing

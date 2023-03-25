import React from 'react';
import footerImg from "../../../img/log.jpg"

const Footer = () => {
    return (
        <section id="footer" style={{
            background: '#031d33',
            color: 'white',
            padding: '30px 100px'
        }}>
            <div className="footer-logo" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <img width={200} height={120} src={`https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg`} alt=""/>
                    <button className='footer-btn' >ВСТУПИТЬ СООБЩЕСТВО</button>
                </div>

                <div>
                    <h2> ГЛАВНОЕ <br/></h2>
                    <h4 style={{
                        // padding: '10px 0'
                    }}>О TMDB <br/>
                        Связаться с нами <br/>
                        Форумы поддержки <br/>
                        API <br/>
                        Статус системы</h4>
                </div>
                <div>
                    <h2>УЧАСТВУЙТЕ <br/></h2>
                    <h4> Библия редакторов <br/>
                        Добавить новый фильм <br/>
                        Добавить новый сериал</h4>
                </div>
                <div>
                    <h2>СООБЩЕСТВО <br/></h2>
                    <h4>
                        Руководства <br/>
                        Обсуждения <br/>
                        Доска почёта <br/>
                        Twitter
                    </h4>
                </div>
                <div>
                    <h2>О ПРАВЕ <br/></h2>
                    <h4>Условия использования <br/>
                        API Правила использования <br/>
                        Политика конфиденциальности</h4>

                </div>
            </div>
        </section>
    );
};

export default Footer;
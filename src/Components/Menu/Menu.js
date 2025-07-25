import React, { useRef, useEffect } from 'react';
import './Menu.css'
import { animatePhotoScroll } from '../../utils/animations';

const Menu = () => {
    const sectionRef = useRef(null);

  useEffect(() => {
    animatePhotoScroll(sectionRef.current);
  }, []);
  return (
    <div className='menu-wrapper'>
        <div className='menu-hero'>
            <h1>menu</h1>
            <h2>Objevte naše speciality</h2>
            <div ref={sectionRef} className="menu-photos-section">
                {[1,2,3,4].map((id) => (
                    <div key={id} className="photo-container">
                    <img src={`/images/photo${id}.webp`} alt={`Photo ${id}`} />
                    </div>
                ))}
            </div>
        </div>
        <div className='menu'>
            <div className='menu-item'>
                <h1>klasiky</h1>
                <p>gramáž</p>
                <span>cena</span>
            </div>
            <div class="menu-item">
                <h3>espresso</h3>
                <p>8g</p>
                <span class="price">45,-</span>
            </div>
            <div class="menu-item">
                <h3>lungo</h3>
                <p>8g</p>
                <span class="price">45,-</span>
            </div>
            <div class="menu-item">
                <h3>doppio</h3>
                <p>8g</p>
                <span class="price">60,-</span>
            </div>
            <div class="menu-item">
                <h3>cappuccino</h3>
                <p>8g</p>
                <span class="price">60,-</span>
            </div>
            <div class="menu-item">
                <h3>cappuccino grande</h3>
                <p>8g</p>
                <span class="price">75,-</span>
            </div>
            <div class="menu-item">
                <h3>latte macchiato</h3>
                <p>8g</p>
                <span class="price">60,-</span>
            </div>
            <div class="menu-item">
                <h3>český turek</h3>
                <p>8g</p>
                <span class="price">40,-</span>
            </div>
            <div class="menu-item">
                <h3>vídeňská káva</h3>
                <p>8g</p>
                <span class="price">60,-</span>
            </div>
            <div class="menu-item">
                <h3>alžírská káva</h3>
                <p>8g</p>
                <span class="price">70,-</span>
            </div>
            <div class="menu-item">
                <h3>irská káva</h3>
                <p>8g</p>
                <span class="price">80,-</span>
            </div>
            <br></br>
            <br></br>
            <div class="menu-item">
                <h3>mléko pro děti</h3>
                <p>0,1l</p>
                <span class="price">25,-</span>
            </div>
            <div class="menu-item">
                <h3>mléko ke kávě</h3>
                <p></p>
                <span class="price">3,-</span>
            </div>
            <div class="menu-item">
                <h3>porce šlehačky</h3>
                <p></p>
                <span class="price">15,-</span>
            </div>
            <div class="menu-item">
                <h3>med</h3>
                <p></p>
                <span class="price">12,-</span>
            </div>
            <div class="menu-item">
                <h3>alternativní mléko</h3>
                <p></p>
                <span class="price">+5,-</span>
            </div>
            <br></br>
            <br></br>
            <div class="menu-item">
                <h3>espresso na ledu</h3>
                <p>8g</p>
                <span class="price">45,-</span>
            </div>
            <div class="menu-item">
                <h3>espresso tonic</h3>
                <p>8g</p>
                <span class="price">60,-</span>
            </div>
            <div class="menu-item">
                <h3>ledove latte</h3>
                <p>8g</p>
                <span class="price">60,-</span>
            </div>
            <div class="menu-item">
                <h3>- se zmrzlinou</h3>
                <p>8g</p>
                <span class="price">70,-</span>
            </div>
            <div class="menu-item">
                <h3>- se zmrzlinou a šlehačkou</h3>
                <p></p>
                <span class="price">80,-</span>
            </div>
        </div>
        <div className='menu'>
            <div className='menu-item'>
                <h1>nealko&nbsp;nápoje</h1>
                <p></p>
                <span></span>
            </div>
            <div class="menu-item">
                <h3>džus jablko/hruška</h3>
                <p>0,1l</p>
                <span class="price">15,-</span>
            </div>
            <div class="menu-item">
                <h3>domácí limonáda</h3>
                <p>0,3/0,5l</p>
                <span class="price">45/60,-</span>
            </div>
            <div class="menu-item">
                <h3>tonic</h3>
                <p></p>
                <span class="price">15,-</span>
            </div>
            <div class="menu-item">
                <h3>voda</h3>
                <p></p>
                <span class="price">10/15/20,-</span>
            </div>
        </div>
        <div className='menu'>
            <div className='menu-item'>
                <h1>teplé&nbsp;nápoje</h1>
                <p></p>
                <span></span>
            </div>
            <div class="menu-item">
                <h3>čaj porcovaný</h3>
                <p></p>
                <span class="price">35,-</span>
            </div>
            <div class="menu-item">
                <h3>čaj zázvorový</h3>
                <p></p>
                <span class="price">45,-</span>
            </div>
            <div class="menu-item">
                <h3>svařený džus jablko/hruška</h3>
                <p></p>
                <span class="price">40,-</span>
            </div>
            <div class="menu-item">
                <h3>horká čokoláda</h3>
                <p></p>
                <span class="price">55,-</span>
            </div>
            <div class="menu-item">
                <h3>- se šlehačkou</h3>
                <p></p>
                <span class="price">65,-</span>
            </div>
            <div class="menu-item">
                <h3>grog</h3>
                <p>0,2l</p>
                <span class="price">50,-</span>
            </div>
            <div class="menu-item">
                <h3>horká griotka</h3>
                <p>0,2l</p>
                <span class="price">45,-</span>
            </div>
            <div class="menu-item">
                <h3>svařák</h3>
                <p>0,2l</p>
                <span class="price">55,-</span>
            </div>
        </div>
        <div className='menu'>
            <div className='menu-item'>
                <h1>piva</h1>
                <p></p>
                <span></span>
            </div>
            <div class="menu-item">
                <h3>proud</h3>
                <p>0,33</p>
                <span class="price">48,-</span>
            </div>
            <div class="menu-item">
                <h3>birell</h3>
                <p></p>
                <span class="price">35,-</span>
            </div>
            <div class="menu-item">
                <h3>frisco</h3>
                <p></p>
                <span class="price">45,-</span>
            </div>
        </div>
        <div className='menu'>
            <div className='menu-item'>
                <h1>vína</h1>
                <p></p>
                <span></span>
            </div>
            <div class="menu-item">
                <h3>bílé - dle nabídky</h3>
                <p>0,1l</p>
                <span class="price">28,-</span>
            </div>
            <div class="menu-item">
                <h3>červené - dle nabídky</h3>
                <p>0,1l</p>
                <span class="price">28,-</span>
            </div>
            <div class="menu-item">
                <h3>prosecco</h3>
                <p>0,1l</p>
                <span class="price">29,-</span>
            </div>
            <div class="menu-item">
                <h3>levandulové prosecco</h3>
                <p>0,1l</p>
                <span class="price">48,-</span>
            </div>
        </div>
        <div className='menu'>
            <div className='menu-item'>
                <h1>alko</h1>
                <p></p>
                <span></span>
            </div>
            <div class="menu-item">
                <h3>vaječňák</h3>
                <p>0,04l</p>
                <span class="price">35,-</span>
            </div>
            <div class="menu-item">
                <h3>božkov republika</h3>
                <p>0,04l</p>
                <span class="price">50,-</span>
            </div>
            <div class="menu-item">
                <h3>griotka</h3>
                <p>0,04l</p>
                <span class="price">35,-</span>
            </div>
            <div class="menu-item">
                <h3>tullamore dew</h3>
                <p>0,04l</p>
                <span class="price">50,-</span>
            </div>
        </div>
        <div className='menu'>
            <div className='menu-item'>
                <h1>něco&nbsp;na&nbsp;zub</h1>
                <p></p>
                <span></span>
            </div>
            <div class="menu-item">
                <h3>toust s mozzarellou a bazalkovým pestem, obloha</h3>
                <p></p>
                <span class="price">65,-</span>
            </div>
            <div class="menu-item">
                <h3>nachos se zakys. smetanou</h3>
                <p></p>
                <span class="price">70,-</span>
            </div>
            <div class="menu-item">
                <h3>nachos</h3>
                <p></p>
                <span class="price">35,-</span>
            </div>
            <div class="menu-item">
                <h3>rakvička se šlehačkou</h3>
                <p></p>
                <span class="price">30,-</span>
            </div>
            <div class="menu-item">
                <h3>vanilková zmrzlina</h3>
                <p></p>
                <span class="price">20,-</span>
            </div>
        </div>
    </div>
  )
}

export default Menu
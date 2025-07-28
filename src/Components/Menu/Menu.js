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
                    <img src={`${process.env.PUBLIC_URL}/images/photo${id}.webp`} alt={`Photo ${id}`} />
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
                <span class="price">50,-</span>
            </div>
            <div class="menu-item">
                <h3>lungo</h3>
                <p>8g</p>
                <span class="price">50,-</span>
            </div>
            <div class="menu-item">
                <h3>doppio</h3>
                <p>8g</p>
                <span class="price">70,-</span>
            </div>
            <div class="menu-item">
                <h3>cappuccino</h3>
                <p>8g</p>
                <span class="price">60,-</span>
            </div>
            <div class="menu-item">
                <h3>latte macchiato</h3>
                <p>8g</p>
                <span class="price">75,-</span>
            </div>
            <div class="menu-item">
                <h3>flat white</h3>
                <p>8g</p>
                <span class="price">80,-</span>
            </div>
            <div class="menu-item">
                <h3>český turek</h3>
                <p>8g</p>
                <span class="price">45,-</span>
            </div>
            <br></br>
            <br></br>
            <div class="menu-item">
                <h3>babyccino</h3>
                <p>0,1l</p>
                <span class="price">30,-</span>
            </div>
            <div class="menu-item">
                <h3>mléko ke kávě</h3>
                <p></p>
                <span class="price">3,-</span>
            </div>
        </div>
        <div className='menu'>
            <div className='menu-item'>
                <h1>ledová&nbsp;káva</h1>
                <p></p>
                <span></span>
            </div>
             <div class="menu-item">
                <h3>espresso na ledu</h3>
                <p>8g</p>
                <span class="price">50,-</span>
            </div>
            <div class="menu-item">
                <h3>espresso tonic</h3>
                <p>8g</p>
                <span class="price">65,-</span>
            </div>
            <div class="menu-item">
                <h3>ledové latte</h3>
                <p>8g</p>
                <span class="price">65,-</span>
            </div>
            <div class="menu-item">
                <h3>latté se zmrzlinou</h3>
                <p>8g</p>
                <span class="price">80,-</span>
            </div>
            <div class="menu-item">
                <h3>affogato</h3>
                <p></p>
                <span class="price">70,-</span>
            </div>
            <br></br>
            <br></br>
            <div class="menu-item">
                <h3>kopeček zmrzliny</h3>
                <p></p>
                <span class="price">25,-</span>
            </div>
        </div>
        <div className='menu'>
            <div className='menu-item'>
                <h1>nealko&nbsp;nápoje</h1>
                <p></p>
                <span></span>
            </div>
            <div class="menu-item">
                <h3>džus <span>- jablko</span></h3>
                <p>0,1l</p>
                <span class="price">15,-</span>
            </div>
            <div class="menu-item">
                <h3>domácí limonáda</h3>
                <p>0,3/0,5l</p>
                <span class="price">50/65,-</span>
            </div>
            <div class="menu-item">
                <h3>tonic</h3>
                <p>0,1l</p>
                <span class="price">15,-</span>
            </div>
            <div class="menu-item">
                <h3>capri-sun</h3>
                <p>0,2l</p>
                <span class="price">20,-</span>
            </div>
            <div class="menu-item">
                <h3>sodovka/voda</h3>
                <p>0,3/0,5l</p>
                <span class="price">10/15,-</span>
            </div>
        </div>
        <div className='menu'>
            <div className='menu-item'>
                <h1>teplé&nbsp;nápoje</h1>
                <p></p>
                <span></span>
            </div>
            <div class="menu-item">
                <h3>grog</h3>
                <p>0,2l</p>
                <span class="price">60,-</span>
            </div>
            <div class="menu-item">
                <h3>horká griotka</h3>
                <p>0,2l</p>
                <span class="price">50,-</span>
            </div>
        </div>
        <div className='menu'>
            <div className='menu-item'>
                <h1>piva</h1>
                <p></p>
                <span></span>
            </div>
            <div class="menu-item">
                <h3>proud <span>- láhev</span></h3>
                <p>0,3l</p>
                <span class="price">48,-</span>
            </div>
            <div class="menu-item">
                <h3>birell <span>- láhev</span></h3>
                <p>0,5l</p>
                <span class="price">35,-</span>
            </div>
        </div>
        <div className='menu'>
            <div className='menu-item'>
                <h1>vína</h1>
                <p></p>
                <span></span>
            </div>
            <div class="menu-item">
                <h3>bílé suché <span>- Chardonnay</span></h3>
                <p>0,1l</p>
                <span class="price">28,-</span>
            </div>
            <div class="menu-item">
                <h3>červené suché <span>- Merlot</span></h3>
                <p>0,1l</p>
                <span class="price">30,-</span>
            </div>
            <br></br>
            <br></br>
            <div class="menu-item">
                <h3>prosecco</h3>
                <p>0,1l</p>
                <span class="price">35,-</span>
            </div>
            <div class="menu-item">
                <h3>levandulové prosecco</h3>
                <p>0,1l</p>
                <span class="price">60,-</span>
            </div>
            <div class="menu-item">
                <h3>frisco</h3>
                <p>0,3l</p>
                <span class="price">45,-</span>
            </div>
        </div>
        <div className='menu'>
            <div className='menu-item'>
                <h1>alko</h1>
                <p></p>
                <span></span>
            </div>
            <div class="menu-item">
                <h3>vaječňý likér</h3>
                <p>0,04l</p>
                <span class="price">40,-</span>
            </div>
            <div class="menu-item">
                <h3>božkov republica</h3>
                <p>0,04l</p>
                <span class="price">55,-</span>
            </div>
            <div class="menu-item">
                <h3>griotka</h3>
                <p>0,04l</p>
                <span class="price">40,-</span>
            </div>
            <div class="menu-item">
                <h3>tullamore dew</h3>
                <p>0,04l</p>
                <span class="price">65,-</span>
            </div>
            <div class="menu-item">
                <h3>gin beefeater</h3>
                <p>0,04l</p>
                <span class="price">65,-</span>
            </div>
            <br></br>
            <br></br>
            <div class="menu-item">
                <h3>gin tonic <span>-&nbsp;0,04l&nbsp;beefeater</span></h3>
                <p>0,2l</p>
                <span class="price">100,-</span>
            </div>
            <div class="menu-item">
                <h3>cola s rumem <span>-&nbsp;0,04l&nbsp;božkov&nbsp;republica</span></h3>
                <p>0,2l</p>
                <span class="price">90,-</span>
            </div>
            <div class="menu-item">
                <h3>aperol spritz <span>- 0,06l&nbsp;Prosecco,&nbsp;0,04l Aperol, soda</span></h3>
                <p>0,04l</p>
                <span class="price">100,-</span>
            </div>
        </div>
    </div>
  )
}

export default Menu
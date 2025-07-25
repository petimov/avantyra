import { Outlet, useLocation } from 'react-router-dom';
import './Template.css';
import { useEffect } from 'react';
import { animatePageIn, animatePhotoAppear } from '../../utils/animations'; // example

export default function Template() {
  const location = useLocation();

 useEffect(() => {
  animatePageIn();
  animatePhotoAppear();
}, [location.pathname]);

  return (
    <div>
      <div id="banner-1" className="banner banner-1"></div>
      <div id="banner-2" className="banner banner-2"></div>
      <div id="banner-3" className="banner banner-3"></div>
      <div id="banner-4" className="banner banner-4"></div>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

import React from 'react';

import './Chef.css';
import {SubHeading } from '../../components';
import {images} from '../../constants'
const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
      
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chief img" />
      </div>
     <div className="app__wrapper_info">
      <SubHeading title={"Chef's Word"} />
      <h1 className="headtext__cormorant">What we Belive In</h1>

      <div className="app__chef-content">
        <div className='app__chef-content_quote'>

<p className="p__opensans"> <img src={images.quote} alt="quote" />Lorem ipsum dolor sit amet consectetur a
dipisicing elit. Accusantium, eveniet.</p>
<p className="p__opensans">Lorem ipsum d
olor sit amet consectetur adipisicing eli
t. Quas pariatur quae cum sint, placeat con
sequuntur doloremque facere at nesciunt quae
rat possimus, sed optio sunt quod, eaque neque 
incidu
nt laudantium dolor.</p>
        </div>
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="sign" />

        </div>
      </div>
     </div>

  </div>
);

export default Chef;

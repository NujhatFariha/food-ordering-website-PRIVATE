import React from 'react';
import bg from '../../../images/bannerBg.png';


const bannerBg = {
    background: `url(${bg})`,
    height: '110vh',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(124,0,0.0.1)',
    backgroundSize: 'cover',

}

const Banner = () => {
    
    return (
        <div  style={bannerBg} sx={{margin: '0px', padding: '0px'}}>
             
        </div>
    );
};

export default Banner;
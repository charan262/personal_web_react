import React from 'react';
import  charanImg  from '../constants/assets/charanAnim.png';
import car from '../constants/assets/car.jpg';
import './Header.css';

export default class Header extends React.Component {
    render(){
        return(
            <div className="container">
                <div className='textStyle'>Welcome to Charan's Page</div>
            </div>           
        )
        }
}

import React from 'react';
import  charanImg  from '../constants/assets/charanAnim.png';
import './Header.css';

export default class Header extends React.Component {
    render(){
        return(
            <div>
                <img src={charanImg} className="imgStyle"/>
            </div>
            
            
        )
        }
}

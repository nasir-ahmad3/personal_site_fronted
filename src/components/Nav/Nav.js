import { NavLink } from 'react-router-dom';
import './Nav.css'
import { useState } from 'react';

export default function Nav(){
    const body = document.querySelector('body')
    const [navigationActive, setNavigationActive] = useState('')
 

    const changeTheme = ()=> {
        body.classList.toggle('light')
    }

    const handelNavActive  = () => {
        setNavigationActive(prevnav => prevnav == 'active' ?  '' : 'active')
    }

    return(
        <nav className={`container ${navigationActive}`}>
            <div className="left">
                <svg viewBox="100 150 400 200">
                    <g fill='#fefefe'>
                        <path d="M113.7241,304.4234h34.17767v-117.48575h14.73912c11.10774,0 17.30245,10.68052 17.30245,37.38183v80.10392h34.17767v-80.10392c0,-33.10962 -12.60302,-58.74288 -34.60489,-58.74288h-23.92437l-7.68998,15.37995v-15.37995h-34.17767z" data-paper-data="{&quot;glyphName&quot;:&quot;N&quot;,&quot;glyphIndex&quot;:0,&quot;firstGlyphOfWord&quot;:true,&quot;word&quot;:1}"></path>
                        <path d="M291.02078,304.4234h34.17767c0,-28.6238 -6.83553,-51.48012 -19.65216,-69.4234c-13.67107,-18.79772 -33.75045,-30.75991 -58.74288,-37.38183l-8.97164,33.10962c17.51606,4.69943 30.97352,12.38941 39.94516,24.5652c8.54442,11.74858 13.24385,27.98297 13.24385,49.13041zM249.36674,304.4234l24.5652,-24.5652l-24.5652,-24.5652l-24.5652,24.5652z" data-paper-data="{&quot;glyphName&quot;:&quot;&quot;,&quot;glyphIndex&quot;:1,&quot;word&quot;:1}"></path>
                        <path d="M402.09822,304.4234h34.17767c0,-28.6238 -6.83553,-51.48012 -19.65216,-69.4234c-13.67107,-18.79772 -33.75045,-30.75991 -58.74288,-37.38183l-8.97164,33.10962c17.51606,4.69943 30.97352,12.38941 39.94516,24.5652c8.54442,11.74858 13.24385,27.98297 13.24385,49.13041zM360.44418,304.4234l24.5652,-24.5652l-24.5652,-24.5652l-24.5652,24.5652z" data-paper-data="{&quot;glyphName&quot;:&quot;&quot;,&quot;glyphIndex&quot;:2,&quot;lastGlyphOfWord&quot;:true,&quot;word&quot;:1}"></path>
                    </g>
                </svg>
            </div>
            <div className="right">
                <div className="btn" onClick={handelNavActive}>Menu</div>
                <ul>
                   <li>
                        <NavLink onClick={() => setNavigationActive('')} to='/'>home</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setNavigationActive('')} to='/projects/'>projects</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setNavigationActive('')} to='/services/'>services</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setNavigationActive('')} to='/blog/'>blog</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setNavigationActive('')} to='/about/'>about me</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setNavigationActive('')} to='/contact/'>contact me</NavLink>
                    </li>
                    <ol className='theme' onClick={changeTheme}>
                        <a style={{cursor: 'pointer'}}>theme</a>
                    </ol>
                </ul>
            </div>
        </nav>
    )
}
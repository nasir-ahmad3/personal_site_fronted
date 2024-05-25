import { NavLink } from 'react-router-dom';
import './Nav.css';
import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export default function Nav() {
    const { theme, ThemeChanger } = useContext(ThemeContext);
    const body = document.querySelector('body');
    const [navigationActive, setNavigationActive] = useState('');
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        body.classList = theme;
    }, [theme]);


    const handleScroll = () => {
        if (window.scrollY === 0) {
            setIsAtTop(true);
        } else {
            setIsAtTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const changeTheme = () => {
        let newTheme = theme === 'dark' ? 'light' : 'dark';
        ThemeChanger(newTheme);
    };

    const handleNavActive = () => {
        setNavigationActive(prevNav => prevNav === 'active' ? '' : 'active');
    };

    return (
        <nav  className={`container ${navigationActive} ${isAtTop ? '' : 'at-top'}`}>
            <div className="left" >
                <svg viewBox="100 150 400 200" data-aos="fade-up" data-aos-delay="1000">
                    <defs>
                        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="var(--light-green)" />
                            <stop offset="100%" stopColor="var(--light-yellow)" />
                        </linearGradient>
                    </defs>
                    <g>
                        <path d="M113.7241,304.4234h34.17767v-117.48575h14.73912c11.10774,0 17.30245,10.68052 17.30245,37.38183v80.10392h34.17767v-80.10392c0,-33.10962 -12.60302,-58.74288 -34.60489,-58.74288h-23.92437l-7.68998,15.37995v-15.37995h-34.17767z" data-paper-data="{&quot;glyphName&quot;:&quot;N&quot;,&quot;glyphIndex&quot;:0,&quot;firstGlyphOfWord&quot;:true,&quot;word&quot;:1}" fill="url(#textGradient)"></path>
                        <path d="M291.02078,304.4234h34.17767c0,-28.6238 -6.83553,-51.48012 -19.65216,-69.4234c-13.67107,-18.79772 -33.75045,-30.75991 -58.74288,-37.38183l-8.97164,33.10962c17.51606,4.69943 30.97352,12.38941 39.94516,24.5652c8.54442,11.74858 13.24385,27.98297 13.24385,49.13041zM249.36674,304.4234l24.5652,-24.5652l-24.5652,-24.5652l-24.5652,24.5652z" data-paper-data="{&quot;glyphName&quot;:&quot;&quot;,&quot;glyphIndex&quot;:1,&quot;word&quot;:1}" fill="url(#textGradient)"></path>
                        <path d="M402.09822,304.4234h34.17767c0,-28.6238 -6.83553,-51.48012 -19.65216,-69.4234c-13.67107,-18.79772 -33.75045,-30.75991 -58.74288,-37.38183l-8.97164,33.10962c17.51606,4.69943 30.97352,12.38941 39.94516,24.5652c8.54442,11.74858 13.24385,27.98297 13.24385,49.13041zM360.44418,304.4234l24.5652,-24.5652l-24.5652,-24.5652l-24.5652,24.5652z" data-paper-data="{&quot;glyphName&quot;:&quot;&quot;,&quot;glyphIndex&quot;:2,&quot;lastGlyphOfWord&quot;:true,&quot;word&quot;:1}" fill="url(#textGradient)"></path>
                    </g>
                </svg>
            </div>
            <div className="right">
                <div className="btn" onClick={handleNavActive}>Menu</div>
                <ul>
                    <li data-aos="fade-up" data-aos-delay="100">
                        <NavLink onClick={() => setNavigationActive('')} to='/'>home</NavLink>
                    </li>
                    <li  data-aos="fade-up" data-aos-delay="200">
                        <NavLink onClick={() => setNavigationActive('')} to='/projects/'>projects</NavLink>
                    </li>
                    <li  data-aos="fade-up" data-aos-delay="300">
                        <NavLink onClick={() => setNavigationActive('')} to='/services/'>services</NavLink>
                    </li>
                    <li  data-aos="fade-up" data-aos-delay="400">
                        <NavLink onClick={() => setNavigationActive('')} to='/blog/'>blog</NavLink>
                    </li>
                    <li  data-aos="fade-up" data-aos-delay="500">
                        <NavLink onClick={() => setNavigationActive('')} to='/about/'>about me</NavLink>
                    </li>
                    <li  data-aos="fade-up" data-aos-delay="600">
                        <NavLink onClick={() => setNavigationActive('')} to='/contact/'>contact me</NavLink>
                    </li>
                    <ol className='theme' onClick={changeTheme} data-aos="fade-up" data-aos-delay="700">
                        <a style={{ cursor: 'pointer' }}>theme</a>
                    </ol>
                </ul>
            </div>
        </nav>
    );
}

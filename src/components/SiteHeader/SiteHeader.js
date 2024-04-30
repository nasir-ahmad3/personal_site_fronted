import './SiteHeader.css';
import HeaderImg from '../../assets/images/header_bg.png';
import Typewriter from 'typewriter-effect';
import { useFetch } from '../../hooks/UseFetch';
import { useEffect, useState } from 'react';
// import Loading from '../loader/Loading';

export default function SiteHeader() {
  const {data} = useFetch('siteheader/');
  const [texts, setTexts] = useState([]);
  const [years, setYears] = useState('3')

  useEffect(() => {
    const fetchData = async () => {
      if (data) {
            setTexts((prevTexts) => [...prevTexts,  ...( data[0].digital_words)]);
            setTexts((prevTexts) => prevTexts.map((t) =>(`<span class="text">${t}</span>`)))
            setYears(data[0].expoerince)
        }
    };
    fetchData();
  }, [data]);

  return (
    <>
        <div className="siteHeader container">
        <div className="left">
            <div className="experince">
            <Typewriter
                options={{
                autoStart: true,
                loop: true,
                delay: 100,
                strings: [`${years} years of experience.........`],
                }}
            />
            </div>
            <div className="title">
              <p>
                Empowering digital <br />
                <span style={{opacity: 0}}>
                    p
                </span>
              </p>
              <div>
                  <Typewriter
                  options={{
                      autoStart: true,
                      loop: true,
                      delay: 200,
                      strings: texts,
                  }}
                  />
              </div>
            </div>
            <p className="content">{data ? data[0].description : 'loading ......'}</p>
        </div>
        <div className="right">
            <div className="bg"></div>
            <div className="img" style={{ backgroundImage: `url(${HeaderImg})` }}></div>
        </div>
        </div>
    </>
  );
}

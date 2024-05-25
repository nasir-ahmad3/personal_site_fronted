import './SiteHeader.css';
import { useFetch } from '../../hooks/UseFetch';
import { useEffect, useState } from 'react';
import Particles from './particles';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

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
    <ScrollContainer>
        <ScrollPage>
          <div className="siteHeader container" id='particles-js' style={{overflow: 'hidden'}}>
            <Particles id="tsparticles" />
            <div className='des-header'>
                {/* <Animator animation={Move(0, 0, -1000, 0)}> */}
                  <h1 className='title gradient-text' data-aos="fade-down">
                    Hello.
                  </h1>
                {/* </Animator> */}
              {/* <Animator animation={batch(Fade(-4, 1))}>   */}
                <p data-aos="fade-right">
                  I'm Nasir Ahmad
                </p>
              {/* </Animator> */}
              {/* <Animator animation={Move(0, 0, 1000, 0)}> */}
                <div data-aos="fade-up">
                  a creative web developer. I design and build innovative, responsive websites. Let's work together to bring your digital ideas to life. Contact me today!
                </div>
              {/* </Animator> */}
            </div>
          </div>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
}

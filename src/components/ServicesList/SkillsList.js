import './ServicesList.css'
import {useFetch} from '../../hooks/UseFetch' 
export default function Skills(){
    const {data: skills} = useFetch('Skills/')
    const items = []
    
    
    for (let i = 1; i <= 9; i++) {
        items.push(
            <li key={i} className='service'>
                <div className="img">
                    <span className="skeleton skeleton-text skeleton-image skeleton-service-img"></span>
                </div>
                <div className='description'>
                    <div data-aos="zoom-out"  className="title">
                        <span className="skeleton skeleton-text skeleton-title"></span>
                    </div>
                    <div data-aos="fade-up"  className="des">
                        <span className="skeleton skeleton-text skeleton-text-project-des"></span>
                        <span className="skeleton skeleton-text skeleton-text-project-des"></span>
                    </div>
                </div>
            </li>
        ) 
    }
    return(
        <>
            <h1 className="title gradient-text" data-aos="fade-up">my skills</h1>
            <ul className="services_container">
                {!skills && items}
                {skills && skills.map((skill,index) => (
                    <li key={index} className='service'>
                        <div data-aos="fade-down"  className="img" style={{backgroundImage: `url(${skill.thumbnail})`}}></div>
                        <div className='description'>
                            <div data-aos="zoom-out"  className="title">{skill.title}</div>
                            <div data-aos="fade-up"  className="des">{skill.description}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}
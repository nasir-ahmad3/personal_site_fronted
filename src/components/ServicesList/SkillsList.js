import './ServicesList.css'
import {useFetch} from '../../hooks/UseFetch' 
export default function Skills(){
    const {data: skills, err, isLoading} = useFetch('Skills/')

    return(
        <>
            <h1 className="title gradient-text" data-aos="fade-up">my skills</h1>
            <ul className="services_container">
                {skills && skills.map((skill,index) => (
                <li key={index}>
                    <div data-aos-delay={`${index * 150}`}  data-aos="fade-down"  className="img" style={{backgroundImage: `url(${skill.thumbnail})`}}></div>
                    <div data-aos-delay={`${index * 150}`}  data-aos="zoom-out"  className="title">{skill.title}</div>
                    <div data-aos-delay={`${index * 150}`}  data-aos="fade-up"  className="des">{skill.description}</div>
                </li>
            ))}
            </ul>
        </>
    )
}
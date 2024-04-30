import './ServicesList.css'
import {useFetch} from '../../hooks/UseFetch' 
export default function Skills(){
    const {data: skills, err, isLoading} = useFetch('Skills/')

    return(
        <>
            <h1 className="title gradient-text">my skills</h1>
            <ul className="services_container">
                {skills && skills.map((skill,index) => (
                <li key={index}>
                    <div className="img" style={{backgroundImage: `url(${skill.thumbnail})`}}></div>
                    <div className="title">{skill.title}</div>
                    <div className="des">{skill.description}</div>
                </li>
            ))}
            </ul>
        </>
    )
}
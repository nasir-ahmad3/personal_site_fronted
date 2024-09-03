import { useState } from 'react'
import { useFetch } from '../../hooks/UseFetch'
import './ProjectsList.css'

export default function Projects (params){
    const {data: projects, err} = useFetch('combined-projects-view/')
    const [filterBy, setFilterBy] = useState('')
    const items = []
    
    for (let i = 1; i <= 3; i++) {
        items.push(
            <div className="box" data-aos="flip-left" key={i}>
                <div className='img skeleton skeleton-image'></div>
                <p className="title gradient-text">
                    <span className='skeleton skeleton-text skeleton-text-project-title'></span>
                </p>
                <div className="des">
                    <span className='skeleton skeleton-text skeleton-text-project-des'></span>
                    <span className='skeleton skeleton-text skeleton-text-project-des'></span>
                    <span className='skeleton skeleton-text skeleton-text-project-des'></span>
                    <span className='skeleton skeleton-text skeleton-text-project-des'></span>
                    <span className='skeleton skeleton-text skeleton-text-project-des'></span>
                    <span className='skeleton skeleton-text skeleton-text-project-des'></span>
                    <span className='skeleton skeleton-text skeleton-text-project-des'></span>
                    <span className='skeleton skeleton-text skeleton-text-project-des'></span>
                    <span className='skeleton skeleton-text skeleton-text-project-des'></span>
                    <span className='skeleton skeleton-text skeleton-text-project-des skeleton-text-last'></span>

                </div>
            </div>
        ) 
    }
    
    return( 
        <>
            <section className={`projects container ${params.url == 'project' ? 'mt-100' : ''}`} id="projects">
                    {err && (<div>{err}</div>)}
                <h1 className="title gradient-text" data-aos="fade-up">Projects</h1>
                <div className='filter-wrapper'>
                    <div  onClick={() => setFilterBy('')} className={`filter-box ${filterBy === '' ? 'active' : ''}`}>All</div>
                    <div  onClick={() => setFilterBy('f')} className={`filter-box ${filterBy === 'f' ? 'active' : ''}`}>full website</div>
                    <div  onClick={() => setFilterBy('mf')} className={`filter-box ${filterBy === 'fm' ? 'active' : ''}`}>frontend mini projects</div>  
                </div>
                <div className="box-wrapper">
                    {!projects &&items}
                    {projects && projects.filter(p => p.project_type === filterBy || filterBy === '' ).map((project, index) => (
                        <div className="box" key={index}>
                            <div className='img' style={{backgroundImage: `url(${project.thumbnail})`}} ></div>
                            <p className="title gradient-text">{project.title}</p>
                            <div className="des">
                                {project.description}
                                <a href={project.project_type === 'f' ? project.link : `https://projects.nasirahmadahmady.com/?project=${project.id}`} >read more</a>
                            </div>
                        </div>
                    ))}             
                    <div className="cover"></div>
                </div>
            </section>
        </>
    )
}
import './experience.css';
import { useEffect, useState, useRef } from 'react';
import {useFetch} from '../../hooks/UseFetch'

export default function Experience() {
    const {data} = useFetch('experiences')
    const {data: header} = useFetch('experiences-header')
    const [showAll, setShowAll] = useState(false);
    const [experiencesList, setExperiencesList] = useState([]);
    const experienceSectionRef = useRef(null);

    useEffect(() => {
        if(data){
            setExperiencesList(showAll ? data : data.slice(0, 4));
        }        
    }, [showAll, data]);

    const handleScroll = () => {
        if (experienceSectionRef.current && showAll) {
            experienceSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];

        const year = date.getFullYear();
        const month = months[date.getMonth()];

        const yearFormatted = `${year}`;

        return `${yearFormatted} ${month}`;
    }

    return (
        <section className="experience container" ref={experienceSectionRef}>
            <h1 className="title gradient-text" data-aos="fade-up">Experiences</h1>
            <div className="per-des">
                <div className="name">Nasir Ahmad Ahmady</div>
                <div className="job-title">{header && header.job_title}</div>
                <div className="des">{header && header.description}</div>
            </div>
            <div className="sub-title">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    viewBox="0 0 48 48"
                    style={{ enableBackground: 'new 0 0 512 512' }}
                    xmlSpace="preserve"
                >
                    <g>
                        <path
                            d="M19 29a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2zm26 0a1 1 0 0 0-1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 1 0-2 0v8c0 1.654 1.346 3 3 3h38c1.654 0 3-1.346 3-3v-8a1 1 0 0 0-1-1zm1-17v12c0 2.757-2.243 5-5 5h-8a1 1 0 1 1 0-2h8c1.654 0 3-1.346 3-3V13H4v11c0 1.654 1.346 3 3 3h6.417a1 1 0 1 1 0 2H7c-2.757 0-5-2.243-5-5V12a1 1 0 0 1 1-1h11.382l1.723-3.447A1 1 0 0 1 17 7h14a1 1 0 0 1 .895.553L33.618 11H45a1 1 0 0 1 1 1zm-14.618-1-1-2H17.618l-1 2z"
                            fill="#319ec8"
                            opacity="1"
                            data-original="#000000"
                        />
                        <g fill="#0096ff">
                            <path
                                d="M33 23h-4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm-1 8h-2v-6h2zM18 23h-4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm-1 8h-2v-6h2z"
                                fill="#319ec8"
                                opacity="1"
                                data-original="#0096ff"
                            />
                        </g>
                    </g>
                </svg>
                Experiences
            </div>
            <div className="experience-wrapper">
                {data && experiencesList.map((exp, index) => (
                    <div className="experience" key={index}>
                        <div className="header">
                            <div className="time-start">{formatDate(exp.data_start)} - {exp.still_working ? 'Now' : formatDate(exp.date_end) }</div>
                            <div className="company-name">{exp.company_name}</div>
                            <div className="job-title">{exp.job_title}</div>
                        </div>
                        <div className="des">{exp.job_description}</div>
                    </div>
                ))}
                {data && data.length > 4 && (
                    <div
                        className="btn show"
                        onClick={() => {
                            setShowAll(!showAll);
                            handleScroll();
                        }}
                    >
                        {showAll ? 'Show Less' : 'Show More'}
                    </div>
                )}
            </div>
        </section>
    );
}

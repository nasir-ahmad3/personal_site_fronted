import SiteHeader from "../../components/SiteHeader/SiteHeader"
import ProjectsList from "../../components/ProjectsList/ProjectsList"
import ServicesList from "../../components/ServicesList/ServicesList"
import BlogList from "../../components/BlogList/BlogList"
import About from "../../components/About/About"
import Feedback from "../../components/Feedback/Feedback"
import Contact from "../../components/Contact/Contact"
import Responsive from '../../components/responsive/responsive'
import { useFetch } from "../../hooks/UseFetch"


export default function Home(){
    const {data: skills, isLoading, err } = useFetch('blog/')
    return (
        <>
            <SiteHeader />
            <ProjectsList />
            <ServicesList />
            <BlogList url='blog/' skills={skills} isLoading={isLoading} err={err} />
            <About />
            <Feedback />
            <Contact />
            <Responsive/>
        </>
    )
}
import ProjectSlide from "./ProjectSlide";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Portfolio = ({ projects, size }) => {
    return (
        <section id="portfolio" className="md:px-20 px-4 snap-start">
            <Slide slidesToScroll={size}>
                {projects.map((project) => {
                    return (
                        <ProjectSlide {...project} key={project.id}/>
                    );
                })
                }
            </Slide>
        </section>
        
    );
}

export default Portfolio;
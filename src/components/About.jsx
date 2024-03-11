import image from "../placeholder.png";

const About = () => {
    return (
        <div id="about" className="flex sm:flex-row flex-col justify-between sm:mx-32 mx-5 my-20">
            <div className="flex flex-col sm:w-1/2 sm:mt-10 items-center">
                <h3 className="mb-20 text-3xl text-left">Gonçalo Marques</h3>
                <p className="text-lg w-3/4">Currently pursuing a Bachelor's Degree in Informatics and Computing Engineering at the Faculty of Engineering of the University of Porto, I am eager to apply my knowledge in real-life problems, to explore the numerous fields within computer science, develop my technical and social skills, while making lives better with software.</p>
            </div>
            <div className="sm:w-1/3 sm:mt-0 mt-10">
                <img className="w-full"src={image} alt="me"/>
            </div>
        </div>
    );
}

export default About;
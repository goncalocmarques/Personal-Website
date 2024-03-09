import image from "../placeholder.png";

const About = () => {
    return (
        <div id="about" className="flex sm:flex-row flex-col justify-between sm:mx-32 mx-5 my-20">
            <div className="flex flex-col sm:w-1/2 sm:mt-10 items-center">
                <h3 className="mb-20 text-3xl">Gonçalo Marques</h3>
                <p className="text-lg">SDFFJHS LJFSDFSH SLKJFSLKJ JSDKLFJSDFL</p>
            </div>
            <div className="sm:w-1/3 sm:mt-0 mt-10">
                <img className="w-full"src={image} alt="image"/>
            </div>
        </div>
    );
}

export default About;
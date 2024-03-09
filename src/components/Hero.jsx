import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center pt-64 snap-start'>
            <h1 className='sm:text-7xl text-5xl mb-3 text-center'>Hi, I'm Gonçalo</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '' }}>
                <TypeAnimation
                    sequence={[
                        "I'm a computer engineering student",
                        1500,
                        "I'm a tech enthusiast",
                        2000,
                        "I'm curious about new technologies",
                        2000,
                        "I'm eager to solve real life problems",
                        1500
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block', textAlign: 'center' }}
                    repeat={Infinity}
                />
            </div>
            <button className='mt-20 bg-buttonGray hover:opacity-55 h-16 w-48 rounded-full text-white opacity-80'>Checkout my CV</button>
        </div>
    );
}

export default Hero;
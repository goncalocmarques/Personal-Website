import { ring2 } from 'ldrs'


const Loading = () => {
    ring2.register();
    return (
        <div className='w-screen h-screen bg-backgroundColor flex items-center justify-center'>
            <l-ring-2
                size="40"
                stroke="5"
                stroke-length="0.25"
                bg-opacity="0.1"
                speed="0.8" 
                color="black" 
            />
        </div>
    );
}

export default Loading;

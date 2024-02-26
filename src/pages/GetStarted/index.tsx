import Button from "../../components/UI/Button"
import { Reveal } from 'react-awesome-reveal'
import { keyframes } from "@emotion/react";

const GetStarted: React.FC = () => {

    const buttonsAnimation = keyframes`
    from {
      opacity: 0;
      transform: translate3d(0, 100px, 0) scale(0.5, 0.5);
    }
  
    to {
      opacity: 1;
      transform: translate3d(0, 0, 1) scale(1, 1);
    }
  `;

    const logoAnimation = keyframes`
    from {
        opacity: 0;
        transform: translate3d(0, 0, 0) scale(1.5, 1.5);
      }
    
      to {
        opacity: 1;
        transform: translate3d(0, 0, 1) scale(1, 1);
      }
    `;

    return (
        <div className='flex flex-col items-center'>
            <Reveal  keyframes={logoAnimation} duration={2000}>
                <div className='drop-shadow-[1px_25px_15px_rgb(194,7,7,0.3)] bg-secondary rounded-3xl p-6'>
                    <img src='logo_light.png' className='w-14 h-14'></img>
                </div>
            </Reveal>
            <div className=' text-[6rem]'>Get Started</div>
            <div className='flex flex-col items-center text-primary-light mb-7'>
                <div>Turn information into advantage! Start using </div>
                <div> Ramos today. Sign up for free trail.</div>
            </div>
            <div className='flex gap-4 mb-20 mt-10'>
                <Reveal keyframes={buttonsAnimation} duration={2000}>
                    <Button variant="light" className='pl-[50px] pr-[50px] rounded-[10px] !text-black'>Request a demo</Button>
                    <Button className='pl-[50px] pr-[50px] rounded-[10px]' variant="secondary">Start for free</Button>
                </Reveal>

            </div>
        </div>
    )
}

export default GetStarted;
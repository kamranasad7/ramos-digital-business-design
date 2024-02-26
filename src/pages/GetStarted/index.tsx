import Button from "../../components/UI/Button"
import { Reveal } from 'react-awesome-reveal'
import { keyframes } from "@emotion/react";
import { TextSliderUpper } from "../../components/TextSlider";

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
      <Reveal keyframes={logoAnimation} duration={2000}>
        <div className='drop-shadow-[1px_25px_15px_rgb(194,7,7,0.3)] bg-secondary rounded-3xl p-6'>
          <img src='logo_light.png' className='w-14 h-14'></img>
        </div>
      </Reveal>
      <div className="flex">
        <TextSliderUpper
          text="Get"
          className="flex text-[6rem] mr-5"
        />
        <TextSliderUpper
          text="Started"
          className="flex text-[6rem] ml-5"
        />
      </div>
      <div className='flex flex-col items-center text-primary-light mb-7'>
        <div>Turn information into advantage! Start using </div>
        <div> Ramos today. Sign up for free trail.</div>
      </div>
      <div className='flex gap-4 mb-20 mt-10'>
        <Reveal keyframes={buttonsAnimation} duration={2000}>
          <Button variant="light" className='px-10 !text-black rounded-xl'>Request a demo</Button>
          <Button className='px-12 rounded-xl' variant="secondary">Start for free</Button>
        </Reveal>

      </div>
    </div>
  )
}

export default GetStarted;
import { AiFillThunderbolt } from "react-icons/ai";
import { MdGraphicEq, MdOutlineAutoGraph } from "react-icons/md";
import IconButton from "../../components/UI/IconButton";
import Image from "../../components/UI/Image";
import { FaPlay } from "react-icons/fa";
import { Reveal } from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";

const TagLine: React.FC = () => {

    const componentZoomAnimation = keyframes`
    from {
        opacity: 0;
        transform:  scale(0.25, 0.25);
      }
    
      to {
        opacity: 1;
        transform:  scale(1, 1);
      }
    `;


    return (
        <div className='text-8xl flex flex-col max-w-full mx-auto'>
            <div className="grid grid-cols-3">
                <div className="flex col-span-2">
                    <div className="flex flex-col">
                        <div className="flex">
                            <span>&emsp;</span>
                            <Reveal keyframes={componentZoomAnimation} duration={1500}>
                                <IconButton
                                    variant='light'
                                    className='p-8 w-fit h-fit'
                                >
                                    <AiFillThunderbolt size={36} />
                                </IconButton>
                            </Reveal>
                            <Reveal keyframes={componentZoomAnimation} duration={1500}>
                                <IconButton
                                    variant='secondary'
                                    className='p-7 relative right-6 w-fit h-fit'
                                >
                                    <MdOutlineAutoGraph size={40} />
                                </IconButton>
                            </Reveal>

                            <span className="col-span-2 text-[7.6rem] pr-8">Analytics </span>
                        </div>
                        <div className='pt-10'>that <span className='text-primary-200'>helps</span> you</div>
                    </div>
                </div>
                <Reveal keyframes={componentZoomAnimation} duration={1500}>
                    <Image
                        className="rounded-3xl w-96 h-72"
                        src="https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc="
                        cornerButton={
                            <IconButton variant='secondary' className="flex items-center justify-center w-fit h-fit p-5">
                                <FaPlay className="text-white text-base" />
                            </IconButton>
                        }
                    /></Reveal>
            </div>
            <span className="flex justify-end w-full text-[7.6rem] gap-5">
                shape
                <Reveal keyframes={componentZoomAnimation} duration={1500}>
                    <IconButton variant="tertiary" className="w-fit h-fit p-8">
                        <MdGraphicEq className='text-black h-fit w-fit text-6xl' />
                    </IconButton>
                </Reveal>
                the future
            </span>
        </div>
    )
};

export default TagLine;

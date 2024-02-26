import { AiFillThunderbolt } from "react-icons/ai";
import { MdGraphicEq, MdOutlineAutoGraph } from "react-icons/md";
import IconButton from "../../components/UI/IconButton";
import Image from "../../components/UI/Image";
import { FaPlay } from "react-icons/fa";

const TagLine: React.FC = () => {
    return (
        <div className='text-8xl flex flex-col max-w-full mx-auto'>
            <div className="grid grid-cols-3">
                <div className="flex col-span-2">
                    <div className="flex flex-col">
                        <div className="">
                            <span>&emsp;</span>
                            <IconButton
                                variant='light'
                                className='p-8 w-fit h-fit'
                            >
                                <AiFillThunderbolt size={36} />
                            </IconButton>
                            <IconButton
                                variant='secondary'
                                className='p-7 relative right-6 w-fit h-fit'
                                >
                                <MdOutlineAutoGraph size={40} />
                            </IconButton>
                            <span className="col-span-2 text-[7.6rem]">Analytics that <span className='text-primary-200'>helps</span> you</span>
                        </div>
                    </div>
                </div>
                <Image 
                    className="rounded-3xl w-96 h-72"
                    src="https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc="
                    cornerButton={<IconButton variant='secondary' className="flex items-center justify-center w-fit h-fit p-5"><FaPlay className="text-white text-base" /></IconButton>}
                />
            </div>
            <span className="flex justify-end w-full text-[7.6rem] gap-5">shape <IconButton variant="tertiary" className="w-fit h-fit p-8"><MdGraphicEq className='text-black h-fit w-fit text-6xl' /></IconButton> the future</span>
        </div>
    )
};

export default TagLine;

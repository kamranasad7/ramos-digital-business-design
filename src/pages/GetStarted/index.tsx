import Button from "../../components/UI/Button"

const GetStarted: React.FC = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='drop-shadow-[1px_25px_15px_rgb(194,7,7,0.3)] bg-secondary rounded-3xl p-6'>
                <img src='logo_light.png' className='w-14 h-14'></img>
            </div>
            <div className=' text-[6rem]'>Get Started</div>
            <div className='flex flex-col items-center text-primary-light mb-7'>
                <div>Turn information into advantage! Start using </div>
                <div> Ramos today. Sign up for free trail.</div>
            </div>
            <div className='flex gap-4'>
                <Button variant="light" className='pl-[50px] pr-[50px] rounded-[10px] !text-black'>Request a demo</Button>
                <Button className='pl-[50px] pr-[50px] rounded-[10px]' variant="secondary">Start for free</Button>
            </div>
        </div>
    )
}

export default GetStarted;
import { Card } from "../UI/Card"
import { GoStack } from "react-icons/go"
import Avatar from "../UI/Avatar"

const AvatarWidget: React.FC = () => {
  return (
    <Card variant='primary' className='flex flex-col gap-2 rounded-3xl min-w-36 justify-between shadow-[-1px_-1px_3px_rgba(255,255,255,0.4)] bg-primary-900 border-0 border-primary-400 h-full'>
        <div className='flex flex-col justify-center items-center gap-4'>
            <GoStack className="text-tertiary text-3xl"/>

            <div className="flex">
                <Avatar src='profile1.png' className="border-2 border-primary-900"/>
                <Avatar src='profile2.jpg' className="-ml-2 border-primary-900 border-2 " />
            </div>
        </div>
    </Card>
  )
}

export default AvatarWidget
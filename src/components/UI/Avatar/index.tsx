interface AvatarProps {
    src: string;
    alt?: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <img className='rounded-full w-10 h-10' {...props} />
  )
}

export default Avatar
interface AvatarProps {
    src: string;
    alt?: string;
    className?: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  const { className, ...restProps } = props;
  return (
    <img className={`rounded-full w-10 h-10 ${className}`} {...restProps} />
  )
}

export default Avatar
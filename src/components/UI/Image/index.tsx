import { ImgHTMLAttributes } from "react"
import type { IconButtonType } from "../IconButton"

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    cornerButton?: any;
}

const Image: React.FC<ImageProps> = (props) => {
    const {
        cornerButton,
        ...restProps
    } = props;

    return (
        <div className="relative">
            <div className="absolute -top-7 -left-7">
                {cornerButton}
            </div>
            <img {...restProps} />
        </div>
    )
}

export default Image
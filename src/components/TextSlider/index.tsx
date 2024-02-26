import React, { CSSProperties, PropsWithChildren } from 'react';
import { Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

export type SliderType = React.FC<PropsWithChildren<TextSliderProps>>;

interface TextSliderProps {
    className?: string;
    style?: CSSProperties
    text?: string;
    delay?: number;
}


export const TextSliderUpper: SliderType = (props) => {

    const letterAnimation = keyframes`
    from {
        opacity: 0;
        transform: translate3d(-100px, 100px, 0) scale(0.75, 0.75);
      }
    
      to {
        opacity: 1;
        transform: translate3d( 0, 0, -10) scale(1, 1);
      }
    `;

    const wordSplit = props.text?.split(/([^\x00-\x80]|\w)/g);

    return (
        <div className={props.className} style={props.style}>
            {wordSplit?.map((char, i) => {
                return <Reveal key={i} keyframes={letterAnimation} duration={2000} delay={props.delay}>{char}</Reveal>
            })}
        </div>
    )
};

/// <reference types="react" />
interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    position?: string;
    overlay?: boolean;
    fluid?: boolean;
}
export type { CardImageProps };

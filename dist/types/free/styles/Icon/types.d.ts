/// <reference types="react" />
import { textColor } from '../../../types/colors';
type IconProps = {
    animate?: 'beat' | 'fade' | 'beat-fade' | 'bounce' | 'shake' | 'flip' | 'spin' | 'pulse';
    className?: string;
    iconType?: string;
    fab?: boolean;
    far?: boolean;
    fas?: boolean;
    fal?: boolean;
    flag?: string;
    size?: '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' | '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl';
    color?: textColor;
    icon?: string;
    border?: boolean;
    rotate?: '90' | '180' | '270' | 'by';
    pull?: 'left' | 'right';
    spin?: boolean;
    list?: boolean;
    fixed?: boolean;
    pulse?: boolean;
    flip?: 'horizontal' | 'vertical' | 'both';
    inverse?: boolean;
    stack?: '1x' | '2x';
    style?: React.CSSProperties;
    [rest: string]: any;
};
export type { IconProps };

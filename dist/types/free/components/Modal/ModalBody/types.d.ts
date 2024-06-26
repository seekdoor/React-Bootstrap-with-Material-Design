/// <reference types="react" />
import { BaseComponent } from '../../../../types/baseComponent';
interface ModalBodyProps extends BaseComponent {
    ref?: React.ForwardedRef<HTMLAllCollection>;
    tag?: React.ComponentProps<any>;
}
export type { ModalBodyProps };

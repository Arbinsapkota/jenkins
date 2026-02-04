declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';
  
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
  }
  
  export const Github: FC<IconProps>;
  export const Linkedin: FC<IconProps>;
  export const Mail: FC<IconProps>;
  export const Download: FC<IconProps>;
  export const Cloud: FC<IconProps>;
  export const GitBranch: FC<IconProps>;
  export const Shield: FC<IconProps>;
}
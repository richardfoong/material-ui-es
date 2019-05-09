import { SVGProps } from '../icons';

export interface ServiceModel {
  id: number;
  text: string;
  icon: (props: SVGProps) => JSX.Element;
}
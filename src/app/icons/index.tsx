import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import SearchIcon from '@material-ui/icons/Search';
const CART_ICON = require('../../assets/icons/ap-cart.svg');
const LOGO_ICON = require('../../assets/icons/ap-logo.svg');

interface SVGProps {
  path?: string;
  styles?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

export const SVGComponent = (props: SVGProps) => <img src={props.path} style={props.styles} />;

export const Logo = (props: SVGProps) => <SVGComponent path={LOGO_ICON} styles={props.styles} />

export const CartIcon = (props: SVGProps) => (
  <SVGComponent path={CART_ICON} styles={props.styles} />
);

interface SVGIconProps {
  styles?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

export const ExpandMore = ({ styles, onClick = () => {} }: SVGIconProps) => (
  <SvgIcon style={styles} onClick={onClick}>
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </SvgIcon>
);

export const ExpandLess = ({ styles, onClick = () => {} }: SVGIconProps) => (
  <SvgIcon style={styles} onClick={onClick}>
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </SvgIcon>
);

export const SearchMaterialIcon = (props: SVGIconProps) => <SearchIcon style={props.styles} />;

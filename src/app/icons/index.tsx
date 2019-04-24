import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const CART_ICON = require('../../assets/icons/ap-cart.svg');

export const Logo = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5312 28.875C24.9353 28.875 30.9375 22.8728 30.9375 15.4688C30.9375 8.06468 24.9353 2.0625 17.5312 2.0625C10.1272 2.0625 4.125 8.06468 4.125 15.4688C4.125 22.8728 10.1272 28.875 17.5312 28.875Z" fill="white" />
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M31.3884 32.6826C32.1027 32.6826 32.6828 32.1032 32.6828 31.3889V1.61131C32.6828 0.896675 32.1027 0.317261 31.3884 0.317261H1.61206C0.896797 0.317261 0.317383 0.896675 0.317383 1.61131V31.3889C0.317383 32.1032 0.896797 32.6826 1.61206 32.6826H31.3884ZM12.6924 26.3365C8.79671 24.8311 6.02892 20.997 6.02892 16.4992C6.02892 12.002 8.79671 8.16816 12.6924 6.66341V26.3365ZM16.4158 5.71149C16.1238 5.71149 15.8338 5.72203 15.5482 5.74374V6.49081H15.5841V6.57437H15.6385C17.0717 6.58443 18.4069 6.96237 19.5353 7.60829C21.5366 8.84186 22.8519 10.9756 22.8333 13.3916C22.8233 14.8064 22.357 16.1175 21.5664 17.2029C20.2195 18.8695 18.0393 19.9496 15.5841 19.9471V20.1836C15.5721 20.1836 15.5601 20.1836 15.5482 20.1836V26.9373C15.8338 26.9622 16.1238 26.9711 16.4158 26.9711C20.167 26.9711 23.4626 24.9991 25.3348 22.0277C26.5035 20.365 27.1868 18.3565 27.1868 16.1934C27.1868 12.2543 24.9198 8.82798 21.5811 7.06931C20.054 6.20465 18.2919 5.71149 16.4158 5.71149Z" fill="white" />
    </mask>
    <g mask="url(#mask0)">
      <rect x="-1.03125" y="0.317261" width="35" height="34" fill="#DC1928" />
    </g>
  </SvgIcon>
);

export const Search = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <g fill="none" fill-rule="evenodd">
      <g transform="translate(-1 -1)" fill="#8A939D">
        <path d="m3.001 10.5c0-4.1349 3.364-7.4978 7.4991-7.4978 4.134 0 7.4991 3.3629 7.4991 7.4978 0 4.1349-3.365 7.4988-7.4991 7.4988-4.135 0-7.4991-3.3639-7.4991-7.4988m21.413 11.086-5.9401-5.9398c0.96101-1.485 1.516-3.2489 1.516-5.1458 0-5.2378-4.251-9.4997-9.4901-9.4997-5.2381 0-9.5001 4.2619-9.5001 9.4997 0 5.2378 4.262 9.4997 9.5001 9.4997 1.897 0 3.661-0.56498 5.1451-1.526l5.9411 5.9408c0.78101 0.78098 2.047 0.78098 2.828 0s0.78101-2.0479 0-2.8289" />
      </g>
    </g>
  </SvgIcon>
);

export const Cart = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <g fill="none" fill-rule="evenodd">
      <g fill="#3D3D3D">
        <path d="m6.4507 17c0.80133 0 1.4507 0.62894 1.4507 1.408 0 0.77647-0.64933 1.4067-1.4507 1.4067-0.80133 0-1.4507-0.63024-1.4507-1.4067 0-0.77906 0.64933-1.408 1.4507-1.408zm7 0c0.80133 0 1.4507 0.62894 1.4507 1.408 0 0.77647-0.64933 1.4067-1.4507 1.4067-0.80133 0-1.4507-0.63024-1.4507-1.4067 0-0.77906 0.64933-1.408 1.4507-1.408zm1.4823-13-1.1032 1.0721-1.1046-1.0721-0.72517 0.70384 1.1046 1.0721-1.1046 1.0708 0.72517 0.70384 1.1046-1.0721 1.1032 1.0721 0.72517-0.70384-1.1046-1.0708 1.1046-1.0721-0.72517-0.70384zm0.54141 5.8209c-0.53848 0.22631-1.1324 0.3526-1.7572 0.3526-2.4464 0-4.4367-1.933-4.4367-4.3074 0-2.3744 1.9903-4.3062 4.4367-4.3062 2.4477 0 4.438 1.9318 4.438 4.3062 0 1.7692-1.1053 3.2934-2.6808 3.9549zm-1.7572-9.5273c-3.1653 0-5.74 2.5002-5.74 5.5725 0 0.024588 0.0026667 0.049176 0.0026667 0.073765h-3.6587l-0.472-1.5542c-0.22667-0.748-0.93467-1.2618-1.7387-1.2618h-2.1107v1.408h2.0627c0.16133 0 0.304 0.10353 0.348 0.25494l2.4493 9.0252c0.22267 0.75576 0.93333 1.2773 1.7427 1.2773h6.38c0.80667 0 1.516-0.51765 1.7413-1.2669 0 0 0.41067-1.9231 0.588-2.6076 0.23067-0.064706 0.45867-0.13976 0.68133-0.23294 2.104-0.88518 3.4653-2.8936 3.4653-5.1156 0-3.0722-2.576-5.5725-5.7413-5.5725zm-0.42933 13.135c-0.045333 0.14882-0.18667 0.25235-0.34667 0.25235h-6.3013c-0.16267 0-0.304-0.10482-0.34933-0.25365l-1.6067-6.0811h3.5053c0.66933 2.3514 2.884 4.0855 5.5147 4.0907l-0.416 1.9916z" />
      </g>
    </g>
  </SvgIcon>
);

interface SVGProps {
  path: string;
  styles: React.CSSProperties;
};

export const SVGComponent = (props: SVGProps) => (
  <img src={props.path} style={props.styles} />
);

export const CartIcon = (props: React.CSSProperties) => <SVGComponent path={CART_ICON} styles={props} />
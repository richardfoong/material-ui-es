import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export const Logo = (props: any) => (
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

export const Search = () => (
  <SvgIcon>
    <g fill="none" fill-rule="evenodd">
      <g transform="translate(-1 -1)" fill="#8A939D">
        <path d="m3.001 10.5c0-4.1349 3.364-7.4978 7.4991-7.4978 4.134 0 7.4991 3.3629 7.4991 7.4978 0 4.1349-3.365 7.4988-7.4991 7.4988-4.135 0-7.4991-3.3639-7.4991-7.4988m21.413 11.086-5.9401-5.9398c0.96101-1.485 1.516-3.2489 1.516-5.1458 0-5.2378-4.251-9.4997-9.4901-9.4997-5.2381 0-9.5001 4.2619-9.5001 9.4997 0 5.2378 4.262 9.4997 9.5001 9.4997 1.897 0 3.661-0.56498 5.1451-1.526l5.9411 5.9408c0.78101 0.78098 2.047 0.78098 2.828 0s0.78101-2.0479 0-2.8289" />
      </g>
    </g>
  </SvgIcon>
);

export const Cart = () => (
  <SvgIcon>
    <g id="Icons/Action/Cart" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Colours/Solid/Post-grey" mask="url(#mask-2)" fill="#292F33">
            <g transform="translate(0.000000, -1.000000)" id="Rectangle">
                <rect x="0" y="0" width="26" height="26"></rect>
            </g>
        </g>
    </g>
  </SvgIcon>
);
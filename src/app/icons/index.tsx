import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const CART_ICON = require('../../assets/icons/Iconset/ap-cart.svg');

export const Logo = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 32 32">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.5312 28.875C24.9353 28.875 30.9375 22.8728 30.9375 15.4688C30.9375 8.06468 24.9353 2.0625 17.5312 2.0625C10.1272 2.0625 4.125 8.06468 4.125 15.4688C4.125 22.8728 10.1272 28.875 17.5312 28.875Z"
      fill="white"
    />
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="42"
      height="42"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31.3884 32.6826C32.1027 32.6826 32.6828 32.1032 32.6828 31.3889V1.61131C32.6828 0.896675 32.1027 0.317261 31.3884 0.317261H1.61206C0.896797 0.317261 0.317383 0.896675 0.317383 1.61131V31.3889C0.317383 32.1032 0.896797 32.6826 1.61206 32.6826H31.3884ZM12.6924 26.3365C8.79671 24.8311 6.02892 20.997 6.02892 16.4992C6.02892 12.002 8.79671 8.16816 12.6924 6.66341V26.3365ZM16.4158 5.71149C16.1238 5.71149 15.8338 5.72203 15.5482 5.74374V6.49081H15.5841V6.57437H15.6385C17.0717 6.58443 18.4069 6.96237 19.5353 7.60829C21.5366 8.84186 22.8519 10.9756 22.8333 13.3916C22.8233 14.8064 22.357 16.1175 21.5664 17.2029C20.2195 18.8695 18.0393 19.9496 15.5841 19.9471V20.1836C15.5721 20.1836 15.5601 20.1836 15.5482 20.1836V26.9373C15.8338 26.9622 16.1238 26.9711 16.4158 26.9711C20.167 26.9711 23.4626 24.9991 25.3348 22.0277C26.5035 20.365 27.1868 18.3565 27.1868 16.1934C27.1868 12.2543 24.9198 8.82798 21.5811 7.06931C20.054 6.20465 18.2919 5.71149 16.4158 5.71149Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0)">
      <rect x="-1.03125" y="0.317261" width="42" height="42" fill="#DC1928" />
    </g>
  </SvgIcon>
);

export const Search = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.0315 13.0954C15.1063 13.0954 16.8038 11.4517 16.8038 9.44278V8.22523C16.8038 6.21626 15.1063 4.57257 13.0315 4.57257C10.9568 4.57257 9.25926 6.21626 9.25926 8.22523V9.44278C9.25926 11.4517 10.9568 13.0954 13.0315 13.0954ZM6.74442 8.22521C6.74442 4.86477 9.56104 2.13745 13.0315 2.13745C16.502 2.13745 19.3186 4.86477 19.3186 8.22521V9.44277C19.3186 11.2326 18.5013 12.8276 17.2313 13.9477C16.2661 14.7625 15.9829 15.2825 15.7464 15.7165L15.735 15.7375C14.6913 15.5792 13.7608 15.5305 13.0315 15.5305C11.5729 15.5305 9.33471 15.7253 6.90789 16.6385C6.05284 16.9551 5.48701 17.6978 5.48701 18.5257V20.4007H13.3082C13.1321 21.18 13.0315 21.9957 13.0315 22.8358H2.97217V18.5257C2.97217 16.6872 4.16672 15.0557 6.00255 14.3617C6.85759 14.0451 7.68749 13.8016 8.47966 13.619C7.41086 12.5353 6.74442 11.0621 6.74442 9.44277V8.22521ZM28.1205 21.6183C28.1205 22.9041 27.7089 24.0968 27.0062 25.0795C27.0427 25.1078 27.0781 25.1383 27.1119 25.1711L30.9074 28.8463C31.3985 29.3217 31.3985 30.0927 30.9074 30.5681C30.4164 31.0436 29.6202 31.0436 29.1292 30.5681L25.3337 26.893C25.2884 26.8491 25.2472 26.8027 25.2103 26.7543C24.2348 27.3569 23.0763 27.706 21.8335 27.706C18.3612 27.706 15.5464 24.9805 15.5464 21.6183C15.5464 18.2561 18.3612 15.5305 21.8335 15.5305C25.3057 15.5305 28.1205 18.2561 28.1205 21.6183ZM25.6057 21.6183C25.6057 23.6356 23.9168 25.271 21.8335 25.271C19.7501 25.271 18.0612 23.6356 18.0612 21.6183C18.0612 19.601 19.7501 17.9657 21.8335 17.9657C23.9168 17.9657 25.6057 19.601 25.6057 21.6183Z"
        fill="white"
      />
    </svg>
  </SvgIcon>
);

export const Menu = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 2.12508C0 0.974488 0.897026 0.041748 2.00495 0.041748H21.9951C23.1024 0.041748 24 0.966466 24 2.12508C24 3.27567 23.103 4.20841 21.9951 4.20841H2.00495C0.897645 4.20841 0 3.2837 0 2.12508ZM0 11.5001C0 10.3495 0.897026 9.41675 2.00495 9.41675H21.9951C23.1024 9.41675 24 10.3415 24 11.5001C24 12.6507 23.103 13.5834 21.9951 13.5834H2.00495C0.897645 13.5834 0 12.6587 0 11.5001ZM0 20.8751C0 19.7245 0.897026 18.7917 2.00495 18.7917H21.9951C23.1024 18.7917 24 19.7165 24 20.8751C24 22.0257 23.103 22.9584 21.9951 22.9584H2.00495C0.897645 22.9584 0 22.0337 0 20.8751Z"
        fill="white"
      />
    </svg>
  </SvgIcon>
);

export const Cart = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.8126 19.2427C20.7447 19.4639 20.5347 19.6155 20.2957 19.6155H10.9372C10.697 19.6155 10.487 19.4618 10.4203 19.2406L8.03382 10.2694H23.24L20.8126 19.2427ZM7.49537 8.19242L6.79429 5.8995C6.45721 4.79561 5.40614 4.03857 4.21183 4.03857H1.0769V6.1155H4.1386C4.37875 6.1155 4.5909 6.26815 4.6566 6.49142L8.29444 19.8086C8.62506 20.924 9.68152 21.6924 10.8834 21.6924H20.3592C21.5557 21.6924 22.6089 20.9302 22.9438 19.8232L26.1477 8.19242H7.49537ZM12.9234 25.8457C12.9234 26.9932 11.9595 27.9226 10.7695 27.9226C9.57953 27.9226 8.61568 26.9932 8.61568 25.8457C8.61568 24.6982 9.57953 23.7688 10.7695 23.7688C11.9595 23.7688 12.9234 24.6982 12.9234 25.8457ZM22.6157 25.8457C22.6157 26.9932 21.6518 27.9226 20.4618 27.9226C19.2718 27.9226 18.308 26.9932 18.308 25.8457C18.308 24.6982 19.2718 23.7688 20.4618 23.7688C21.6518 23.7688 22.6157 24.6982 22.6157 25.8457Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.5385 0.364014C17.0619 0.364014 13.4202 3.87571 13.4202 8.19242C13.4202 12.5091 17.0619 16.0208 21.5385 16.0208C26.0151 16.0208 29.6569 12.5091 29.6569 8.19242C29.6569 3.87571 26.0151 0.364014 21.5385 0.364014Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.5384 1.48242C17.7013 1.48242 14.5798 4.49244 14.5798 8.19248C14.5798 11.8925 17.7013 14.9025 21.5384 14.9025C25.3755 14.9025 28.497 11.8925 28.497 8.19248C28.497 4.49244 25.3755 1.48242 21.5384 1.48242ZM23.9368 11.4357H19.2235V10.4158C21.441 8.81429 22.1647 8.13434 22.1647 7.38281C22.1647 6.89074 21.8028 6.60444 21.3204 6.60444C20.8565 6.60444 20.4482 6.87284 20.1977 7.37386L19.038 6.75654C19.5482 5.93344 20.3369 5.36979 21.4595 5.36979C22.7677 5.36979 23.7141 6.08553 23.7141 7.30229C23.7141 8.2417 23.009 9.15427 21.3853 10.1652H23.9368V11.4357Z"
        fill="#DC1928"
      />
    </svg>
  </SvgIcon>
);

export const SellStamps = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
        <path
          d="M63 60.4841C63 61.8754 61.871 63.0044 60.4796 63.0044H2.52036C1.12905 63.0044 0 61.8754 0 60.4841V2.52036C0 1.12905 1.12905 0 2.52036 0H60.4796C61.871 0 63 1.12905 63 2.52036V60.4841Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M9.05463 7.10324C9.05463 8.18339 8.17895 9.05463 7.10324 9.05463C6.02309 9.05463 5.15186 8.17895 5.15186 7.10324C5.15186 6.02753 6.02753 5.15186 7.10324 5.15186C8.18339 5.15186 9.05463 6.02753 9.05463 7.10324Z"
          fill="white"
        />
        <path
          d="M13.9352 7.10324C13.9352 8.18339 13.0596 9.05463 11.9839 9.05463C10.9081 9.05463 10.0325 8.17895 10.0325 7.10324C10.0325 6.02753 10.9081 5.15186 11.9839 5.15186C13.0596 5.15186 13.9352 6.02753 13.9352 7.10324Z"
          fill="white"
        />
        <path
          d="M18.8161 7.10324C18.8161 8.18339 17.9404 9.05463 16.8647 9.05463C15.789 9.05463 14.9133 8.17895 14.9133 7.10324C14.9133 6.02753 15.789 5.15186 16.8647 5.15186C17.9404 5.15186 18.8161 6.02753 18.8161 7.10324Z"
          fill="white"
        />
        <path
          d="M23.6921 7.10324C23.6921 8.18339 22.8164 9.05463 21.7407 9.05463C20.665 9.05463 19.7893 8.17895 19.7893 7.10324C19.7893 6.02753 20.665 5.15186 21.7407 5.15186C22.8208 5.15186 23.6921 6.02753 23.6921 7.10324Z"
          fill="white"
        />
        <path
          d="M28.5727 7.10324C28.5727 8.18339 27.697 9.05463 26.6213 9.05463C25.5412 9.05463 24.6699 8.17895 24.6699 7.10324C24.6699 6.02753 25.5456 5.15186 26.6213 5.15186C27.697 5.15186 28.5727 6.02753 28.5727 7.10324Z"
          fill="white"
        />
        <path
          d="M33.4535 7.10324C33.4535 8.18339 32.5779 9.05463 31.5022 9.05463C30.422 9.05463 29.5508 8.17895 29.5508 7.10324C29.5508 6.02753 30.4265 5.15186 31.5022 5.15186C32.5779 5.15186 33.4535 6.02753 33.4535 7.10324Z"
          fill="white"
        />
        <path
          d="M38.33 7.10324C38.33 8.18339 37.4543 9.05463 36.3786 9.05463C35.2985 9.05463 34.4272 8.17895 34.4272 7.10324C34.4272 6.02753 35.3029 5.15186 36.3786 5.15186C37.4588 5.15186 38.33 6.02753 38.33 7.10324Z"
          fill="white"
        />
        <path
          d="M43.2106 7.10324C43.2106 8.18339 42.335 9.05463 41.2592 9.05463C40.1835 9.05463 39.3079 8.17895 39.3079 7.10324C39.3079 6.02753 40.1835 5.15186 41.2592 5.15186C42.3394 5.15186 43.2106 6.02753 43.2106 7.10324Z"
          fill="white"
        />
        <path
          d="M48.0913 7.10324C48.0913 8.18339 47.2156 9.05463 46.1399 9.05463C45.0642 9.05463 44.1885 8.17895 44.1885 7.10324C44.1885 6.02753 45.0642 5.15186 46.1399 5.15186C47.2156 5.15186 48.0913 6.02753 48.0913 7.10324Z"
          fill="white"
        />
        <path
          d="M52.9675 7.10324C52.9675 8.18339 52.0918 9.05463 51.0161 9.05463C49.9404 9.05463 49.0647 8.17895 49.0647 7.10324C49.0647 6.02753 49.9404 5.15186 51.0161 5.15186C52.0962 5.15186 52.9675 6.02753 52.9675 7.10324Z"
          fill="white"
        />
        <path
          d="M57.8486 7.10324C57.8486 8.18339 56.9729 9.05463 55.8972 9.05463C54.8215 9.05463 53.9458 8.17895 53.9458 7.10324C53.9458 6.02753 54.8215 5.15186 55.8972 5.15186C56.9729 5.15186 57.8486 6.02753 57.8486 7.10324Z"
          fill="white"
        />
        <path
          d="M53.9458 55.8967C53.9458 54.8165 54.8215 53.9453 55.8972 53.9453C56.9773 53.9453 57.8486 54.821 57.8486 55.8967C57.8486 56.9724 56.9729 57.8481 55.8972 57.8481C54.817 57.8481 53.9458 56.9724 53.9458 55.8967Z"
          fill="white"
        />
        <path
          d="M49.0647 55.8967C49.0647 54.8165 49.9404 53.9453 51.0161 53.9453C52.0962 53.9453 52.9675 54.821 52.9675 55.8967C52.9675 56.9724 52.0918 57.8481 51.0161 57.8481C49.9404 57.8481 49.0647 56.9724 49.0647 55.8967Z"
          fill="white"
        />
        <path
          d="M44.1841 55.8967C44.1841 54.8165 45.0598 53.9453 46.1355 53.9453C47.2112 53.9453 48.0869 54.821 48.0869 55.8967C48.0869 56.9724 47.2112 57.8481 46.1355 57.8481C45.0598 57.8481 44.1841 56.9724 44.1841 55.8967Z"
          fill="white"
        />
        <path
          d="M39.3079 55.8967C39.3079 54.8165 40.1835 53.9453 41.2592 53.9453C42.335 53.9453 43.2106 54.821 43.2106 55.8967C43.2106 56.9724 42.335 57.8481 41.2592 57.8481C40.1791 57.8481 39.3079 56.9724 39.3079 55.8967Z"
          fill="white"
        />
        <path
          d="M34.4272 55.8967C34.4272 54.8165 35.3029 53.9453 36.3786 53.9453C37.4588 53.9453 38.33 54.821 38.33 55.8967C38.33 56.9724 37.4543 57.8481 36.3786 57.8481C35.3029 57.8481 34.4272 56.9724 34.4272 55.8967Z"
          fill="white"
        />
        <path
          d="M29.5508 55.8967C29.5508 54.8165 30.4265 53.9453 31.5022 53.9453C32.5823 53.9453 33.4535 54.821 33.4535 55.8967C33.4535 56.9724 32.5779 57.8481 31.5022 57.8481C30.422 57.8481 29.5508 56.9724 29.5508 55.8967Z"
          fill="white"
        />
        <path
          d="M24.6699 55.8967C24.6699 54.8165 25.5456 53.9453 26.6213 53.9453C27.7015 53.9453 28.5727 54.821 28.5727 55.8967C28.5727 56.9724 27.697 57.8481 26.6213 57.8481C25.5412 57.8481 24.6699 56.9724 24.6699 55.8967Z"
          fill="white"
        />
        <path
          d="M19.7893 55.8967C19.7893 54.8165 20.665 53.9453 21.7407 53.9453C22.8164 53.9453 23.6921 54.821 23.6921 55.8967C23.6921 56.9724 22.8164 57.8481 21.7407 57.8481C20.665 57.8481 19.7893 56.9724 19.7893 55.8967Z"
          fill="white"
        />
        <path
          d="M14.9133 55.8967C14.9133 54.8165 15.789 53.9453 16.8647 53.9453C17.9404 53.9453 18.8161 54.821 18.8161 55.8967C18.8161 56.9724 17.9404 57.8481 16.8647 57.8481C15.7846 57.8481 14.9133 56.9724 14.9133 55.8967Z"
          fill="white"
        />
        <path
          d="M10.0325 55.8967C10.0325 54.8165 10.9081 53.9453 11.9839 53.9453C13.0596 53.9453 13.9352 54.821 13.9352 55.8967C13.9352 56.9724 13.0596 57.8481 11.9839 57.8481C10.9037 57.8481 10.0325 56.9724 10.0325 55.8967Z"
          fill="white"
        />
        <path
          d="M5.15186 55.8967C5.15186 54.8165 6.02753 53.9453 7.10324 53.9453C8.17895 53.9453 9.05463 54.821 9.05463 55.8967C9.05463 56.9724 8.17895 57.8481 7.10324 57.8481C6.02753 57.8481 5.15186 56.9724 5.15186 55.8967Z"
          fill="white"
        />
        <path
          d="M7.10324 49.0647C8.18339 49.0647 9.05463 49.9404 9.05463 51.0161C9.05463 52.0962 8.17895 52.9675 7.10324 52.9675C6.02753 52.9675 5.15186 52.0918 5.15186 51.0161C5.15186 49.9404 6.02753 49.0647 7.10324 49.0647Z"
          fill="white"
        />
        <path
          d="M7.10324 44.1841C8.18339 44.1841 9.05463 45.0598 9.05463 46.1355C9.05463 47.2112 8.17895 48.0869 7.10324 48.0869C6.02753 48.0869 5.15186 47.2112 5.15186 46.1355C5.15186 45.0598 6.02753 44.1841 7.10324 44.1841Z"
          fill="white"
        />
        <path
          d="M7.10324 39.3076C8.18339 39.3076 9.05463 40.1833 9.05463 41.259C9.05463 42.3347 8.17895 43.2104 7.10324 43.2104C6.02753 43.2104 5.15186 42.3347 5.15186 41.259C5.15186 40.1789 6.02753 39.3076 7.10324 39.3076Z"
          fill="white"
        />
        <path
          d="M7.10324 34.427C8.18339 34.427 9.05463 35.3027 9.05463 36.3784C9.05463 37.4585 8.17895 38.3298 7.10324 38.3298C6.02753 38.3298 5.15186 37.4541 5.15186 36.3784C5.15186 35.3027 6.02753 34.427 7.10324 34.427Z"
          fill="white"
        />
        <path
          d="M7.10324 29.5508C8.18339 29.5508 9.05463 30.4265 9.05463 31.5022C9.05463 32.5823 8.17895 33.4536 7.10324 33.4536C6.02753 33.4536 5.15186 32.5779 5.15186 31.5022C5.15186 30.422 6.02753 29.5508 7.10324 29.5508Z"
          fill="white"
        />
        <path
          d="M7.10324 24.6702C8.18339 24.6702 9.05463 25.5458 9.05463 26.6216C9.05463 27.7017 8.17895 28.5729 7.10324 28.5729C6.02753 28.5729 5.15186 27.6973 5.15186 26.6216C5.15186 25.5414 6.02753 24.6702 7.10324 24.6702Z"
          fill="white"
        />
        <path
          d="M7.10324 19.7896C8.18339 19.7896 9.05463 20.6652 9.05463 21.7409C9.05463 22.8166 8.17895 23.6923 7.10324 23.6923C6.02753 23.6923 5.15186 22.8166 5.15186 21.7409C5.15186 20.6652 6.02753 19.7896 7.10324 19.7896Z"
          fill="white"
        />
        <path
          d="M7.10324 14.9131C8.18339 14.9131 9.05463 15.7888 9.05463 16.8645C9.05463 17.9402 8.17895 18.8159 7.10324 18.8159C6.02753 18.8159 5.15186 17.9402 5.15186 16.8645C5.15186 15.7843 6.02753 14.9131 7.10324 14.9131Z"
          fill="white"
        />
        <path
          d="M7.10324 10.0325C8.18339 10.0325 9.05463 10.9081 9.05463 11.9839C9.05463 13.0596 8.17895 13.9352 7.10324 13.9352C6.02753 13.9352 5.15186 13.0596 5.15186 11.9839C5.15186 10.9037 6.02753 10.0325 7.10324 10.0325Z"
          fill="white"
        />
        <path d="M55.8968 7.10327H7.10327V55.8968H55.8968V7.10327Z" fill="white" />
        <path
          d="M55.8965 13.9352C54.8163 13.9352 53.9451 13.0596 53.9451 11.9839C53.9451 10.9037 54.8207 10.0325 55.8965 10.0325C56.9722 10.0325 57.8478 10.9081 57.8478 11.9839C57.8478 13.064 56.9722 13.9352 55.8965 13.9352Z"
          fill="white"
        />
        <path
          d="M55.8965 18.8159C54.8163 18.8159 53.9451 17.9402 53.9451 16.8645C53.9451 15.7888 54.8207 14.9131 55.8965 14.9131C56.9722 14.9131 57.8478 15.7888 57.8478 16.8645C57.8478 17.9402 56.9722 18.8159 55.8965 18.8159Z"
          fill="white"
        />
        <path
          d="M55.8965 23.6923C54.8163 23.6923 53.9451 22.8166 53.9451 21.7409C53.9451 20.6652 54.8207 19.7896 55.8965 19.7896C56.9722 19.7896 57.8478 20.6652 57.8478 21.7409C57.8478 22.8211 56.9722 23.6923 55.8965 23.6923Z"
          fill="white"
        />
        <path
          d="M55.8965 28.5729C54.8163 28.5729 53.9451 27.6973 53.9451 26.6216C53.9451 25.5414 54.8207 24.6702 55.8965 24.6702C56.9722 24.6702 57.8478 25.5458 57.8478 26.6216C57.8478 27.6973 56.9722 28.5729 55.8965 28.5729Z"
          fill="white"
        />
        <path
          d="M55.8965 33.4536C54.8163 33.4536 53.9451 32.5779 53.9451 31.5022C53.9451 30.422 54.8207 29.5508 55.8965 29.5508C56.9722 29.5508 57.8478 30.4265 57.8478 31.5022C57.8478 32.5779 56.9722 33.4536 55.8965 33.4536Z"
          fill="white"
        />
        <path
          d="M55.8965 38.3298C54.8163 38.3298 53.9451 37.4541 53.9451 36.3784C53.9451 35.2982 54.8207 34.427 55.8965 34.427C56.9722 34.427 57.8478 35.3027 57.8478 36.3784C57.8478 37.4585 56.9722 38.3298 55.8965 38.3298Z"
          fill="white"
        />
        <path
          d="M55.8965 43.2104C54.8163 43.2104 53.9451 42.3347 53.9451 41.259C53.9451 40.1833 54.8207 39.3076 55.8965 39.3076C56.9722 39.3076 57.8478 40.1833 57.8478 41.259C57.8478 42.3392 56.9722 43.2104 55.8965 43.2104Z"
          fill="white"
        />
        <path
          d="M55.8965 48.0912C54.8163 48.0912 53.9451 47.2156 53.9451 46.1399C53.9451 45.0642 54.8207 44.1885 55.8965 44.1885C56.9722 44.1885 57.8478 45.0642 57.8478 46.1399C57.8478 47.2156 56.9722 48.0912 55.8965 48.0912Z"
          fill="white"
        />
        <path
          d="M55.8965 52.9675C54.8163 52.9675 53.9451 52.0918 53.9451 51.0161C53.9451 49.9404 54.8207 49.0647 55.8965 49.0647C56.9722 49.0647 57.8478 49.9404 57.8478 51.0161C57.8478 52.0962 56.9722 52.9675 55.8965 52.9675Z"
          fill="white"
        />
        <path
          d="M52.7451 51.9007C52.7451 52.6075 52.1673 53.1898 51.4561 53.1898H11.5393C10.8325 53.1898 10.2502 52.6119 10.2502 51.9007V11.0994C10.2502 10.3926 10.8281 9.8103 11.5393 9.8103H51.4561C52.1628 9.8103 52.7451 10.3882 52.7451 11.0994V51.9007Z"
          fill="#3EBDAC"
        />
        <path d="M23.9634 26.5149H17.3669V31.7556H23.9634V26.5149Z" fill="#7DB5DA" />
        <path
          d="M31.6623 29.773C31.849 30.2931 31.5823 30.871 31.0711 31.0577L30.0843 31.4222C29.5687 31.6133 29.0041 31.3421 28.8174 30.8221C28.6307 30.302 28.8974 29.7241 29.4086 29.5375L30.3954 29.1774C30.9066 28.9818 31.4756 29.253 31.6623 29.773Z"
          fill="#F3C8AA"
        />
        <path
          d="M26.9061 32.6713C27.0439 32.6491 27.1817 32.6002 27.3017 32.5291L30.4933 31.3689C30.4933 31.3689 29.7687 29.3731 29.7687 29.3686C29.7865 29.4175 27.764 30.1821 27.5595 30.2088C26.7016 30.3288 26.226 30.0398 25.4837 29.6931C24.368 29.1686 23.2656 28.6219 22.1588 28.084C21.5987 27.8129 20.9275 28.044 20.6519 28.5996C20.3807 29.1597 20.6119 29.8309 21.1675 30.1065L26.226 32.5735C26.3816 32.6491 26.5461 32.6847 26.7105 32.6847"
          fill="#7DB5DA"
        />
        <path
          d="M25.4436 19.3717L26.4438 21.8032C26.5371 22.0298 26.3904 22.3188 26.1282 22.3188L25.7192 22.4655V23.9057C25.7192 24.3813 25.3236 24.7725 24.8347 24.7725H23.9545V26.5194H19.9806V22.5366C19.4028 21.9587 19.0427 21.1631 19.0427 20.2918C19.0427 18.5227 20.5052 17.0869 22.3143 17.0869C23.7901 17.0825 25.0391 18.0471 25.4436 19.3717Z"
          fill="#F3C8AA"
        />
        <path
          d="M24.5589 21.2251C24.6834 21.2251 24.7812 21.1229 24.7812 20.9984C24.7812 20.874 24.6789 20.7717 24.5589 20.7717C24.4345 20.7717 24.3367 20.874 24.3367 20.9984C24.3367 21.1229 24.4345 21.2251 24.5589 21.2251Z"
          fill="#190B12"
        />
        <path
          d="M25.6972 23.3943C25.2349 23.3943 24.9015 23.2698 24.6126 23.0831C24.5637 23.052 24.537 23.0654 24.577 23.1143C24.7637 23.3454 25.1594 23.6299 25.6972 23.6299V23.3943Z"
          fill="#E56235"
        />
        <path
          d="M25.8079 19.9806C25.559 18.1803 24.101 16.7935 22.3363 16.7935C20.3983 16.7935 18.8247 18.4648 18.8247 20.5273C18.8247 22.252 19.9271 23.7055 21.4206 24.1323V19.9761H25.8079V19.9806Z"
          fill="#190B12"
        />
        <path
          d="M24.5589 22.0166C25.119 22.0166 25.5769 21.5587 25.5769 20.9986C25.5769 20.4341 25.119 19.9807 24.5589 19.9807C23.9944 19.9807 23.541 20.4386 23.541 20.9986C23.541 21.5632 23.9944 22.0166 24.5589 22.0166Z"
          fill="white"
        />
        <path
          d="M24.5589 22.0166C25.119 22.0166 25.5769 21.5587 25.5769 20.9986C25.5769 20.4341 25.119 19.9807 24.5589 19.9807C23.9944 19.9807 23.541 20.4386 23.541 20.9986C23.541 21.5632 23.9944 22.0166 24.5589 22.0166Z"
          stroke="#190B12"
          stroke-width="0.911"
        />
        <path d="M23.5767 20.7808H20.6074V21.3097H23.5767V20.7808Z" fill="#190B12" />
        <path d="M25.5769 20.7808V21.1808L26.1503 21.163L26.0081 20.7808H25.5769Z" fill="#190B12" />
        <path d="M23.9679 23.3499H13.4775V26.6837H23.9679V23.3499Z" fill="#DA1A32" />
        <path d="M13.4774 24.9324H11.9839V25.0968H13.4774V24.9324Z" fill="#DA1A32" />
        <path d="M13.4774 25.2524H11.9839V25.4169H13.4774V25.2524Z" fill="#DA1A32" />
        <path d="M13.4774 23.3499H11.9839V23.5143H13.4774V23.3499Z" fill="#DA1A32" />
        <path d="M13.4774 25.5679H11.9839V25.7323H13.4774V25.5679Z" fill="#DA1A32" />
        <path d="M13.4774 23.6699H11.9839V23.8344H13.4774V23.6699Z" fill="#DA1A32" />
        <path d="M13.4774 25.8835H11.9839V26.048H13.4774V25.8835Z" fill="#DA1A32" />
        <path d="M13.4774 23.9854H11.9839V24.1498H13.4774V23.9854Z" fill="#DA1A32" />
        <path d="M13.4774 26.1992H11.9839V26.3637H13.4774V26.1992Z" fill="#DA1A32" />
        <path d="M13.4774 24.301H11.9839V24.4655H13.4774V24.301Z" fill="#DA1A32" />
        <path d="M13.4774 26.5146H11.9839V26.6791H13.4774V26.5146Z" fill="#DA1A32" />
        <path d="M13.4774 24.6167H11.9839V24.7812H13.4774V24.6167Z" fill="#DA1A32" />
        <path
          d="M43.2683 35.783C44.0728 35.8541 43.9617 37.1031 43.1572 37.032C42.3526 36.9609 42.4637 35.7118 43.2683 35.783Z"
          fill="#190B12"
        />
        <path
          d="M40.6811 35.8718C41.4857 35.9429 41.379 37.192 40.57 37.1209C39.7655 37.0498 39.8766 35.8007 40.6811 35.8718Z"
          fill="#190B12"
        />
        <path
          d="M37.9075 35.9431C38.7121 36.0142 38.6054 37.2633 37.7964 37.1922C36.9919 37.1211 37.0985 35.872 37.9075 35.9431Z"
          fill="#190B12"
        />
        <path
          d="M45.3529 36.5518C47.1621 36.5518 48.6289 35.0849 48.6289 33.2758C48.6289 31.4666 47.1621 29.9998 45.3529 29.9998C43.5438 29.9998 42.0769 31.4666 42.0769 33.2758C42.0769 35.0849 43.5438 36.5518 45.3529 36.5518Z"
          fill="#9CA8B3"
        />
        <path
          d="M45.7486 34.6181L45.6508 30.3598C45.5486 27.7061 43.3571 25.608 40.7523 25.4835C40.7479 25.4835 40.739 25.4835 40.7301 25.4835L40.7746 25.4791C40.7746 25.4791 40.819 25.4791 40.3878 25.3991L27.5771 23.061C27.5771 23.061 27.1504 22.9809 27.1682 23.4166L27.3504 27.6038C27.0437 29.5952 25.4435 31.2132 23.3454 31.4532L22.4475 31.5555C19.9361 31.84 17.6646 30.0353 17.3801 27.5194L17.3713 27.4349C17.3713 27.4349 17.3624 27.3504 16.9312 27.4171C14.7487 27.7594 12.4906 28.1239 10.2502 28.5551V41.7214C20.2561 42.6637 32.6223 42.7393 40.9524 42.1436C41.099 42.1392 41.2457 42.1259 41.3924 42.1036C43.9795 41.7836 45.9353 39.5255 45.833 36.8718L45.7486 34.6181Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M45.8732 18.4737C45.8732 19.5805 44.9753 20.4784 43.8685 20.4784H36.1207C35.0139 20.4784 34.116 19.5805 34.116 18.4737C34.116 17.3669 35.0139 16.469 36.1207 16.469H43.8685C44.9753 16.469 45.8732 17.3669 45.8732 18.4737Z"
          fill="white"
        />
        <path
          d="M40.5836 16.9268C40.5836 18.1848 39.5657 19.2071 38.3033 19.2071C37.0453 19.2071 36.0229 18.1892 36.0229 16.9268C36.0229 15.6644 37.0409 14.6465 38.3033 14.6465C39.5657 14.6465 40.5836 15.6689 40.5836 16.9268Z"
          fill="white"
        />
        <path
          d="M43.6861 16.1045C43.6861 17.3625 42.6682 18.3849 41.4058 18.3849C40.1479 18.3849 39.1255 17.3669 39.1255 16.1045C39.1255 14.8421 40.1434 13.8242 41.4058 13.8242C42.6638 13.8287 43.6861 14.8466 43.6861 16.1045Z"
          fill="white"
        />
        <path
          d="M11.0906 47.6822C10.6327 47.6822 10.2549 47.3044 10.2549 46.8465V35.4983C10.2549 35.0404 10.6327 34.6626 11.0906 34.6626H27.5284C27.9863 34.6626 28.2219 35.0093 28.0485 35.436L23.3456 46.9088C23.1723 47.3355 22.6522 47.6822 22.1943 47.6822H11.0906Z"
          fill="#190B12"
        />
        <path
          d="M46.0287 42.9083C46.0287 43.1261 45.842 43.3039 45.6109 43.3039H45.3397C45.1086 43.3039 44.9219 43.1261 44.9219 42.9083V25.1102C44.9219 24.8924 45.1086 24.7146 45.3397 24.7146H45.6109C45.842 24.7146 46.0287 24.8924 46.0287 25.1102V42.9083Z"
          fill="#190B12"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="0"
          y1="31.5005"
          x2="63.001"
          y2="31.5005"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#807371" />
          <stop offset="0.1758" stop-color="#807371" />
          <stop offset="0.2692" stop-color="#807371" />
          <stop offset="1" stop-color="#807371" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="10.253"
          y1="32.7907"
          x2="45.8401"
          y2="32.7907"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#807371" />
          <stop offset="0.1758" stop-color="#807371" />
          <stop offset="0.2692" stop-color="#807371" />
          <stop offset="1" stop-color="#807371" />
        </linearGradient>
        <clipPath id="clip0">
          <rect width="63" height="63" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </SvgIcon>
);

interface SVGProps {
  path: string;
  styles: React.CSSProperties;
}

export const SVGComponent = (props: SVGProps) => <img src={props.path} style={props.styles} />;

export const CartIcon = (props: React.CSSProperties) => (
  <SVGComponent path={CART_ICON} styles={props} />
);

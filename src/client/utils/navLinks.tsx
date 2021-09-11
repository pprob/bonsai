import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faUser,
  faUserPlus,
  faShoppingCart,
  faPowerOff,
  faUserLock,
  faHome,
  faStoreAlt,
} from '@fortawesome/free-solid-svg-icons';

export enum NavLinkConstants {
  MyAccount = 'My Account',
  SignIn = 'Sign in',
  LoggedInFilter = 'logged in',
  LoggedOutFilter = 'logged out',
  SignUp = 'Sign up',
  SignOut = 'Sign out',
  Cart = 'Cart',
  sliderMenuUpper = 'Upper',
  sliderMenuLower = 'Lower',
}

export enum NavLinks {
  Products = 'Products',
  Catalog = 'Catalog',
  AboutUs = 'About Us',
  Blog = 'Blog',
  Home = 'Home',
}

const myAccountLink = {
  icon: <FontAwesomeIcon icon={faUser} />,
  text: NavLinkConstants.MyAccount,
  redirectUrl: '/my-account',
  headerFilter: NavLinkConstants.LoggedInFilter,
  sliderMenuFilter: NavLinkConstants.sliderMenuUpper,
  order: 3,
};

const signupLink = {
  icon: <FontAwesomeIcon icon={faUserPlus} />,
  text: NavLinkConstants.SignUp,
  redirectUrl: '/signup',
  headerFilter: NavLinkConstants.LoggedOutFilter,
  sliderMenuFilter: NavLinkConstants.sliderMenuLower,
  order: 2,
};

const basketLink = {
  icon: <FontAwesomeIcon icon={faShoppingCart} />,
  text: NavLinkConstants.Cart,
  redirectUrl: '/my-basket',
  headerFilter: NavLinkConstants.LoggedInFilter,
  sliderMenuFilter: NavLinkConstants.sliderMenuUpper,
  order: 4,
};

const signOutLink = {
  icon: <FontAwesomeIcon icon={faPowerOff} />,
  text: NavLinkConstants.SignOut,
  redirectUrl: '/signout',
  headerFilter: NavLinkConstants.LoggedInFilter,
  sliderMenuFilter: NavLinkConstants.sliderMenuLower,
  order: 5,
};

const signInLink = {
  icon: <FontAwesomeIcon icon={faUserLock} />,
  text: NavLinkConstants.SignIn,
  redirectUrl: '/signin',
  headerFilter: NavLinkConstants.LoggedOutFilter,
  sliderMenuFilter: NavLinkConstants.sliderMenuLower,
  order: 1,
};

const homeLink = {
  text: NavLinks.Home,
  icon: <FontAwesomeIcon icon={faHome} />,
  redirectUrl: '/',
  order: 1,
  sliderMenuFilter: NavLinkConstants.sliderMenuUpper,
};

const productsLink = {
  text: NavLinks.Products,
  icon: <FontAwesomeIcon icon={faStoreAlt} />,
  redirectUrl: '/products',
  order: 2,
  sliderMenuFilter: NavLinkConstants.sliderMenuUpper,
};

const aboutUsLink = {
  text: NavLinks.AboutUs,
  redirectUrl: '/about-us',
  order: 3,
  sliderMenuFilter: NavLinkConstants.sliderMenuUpper,
};

export const navigationIcons = [
  myAccountLink,
  signupLink,
  basketLink,
  signOutLink,
  signInLink,
];

export const navigationLinks = [homeLink, productsLink, aboutUsLink];

export const sliderLinks = [
  homeLink,
  productsLink,
  signOutLink,
  signInLink,
  basketLink,
  myAccountLink,
  signupLink,
];

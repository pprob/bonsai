import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faUser,
  faUserPlus,
  faShoppingCart,
  faPowerOff,
  faUserLock,
} from '@fortawesome/free-solid-svg-icons';

export enum NavLinkIcons {
  MyAccount = 'My Account',
  SignIn = 'Sign in',
  LoggedInFilter = 'logged in',
  LoggedOutFilter = 'logged out',
  SignUp = 'Sign up',
  SignOut = 'Sign out',
  Cart = 'Cart',
}

export enum NavLinks {
  Products = 'Products',
  Catalog = 'Catalog',
  AboutUs = 'About Us',
  Blog = 'Blog',
  Home = 'Home',
}

export const navigationIcons = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    text: NavLinkIcons.MyAccount,
    redirectUrl: '/my-account',
    filter: NavLinkIcons.LoggedInFilter,
    order: 3,
  },
  {
    icon: <FontAwesomeIcon icon={faUserPlus} />,
    text: NavLinkIcons.SignUp,
    redirectUrl: '/signup',
    filter: NavLinkIcons.LoggedOutFilter,
    order: 2,
  },
  {
    icon: <FontAwesomeIcon icon={faShoppingCart} />,
    text: NavLinkIcons.Cart,
    redirectUrl: '/my-basket',
    filter: NavLinkIcons.LoggedInFilter,
    order: 4,
  },
  {
    icon: <FontAwesomeIcon icon={faPowerOff} />,
    text: NavLinkIcons.SignOut,
    redirectUrl: '/signout',
    filter: null,
    order: 5,
  },
  {
    icon: <FontAwesomeIcon icon={faUserLock} />,
    text: NavLinkIcons.SignIn,
    redirectUrl: '/signin',
    filter: NavLinkIcons.LoggedOutFilter,
    order: 1,
  },
];

export const navigationLinks = [
  {
    text: NavLinks.Home,
    redirectUrl: '/',
    order: 1,
  },
  {
    text: NavLinks.Products,
    redirectUrl: '/products',
    order: 2,
  },
  {
    text: NavLinks.AboutUs,
    redirectUrl: '/about-us',
    order: 2,
  },
];

import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faUserPlus} from '@fortawesome/free-solid-svg-icons';

export enum NavLinkIcons {
  MyAccount = 'My Account',
  LoggedInFilter = 'logged in',
  LoggedOutFilter = 'logged out',
  SignUp = 'Sign up',
}

export enum NavLinks {
  Products = 'Products',
  Catalog = 'Catalog',
  AboutUs = 'About Us',
  Blog = 'Blog',
}

export const navigationIcons = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    text: NavLinkIcons.MyAccount,
    redirectUrl: '/my-account',
    filter: NavLinkIcons.LoggedInFilter,
    order: 2,
  },
  {
    icon: <FontAwesomeIcon icon={faUserPlus} />,
    text: NavLinkIcons.SignUp,
    redirectUrl: '/signup',
    filter: NavLinkIcons.LoggedOutFilter,
    order: 1,
  },
];

export const navigationLinks = [
  {
    text: NavLinks.Products,
    order: 1,
  },
  {
    text: NavLinks.AboutUs,
    order: 2,
  },
];

import {toggleSlider, toggleLoader} from './types';

export enum globalActionCreatorTypes {
  toggleSlider = 'TOGGLE_SLIDER',
  toggleSliderOff = 'TOGGLE_SLIDER_OFF',
  toggleLoaderOn = 'TOGGLE_LOADER_ON',
  toggleLoaderOff = 'TOGGLE_LOADER_OFF',
}

export const toggleSliderMenu = (): toggleSlider => ({
  type: globalActionCreatorTypes.toggleSlider,
});

export const toggleSliderMenuOff = (): toggleSlider => ({
  type: globalActionCreatorTypes.toggleSliderOff,
});

export const toggleAppLoaderOn = (): toggleLoader => ({
  type: globalActionCreatorTypes.toggleLoaderOn,
});

export const toggleAppLoaderOff = (): toggleLoader => ({
  type: globalActionCreatorTypes.toggleLoaderOff,
});

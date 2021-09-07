export enum globalActionCreatorTypes {
  toggleSlider = 'TOGGLE_SLIDER',
  toggleSliderOff = 'TOGGLE_SLIDER_OFF',
}

export type toggleSlider = {
  type: string;
};
export const toggleSliderMenu = (): toggleSlider => ({
  type: globalActionCreatorTypes.toggleSlider,
});

export const toggleSliderMenuOff = (): toggleSlider => ({
  type: globalActionCreatorTypes.toggleSliderOff,
});

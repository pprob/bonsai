export enum globalActionCreatorTypes {
  toggleSlider = 'TOGGLE_SLIDER',
}

export type toggleSlider = {
  type: string;
};
export const toggleSliderMenu = (): toggleSlider => ({
  type: globalActionCreatorTypes.toggleSlider,
});

import labels from '../utils/labels';
import _ from 'lodash';

const getLabel = (search: string, params: any): string => {
  const value = _.get(labels, search);

  return typeof value === 'string' ? value : value(params);
};

export default getLabel;

import React from 'react';
import './index.scss';

type Props = {
  content: string;
};

const SectionHeader: React.VFC<Props> = ({content}: Props) => {
  return (
    <>
      <h1 className='section__header'>{content}</h1>
    </>
  );
};

export default SectionHeader;

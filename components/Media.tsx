import React from 'react';
import MainLayout from './shared/MainLayout';
import SharedLine from './shared/SharedLine';
import Card from './shared/Card';

const Media = ({ data }: any) => {
  console.log(data);

  return (
    <MainLayout>
      <SharedLine header="Photos and Videos" tail="more" link="/media" icon />
      {
        // data &&
        <Card
          footer
          data={[
            { link: 'news' },
            { link: 'news' },
            { link: 'news' },
            { link: 'news' },
            { link: 'news' }
          ].slice(0, 4)}
        />
      }
    </MainLayout>
  );
};

export default Media;

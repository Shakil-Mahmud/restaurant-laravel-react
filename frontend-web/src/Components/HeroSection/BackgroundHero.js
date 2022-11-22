import React from 'react'
import { PageContainer } from '../../Layouts/Layouts';
import { BigTitle } from '../components';

function BackgroundHero() {
  return (
    <>
      <PageContainer>
        <div className="w-full h-[5rem] opacity-50 bg-blue-400">
          <BigTitle
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
            }
          />
        </div>
      </PageContainer>
    </>
  );
}

export default BackgroundHero

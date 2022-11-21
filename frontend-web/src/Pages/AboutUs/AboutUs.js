import React from 'react'
import { BigTitle, ItemDescription } from '../../Components/components'
import { PageContainer } from '../../Layouts/Layouts'
import { DUMMY_ITEM } from "../../Assets";

function AboutUs() {
  const description =
    "lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";

  return (
    <>
      <PageContainer>
        <div className="flex flex-col md:flex-row w-full shadow-sm">
          <div className="flex flex-col w-2/3 mr-2 px-4 border">
            <div className="flex">
              <BigTitle text={"This is a demo title for the about us page"} />
            </div>
            <div className="flex">
              <ItemDescription text={description} />{" "}
            </div>
          </div>
          <div className="flex min-w-[30rem] border">
            <img src={DUMMY_ITEM} />
          </div>
        </div>
      </PageContainer>
    </>
  );
}

export default AboutUs

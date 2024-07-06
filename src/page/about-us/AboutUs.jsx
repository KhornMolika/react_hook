import React from "react";
import NewsComponent1 from "../../components/newsComponent/NewsComponent1";
import NewsComponent2 from "../../components/newsComponent/NewsComponent2";


export default function AboutUs() {
  return (
    <div className="flex flex-col justify-center items-center max-w-screen-2xl p-5 mx-auto">
      <h1 className="mb-5">This is News Page</h1>
      <NewsComponent1/>

      {/* <section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 py-5 w-full justify-items-center"
      >
        <div className="xl:col-span-2 xl:row-span-2">
          <NewsComponent1 large />
        </div>
        <NewsComponent1 />
        <NewsComponent1 />
        <NewsComponent1 />
        <NewsComponent1 />
        <NewsComponent1 />
      </section>*/}


      <section className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4
         gap-5 py-5">
        <NewsComponent2/>
        <NewsComponent2/>
        <NewsComponent2/>
        <NewsComponent2/>
        </section> 
    </div>
  );
}

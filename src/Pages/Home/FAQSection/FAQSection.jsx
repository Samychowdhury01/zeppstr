/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
const FAQSection = () => {
  const data = {
    // title: "FAQ (About Our Service)",
    rows: [
      {
        title: (
          <span className="font-semibold">Lorem ipsum dolor sit amet,</span>
        ),
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.`,
      },
      {
        title: (
          <span className="font-semibold">Lorem ipsum dolor sit amet,</span>
        ),
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
        title: (
          <span className="font-semibold">Lorem ipsum dolor sit amet,</span>
        ),
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: (
          <span className="font-semibold">Lorem ipsum dolor sit amet,</span>
        ),
        content: <p>current version is 1.2.1</p>,
      },
    ],
  };

  const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "blue",
    rowTitleTextSize: "20px",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };

  return (
    <section className="p-8 md:p-28">
      {/* faq */}
     <div>
         <div className="flex flex-col md:flex-row gap-10 h-[700px] md:h-[350px]">
        <div className="w-full md:w-1/2 overflow-y-scroll custom-scrollbar">
          <h1 className="text-3xl md:text-5xl text-orange-600 font-bold">Some of FAQ's</h1>
          <h3 className="text-xl md:text-2xl font-semibold">
            To the innumerable question & queries, we have curated the right
            answers for you.
          </h3>
          <div>
          <Faq data={data} styles={styles} config={config} />
        </div>
        </div>
        
        <div className="faq-bg text-white w-full md:w-1/2 overflow-y-scroll custom-scrollbar p-3 md:px-10 md:py-10">
        <h1 className="text-2xl md:text-3xl font-bold md:w-2/3 mb-5">Get Traffic Ticking With Our Premium SEO Service.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          similique totam minima sequi excepturi quidem incidunt corporis nihil,
          amet eius harum pariatur nobis quasi consectetur mollitia aliquam a,
          culpa quod? Sed temporibus perspiciatis quas nam provident ipsa
          delectus sunt sequi qui, corrupti quaerat quae porro optio quibusdam
          dolorem dolore animi vero quis maxime ut? Consectetur quibusdam, vitae
          aliquid ab minus fugiat possimus rerum placeat ipsam voluptatem? Fugit
          at, quod voluptatum nulla voluptatem optio! Exercitationem tempore
          quidem blanditiis officia omnis nihil qui sit inventore impedit sequi
          rerum eligendi est quos, rem ex eum, corporis architecto beatae natus
          facere. Eveniet autem quasi nam architecto ducimus minima nesciunt
          beatae placeat eius? Accusamus repellat velit rem sed distinctio nihil
          eveniet? Sit sapiente beatae temporibus eos, odio, aut laboriosam
          delectus laudantium ratione, non consectetur possimus quaerat in nulla
          aliquam doloremque dolorum et ipsum repellat officia magnam dolores
          ipsa. Assumenda quae laboriosam magnam officia tempora minus, nostrum
          cumque veniam et quas doloribus, rerum quasi aspernatur deserunt in
          expedita cum dolore saepe sequi. Veritatis blanditiis natus commodi,
          consequuntur soluta rerum atque esse aperiam ducimus perspiciatis
          doloremque quibusdam. Maiores sunt eum repellat id alias voluptatibus
          minima odio deserunt ut, odit unde eveniet omnis inventore eligendi
          ipsam saepe eius.
        </p>
      </div>
      </div>
     </div>
      
    </section>
  );
};

export default FAQSection;

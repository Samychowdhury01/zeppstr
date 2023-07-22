/* eslint-disable react/no-unescaped-entities */
const FAQSection = () => {


  return (
    <section className="p-8 md:p-28">
      {/* faq */}
      <div>
        <div className="flex flex-col md:flex-row gap-10 h-[700px] md:h-[400px]">
          <div className="w-full md:w-1/2 overflow-y-scroll custom-scrollbar">
            <h1 className="text-3xl md:text-5xl text-orange-600 font-bold">
              Some of FAQ's
            </h1>
            <h3 className="text-xl md:text-2xl font-semibold">
              To the innumerable question & queries, we have curated the right
              answers for you.
            </h3>
            {/* Accordion */}
            <div className="mr-5 mt-8">
              <div className="collapse collapse-plus rounded-none">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-lg bg-blue-500 text-white">
                 <h1>Lorem ipsum dolor sit amet</h1>
                </div>
                <div className="collapse-content px-5 pt-5">
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.</p>
                </div>
              </div>
              <div className="collapse collapse-plus rounded-none">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-lg bg-blue-500 text-white">
                 <h1>Lorem ipsum dolor sit amet</h1>
                </div>
                <div className="collapse-content px-5 pt-5">
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.</p>
                </div>
              </div>
              <div className="collapse collapse-plus rounded-none">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-lg bg-blue-500 text-white">
                 <h1>Lorem ipsum dolor sit amet</h1>
                </div>
                <div className="collapse-content px-5 pt-5">
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="faq-bg text-white w-full md:w-1/2 overflow-y-scroll custom-scrollbar p-3 md:px-10 md:py-10">
            <h1 className="text-2xl md:text-3xl font-bold md:w-2/3 mb-5">
              Get Traffic Ticking With Our Premium SEO Service.
            </h1>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maxime rerum. Repellendus voluptatibus quis magnam harum magni debitis praesentium dolor quos nisi dolore est pariatur quasi doloremque nobis odio incidunt repudiandae quisquam ea, minima explicabo doloribus quae! Voluptate quos id accusamus sequi nemo omnis sapiente doloremque, officia aspernatur autem. Ratione? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ullam est obcaecati alias sint dolores.</p>
            
           <div className="space-y-5">
            
            <p> Global SEO: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maxime rerum. Repellendus voluptatibus quis magnam harum magni debitis praesentium dolor.</p>

            <p>Local SEO: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maxime rerum. Repellendus voluptatibus quis magnam harum magni debitis praesentium dolor.</p>

            <p>E-Commarce Marketing: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maxime rerum. Repellendus voluptatibus quis magnam harum magni debitis praesentium dolor.</p>

            <p>Guest Posting: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, maxime rerum. Repellendus voluptatibus quis magnam harum magni debitis praesentium dolor.</p>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;



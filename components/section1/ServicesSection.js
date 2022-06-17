import React from "react";

export default function ServicesSection() {
  return (
    <div className="w-full flex flex-col items-center py-10">
      {/* Section 1 */}
      <section className="w-10/12 py-10 text-center">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold">Towing Serivces</h1>
        </div>
        <br />
        <div className="flex flex-col items-center md:flex-row md:text-left md:items-start">
          <p className="md:pr-10 md:mt-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purposeIt is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purposeIt is a long established fact that a
            reader will be distracted by the readable content of a page when
            looking at its layout.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40811.95901496711!2d-118.26267711605716!3d34.03423245399524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1645436723473!5m2!1sen!2sin"
            className="w-full h-96 mt-5"
            style={{ border: "none" }}
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-col mt-16 items-center w-full py-20 bg-services-list bg-center bg-cover bg-fixed text-white">
        <div className="flex flex-col items-center w-10/12">
          <div className="flex items-center justify-center">
            <h1 className="text-4xl font-bold">Towing Serivces</h1>
          </div>
          <br />
          <br />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <Service
              title="Flatbed Towing"
              des="The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content
                here'."
            />
            <Service
              title="Flatbed Towing"
              des="The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content
                here'."
            />
            <Service
              title="Flatbed Towing"
              des="The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content
                here'."
            />
            <Service
              title="Roadside Assistance"
              des="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
            />
            <Service
              title="Roadside Assistance"
              des="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
            />
            <Service
              title="Roadside Assistance"
              des="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
            />
            <Service
              title="Emergency 24 Hours"
              des="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
            />
            <Service
              title="Emergency 24 Hours"
              des="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
            />
            <Service
              title="Emergency 24 Hours"
              des="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-10/12 mt-7 py-10 text-center">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold">Towing Serivces</h1>
        </div>
        <div className="flex flex-col items-center md:flex-row md:text-left md:items-start">
          <p className="md:pr-10 md:mt-10">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purposeIt is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purposeIt is a long established fact that a
            reader will be distracted by the readable content of a page when
            looking at its layout.
          </p>
          <iframe
            className="w-full h-96 mt-10"
            src="https://www.youtube.com/embed/wER6WVNEEwo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

function Service({ title, des }) {
  return (
    <div className="grid grid-cols-service-item">
      <div>
        <img className="mt-2" src="/images/icons/check-icn.png" alt="" />
      </div>
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-lg mt-2">{des}</p>
      </div>
    </div>
  );
}

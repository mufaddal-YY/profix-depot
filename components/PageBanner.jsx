const PageBanner = ({ headline, subHeadline }) => {
  return (
    <main className="bg-primary">
      <section className="container py-[50px] text-center">
        <h1 className="text-white text-4xl font-semibold">{headline}</h1>
        <div className="flex justify-center w-full md:w-3/4 lg:w-3/4 mx-auto text-center">
          <p className="text-white py-4">{subHeadline}</p>
        </div>
      </section>
    </main>
  );
};

export default PageBanner;

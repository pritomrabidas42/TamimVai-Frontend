const Information = () => {
  return (
    <section className="max-w-4xl mx-auto py-14 text-center">
      <h2 className="sm:text-3xl text-2xl uppercase text-primary font-Nunito-font font-semibold text-center">Get in Touch</h2>
      <p className="my-4 text-gray-700 font-normal font-Popins text-sm">
        Have questions or special requests? Reach out to us and we'll be happy
        to assist!
      </p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Phone", info: "+123 456 7890" },
          { title: "Email", info: "support@sweettreats.com" },
          { title: "Address", info: "123 Cake Street, Sweetland" },
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-primary font-Nunito-font">{item.title}</h3>
            <p className="mt-2 text-gray-700 font-Popins font-normal text-sm">{item.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Information;

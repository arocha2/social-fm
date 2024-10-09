import jessica from "../assets/images/avatar-jessica.jpeg";

export const SocialCard = (socialPeople) => {
  const { name, addres, description, social } = socialPeople;
  const handleClick = (valor) => {
    console.log("click");
  };

  return (
    <section className="shadow-xl gap-2 rounded-xl text-white grow max-w-sm h-fit bg-zinc-800 p-6 flex flex-col justify-center items-center">
      <img className="mb-4 rounded-full w-24" src={jessica} alt="img" />
      <h2 className="text-3xl font-semibold">{name}</h2>
      <p className="mb-4 font-bold text-lime-300">{addres}</p>
      <p className="mb-4">{`"${description}"`}</p>
      {Object.entries(social).map(([clave, valor]) => (
        <div
          key={clave}
          onClick={() => handleClick(valor)}
          className="cursor-pointer hover:bg-lime-300 hover:text-zinc-800 mb-2 w-full py-2 px-6 bg-zinc-700 text-center font-bold rounded-md"
        >
          {clave}
        </div>
      ))}
    </section>
  );
};

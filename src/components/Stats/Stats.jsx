const Stats = () => {
  const stats = [
    {
      label: "Total Downloads",
      value: "29.6M",
      description: "21% More Than Last Month",
    },
    {
      label: "Total Reviews",
      value: "906K",
      description: "46% More Than Last Month",
    },
    {
      label: "Active Apps",
      value: "132+",
      description: "31 More Will Launch",
    },
  ];

  return (
    <section className="bg-[#8b5cf6] text-white py-15">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-sm font-medium opacity-80 mb-4 uppercase tracking-wider">
                {stat.label}
              </span>
              <h3 className="text-5xl md:text-5xl font-extrabold mb-4">
                {stat.value}
              </h3>
              <p className="text-xs md:text-sm opacity-70">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
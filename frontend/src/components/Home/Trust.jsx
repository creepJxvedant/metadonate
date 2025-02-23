function Trust(){
    const trustedBy = [
        'Ethereum Foundation',
        'Chainlink',
        'Polygon',
        'OpenZeppelin',
        'Alchemy',
      ];
    return(
         <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                  <h3 className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider">
                    Trusted By Industry Leaders
                  </h3>
                  <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {trustedBy.map((company, index) => (
                      <div
                        key={index}
                        className="text-gray-500 font-medium text-lg hover:text-gray-300 transition-colors"
                      >
                        {company}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
    );
}

export default Trust;
import React from 'react';
import { chains } from 'chain-registry';

const Validator: React.FC = () => {
  const searchChains = ['cosmoshub','osmosis', 'stargaze', 'akash','dydx','agoric','juno','regen','sentinel','bitsong','likecoin','ixo','emoney','cyber'];
  const filteredChains = chains.filter((chain) => searchChains.includes(chain.chain_name));

  return (
      <div className='card p-8 m-4 rounded-xl min-h-8'    >
        
        <h2 className="text-2xl font-bold mb-4">Chains</h2>
        <p className='py-8'>
          Example page showing some chains from the <a href="https://github.com/cosmos/chain-registry" className='font-medium'>cosmos/chain-registry</a> via <a href="https://www.npmjs.com/package/chain-registry" className='font-medium'>Chain-registry Package from Cosmology</a>
        </p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {filteredChains.map((chain) => (
             <div key={chain.chain_name} className='flex flex-col items-center justify-center card bg-morado-400  dark:bg-morado-800 rounded-xl p-6'>
             <div className='capitalize text-morado-950 dark:text-morado-200'>{chain.chain_name}</div>
              <div className='h-20 p-4 flex items-center justify-center'>
                <img
                  src={chain.logo_URIs?.png}
                  alt={chain.chain_name}
                  className="max-w-40 max-h-16 rounded-full"
                />
              </div>
              <a href={chain.website}>
              <button className='bg-morado-600 hover:bg-morado-500 hover:shadow-xl text-white py-2 px-4 mt-4 rounded-lg shadow-md'>
                Official Site
              </button>
              </a>
            </div>
          ))}
        </div>

      </div>
  );
};

export default Validator;

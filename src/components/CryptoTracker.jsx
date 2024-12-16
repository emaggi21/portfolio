import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const CryptoTracker = () => {
  const [cryptoData, setCryptoData] = useState({});
  const [prevPrices, setPrevPrices] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const cryptos = ['bitcoin', 'ethereum', 'solana', 'binancecoin'];

  const cryptoIcons = {
    bitcoin: '₿',
    ethereum: 'Ξ',
    solana: '◎',
    binancecoin: 'BNB',
  };

  const cryptoNames = {
    bitcoin: 'Bitcoin',
    ethereum: 'Ethereum',
    solana: 'Solana',
    binancecoin: 'BNB',
  };

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${cryptos.join(',')}&vs_currencies=usd&include_24hr_change=true`
        );
        const data = await response.json();
        setPrevPrices(cryptoData);
        setCryptoData(data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch crypto data');
        setIsLoading(false);
      }
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 30000);
    return () => clearInterval(interval);
  }, []);

  const getPriceChangeClass = (crypto) => {
    if (!prevPrices[crypto]) return '';
    if (cryptoData[crypto]?.usd > prevPrices[crypto]?.usd) {
      return 'animate-price-up';
    }
    if (cryptoData[crypto]?.usd < prevPrices[crypto]?.usd) {
      return 'animate-price-down';
    }
    return '';
  };

  
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cryptos.map((crypto) => (
            <div key={crypto} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 animate-pulse">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Crypto Prices
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cryptos.map((crypto) => (
          <div 
            key={crypto} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl dark:text-gray-200">{cryptoIcons[crypto]}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {cryptoNames[crypto]}
                </h3>
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-bold text-gray-900 dark:text-white ${getPriceChangeClass(crypto)}`}>
                ${cryptoData[crypto]?.usd.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
              <div className="flex items-center mt-2">
                {cryptoData[crypto]?.usd_24h_change > 0 ? (
                  <ArrowUp className="w-4 h-4 text-green-500" />
                ) : (
                  <ArrowDown className="w-4 h-4 text-red-500" />
                )}
                <span
                  className={cryptoData[crypto]?.usd_24h_change > 0 ? 'text-green-500' : 'text-red-500'}
                >
                  {Math.abs(cryptoData[crypto]?.usd_24h_change).toFixed(2)}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoTracker;
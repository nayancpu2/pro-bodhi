import { useState } from 'react';

interface PricingOption {
  id: string;
  units: number;
  price: number;
  originalPrice: number;
  discount: number;
  isPopular?: boolean;
}

const BogoInterface = () => {
  const [selectedOption, setSelectedOption] = useState<string>('2-unit');
  const [expandedOption, setExpandedOption] = useState<string>('2-unit');

  const pricingOptions: PricingOption[] = [
    {
      id: '1-unit',
      units: 1,
      price: 10.00,
      originalPrice: 20.00,
      discount: 50,
    },
    {
      id: '2-unit',
      units: 2,
      price: 18.00,
      originalPrice: 24.00,
      discount: 20,
      isPopular: true,
    },
    {
      id: '3-unit',
      units: 3,
      price: 24.00,
      originalPrice: 30.00,
      discount: 20,
    },
  ];

  const handleOptionClick = (optionId: string) => {
    setSelectedOption(optionId);
    setExpandedOption(expandedOption === optionId ? '' : optionId);
  };

  const selectedPrice = pricingOptions.find(option => option.id === selectedOption)?.price || 18.00;

  return (
    <div className="min-h-screen bg-gradient-to-br from-bogo-purple-light to-white p-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-bogo-purple to-bogo-primary p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-bogo-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">b</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs">👤</span>
              </div>
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                <span className="text-xs">👤</span>
              </div>
              <span className="text-white font-semibold">7</span>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-bogo-primary font-bold text-xl text-center bg-white/90 rounded-lg py-2 px-4">
              YAY! It's BOGO
            </h1>
          </div>
        </div>

        {/* Pricing Options */}
        <div className="p-6 space-y-4">
          {pricingOptions.map((option) => (
            <div key={option.id} className="relative">
              {/* Popular Badge */}
              {option.isPopular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-bogo-primary text-white px-4 py-1 rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                  selectedOption === option.id
                    ? 'border-bogo-purple bg-bogo-purple-light'
                    : 'border-gray-200 hover:border-bogo-purple/50'
                } ${option.isPopular ? 'mt-4' : ''}`}
                onClick={() => handleOptionClick(option.id)}
              >
                {/* Radio Button and Basic Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <input
                        type="radio"
                        name="pricing"
                        checked={selectedOption === option.id}
                        onChange={() => {}}
                        className="w-5 h-5 text-bogo-primary"
                      />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold">{option.units} Unit</span>
                        <span className="bg-bogo-primary text-white px-2 py-1 rounded text-xs font-semibold">
                          {option.discount}% Off
                        </span>
                      </div>
                      {selectedOption !== option.id && (
                        <span className="text-bogo-gray text-sm">Standard Price</span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">${option.price.toFixed(2)} USD</div>
                    <div className="text-bogo-gray line-through text-sm">
                      ${option.originalPrice.toFixed(2)} USD
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedOption === option.id 
                      ? 'max-h-96 opacity-100 mt-4' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Size</label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">#1</span>
                          <select className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm">
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                          </select>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">#2</span>
                          <select className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm">
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Colour</label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            <div className="w-6 h-6 bg-black rounded-full border-2 border-gray-300"></div>
                            <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-gray-300"></div>
                          </div>
                          <span className="text-sm">Black</span>
                        </div>
                        <select className="w-full border border-gray-300 rounded px-2 py-1 text-sm">
                          <option>Colour</option>
                          <option>Black</option>
                          <option>Blue</option>
                          <option>Red</option>
                          <option>Green</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-bogo-success font-medium">Free Delivery</span>
            <span className="font-bold">Total : ${selectedPrice.toFixed(2)} USD</span>
          </div>
          
          <button className="w-full bg-bogo-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-bogo-primary/90 transition-colors">
            + Add to Cart
          </button>
          
          <div className="text-center mt-3">
            <span className="text-bogo-gray text-xs">@ Powered by Pumper</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BogoInterface;
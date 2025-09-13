// Pricing data
const pricingData = {
    '1-unit': { price: 10.00 },
    '2-unit': { price: 18.00 },
    '3-unit': { price: 24.00 }
};

// DOM elements
const pricingOptions = document.querySelectorAll('.pricing-option');
const radioInputs = document.querySelectorAll('.radio-input');
const totalPriceElement = document.getElementById('total-price');

// Initialize
let selectedOption = '2-unit';
let expandedOption = '2-unit';

// Set initial state
function initialize() {
    updateSelection(selectedOption);
    updateExpansion(expandedOption);
    updateTotalPrice();
}

// Handle option click
function handleOptionClick(optionId) {
    // Update selection
    selectedOption = optionId;
    updateSelection(selectedOption);
    
    // Toggle expansion
    if (expandedOption === optionId) {
        expandedOption = '';
    } else {
        expandedOption = optionId;
    }
    updateExpansion(expandedOption);
    
    // Update total price
    updateTotalPrice();
}

// Update visual selection state
function updateSelection(selectedId) {
    pricingOptions.forEach(option => {
        const optionId = option.dataset.option;
        const radioInput = option.querySelector('.radio-input');
        const standardPrice = option.querySelector('.standard-price');
        
        if (optionId === selectedId) {
            option.classList.add('selected');
            radioInput.checked = true;
            if (standardPrice) {
                standardPrice.style.display = 'none';
            }
        } else {
            option.classList.remove('selected');
            radioInput.checked = false;
            if (standardPrice) {
                standardPrice.style.display = 'block';
            }
        }
    });
}

// Update expansion state
function updateExpansion(expandedId) {
    pricingOptions.forEach(option => {
        const optionId = option.dataset.option;
        
        if (optionId === expandedId) {
            option.classList.add('expanded');
        } else {
            option.classList.remove('expanded');
        }
    });
}

// Update total price display
function updateTotalPrice() {
    const price = pricingData[selectedOption].price;
    totalPriceElement.textContent = `$${price.toFixed(2)}`;
}

// Event listeners
pricingOptions.forEach(option => {
    option.addEventListener('click', () => {
        const optionId = option.dataset.option;
        handleOptionClick(optionId);
    });
});

// Radio input event listeners
radioInputs.forEach(input => {
    input.addEventListener('change', (e) => {
        if (e.target.checked) {
            const optionId = e.target.value;
            selectedOption = optionId;
            updateSelection(selectedOption);
            updateTotalPrice();
        }
    });
});

// Initialize the interface
initialize();
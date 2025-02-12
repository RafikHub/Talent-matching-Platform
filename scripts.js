// scripts.js

// Add event listener for tab switching
const tabs = document.querySelectorAll('.tab');
const tableDisplay = document.querySelector('.table-display');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove 'active' class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        
        // Add 'active' class to the clicked tab
        tab.classList.add('active');

        // Change the content in the table-display (mock example)
        tableDisplay.innerHTML = `<p>Displaying content for ${tab.textContent}.</p>`;
    });
});

// Add event listener for resetting filters
const resetFiltersBtn = document.querySelector('.reset-filters');

resetFiltersBtn.addEventListener('click', () => {
    const selects = document.querySelectorAll('.filters select');

    // Reset all select filters to their default value
    selects.forEach(select => {
        select.selectedIndex = 0;
    });

    // Display a reset message (mock example)
    tableDisplay.innerHTML = '<p>Filters have been reset. Displaying all content.</p>';
});

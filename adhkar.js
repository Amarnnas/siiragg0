
// --- Data: Adhkar list ---
const adhkarData = [
    // ...existing Adhkar data...
];

// --- localStorage ---
const STORAGE_KEY = 'adhkariAppProgress_v2_blue';

function loadProgress() {
    const progress = localStorage.getItem(STORAGE_KEY);
    return progress ? JSON.parse(progress) : {};
}

function saveProgress(progress) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

let currentProgress = loadProgress();

// --- Rendering Adhkar ---
function renderAdhkar(filter = 'all') {
    const adhkarContainer = document.getElementById('adhkar-container');
    adhkarContainer.innerHTML = ''; // Clear previous cards

    const filteredAdhkar = filter === 'all' ? adhkarData : adhkarData.filter(dhikr => dhikr.category === filter);

    if (filteredAdhkar.length === 0) {
        adhkarContainer.innerHTML = `<p class="text-center text-slate-600 col-span-full">لا توجد أذكار في هذا القسم حاليًا.</p>`;
        return;
    }

    filteredAdhkar.forEach(dhikr => {
        const countRead = currentProgress[dhikr.id] || 0;
        const isCompleted = countRead >= dhikr.count_total;

        const card = document.createElement('div');
        card.className = 'dhikr-card bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300';

        let cardContent = `
            <div>
                <h3 class="primary-text-color font-semibold text-lg sm:text-xl mb-1">${dhikr.category}</h3>
                <p class="text-slate-700 text-md sm:text-lg leading-relaxed mb-3">${dhikr.text}</p>
                <p class="text-sm text-slate-500 mb-3">المصدر: ${dhikr.source || 'غير محدد'}</p>
                <p class="text-sm font-medium secondary-text-color mb-4">عدد مرات التكرار: ${dhikr.count_total} مرة</p>
            </div>
            <button 
                data-id="${dhikr.id}" 
                class="counter-btn w-full mt-2 primary-btn-bg text-white hover:primary-btn-hover-bg focus:outline-none focus:ring-2 focus-ring-color focus:ring-opacity-75 transition-colors duration-200 ${isCompleted ? 'counter-btn-completed' : ''}"
                ${isCompleted ? 'disabled' : ''}
            >
                ${isCompleted ? 'أكملت الذكر ✅' : `تمت القراءة: ${countRead} / ${dhikr.count_total}`}
            </button>
        `;
        card.innerHTML = cardContent;
        adhkarContainer.appendChild(card);
    });

    addCounterEventListeners();
}

// --- Event Listeners ---
function handleFilterClick(event) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    const category = event.target.getAttribute('data-category');
    renderAdhkar(category);
}

function handleCounterClick(event) {
    const dhikrId = event.target.getAttribute('data-id');
    let countRead = currentProgress[dhikrId] || 0;
    const dhikr = adhkarData.find(d => d.id === dhikrId);

    if (!dhikr || countRead >= dhikr.count_total) {
        return; // Already completed or dhikr not found
    }

    countRead++;
    currentProgress[dhikrId] = countRead;
    saveProgress(currentProgress);

    event.target.textContent = `تمت القراءة: ${countRead} / ${dhikr.count_total}`;
    if (countRead >= dhikr.count_total) {
        event.target.classList.add('counter-btn-completed');
        event.target.textContent = 'أكملت الذكر ✅';
        event.target.disabled = true;
    }
}

function addCounterEventListeners() {
    const counterButtons = document.querySelectorAll('.counter-btn');
    counterButtons.forEach(button => {
        button.removeEventListener('click', handleCounterClick);
        button.addEventListener('click', handleCounterClick);
    });
}

// --- Initial Load ---
document.addEventListener('DOMContentLoaded', () => {
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    renderAdhkar('all'); // Show all Adhkar by default

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });
});

// Workout Tracker
const workoutTarget = 156; // 3 workouts a week for 52 weeks
let completedWorkouts = 0;

// Book Tracker
const bookTarget = 12; // 1 book a month
let completedBooks = 0;

// Lookmaxing Routine
const lookmaxingTarget = 730; // Morning and night routine for 365 days
let completedLookmaxing = 0;

// Article Reading Tracker
const articleTarget = 365; // Daily article reading
let completedArticles = 0;

// Function to update progress bars
function updateProgressBars() {
    document.getElementById('workout-progress').style.width = (completedWorkouts / workoutTarget) * 100 + '%';
    document.getElementById('book-progress').style.width = (completedBooks / bookTarget) * 100 + '%';
    document.getElementById('lookmaxing-progress').style.width = (completedLookmaxing / lookmaxingTarget) * 100 + '%';
    document.getElementById('article-progress').style.width = (completedArticles / articleTarget) * 100 + '%';
}

// Call the function to initialize progress bars
updateProgressBars();

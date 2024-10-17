const challenges = [
    "Run 1 mile.",
    "Read a chapter of a book.",
    "Try a new recipe.",
    "Do 20 push-ups.",
    "Meditate for 10 minutes.",
    "Write in a journal.",
    "Learn a new word.",
    "Go for a walk in nature.",
    "Draw or sketch something.",
    "Call a friend or family member."
];

function generateChallenge() {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    document.getElementById('challenge').textContent = challenges[randomIndex];
}

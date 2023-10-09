module.exports = {
    '**/*.{js,jsx,ts,tsx}': ["eslint '**/*.{js,jsx,ts,tsx}' --fix"],
    '**/*.{css,scss,less,js,jsx,ts,tsx,md,html,json}': [
        "prettier --ignore-path .gitignore '**/*.{css,scss,less,js,jsx,ts,tsx,html,json}' --write",
    ],
};

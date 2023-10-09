module.exports = {
    apps: [
        {
            name: 'soha-express',
            script: 'npm',
            args: 'start',
            env: {
                NODE_ENV: 'development',
            },
            env_production: {
                PORT: 3001,
                NODE_ENV: 'production',
            },
        },
    ],
    deploy: {
        production: {
            user: 'root',
            host: 'vanchuyen.orderhanquoc.com',
            ref: 'origin/main',
            repo: 'git@gitlab.com:cyber-skill/order-hq/soha-express.git',
            path: '/root/soha-express',
            'post-deploy':
                'yarn --ignore-engines && yarn build && pm2 startOrRestart ecosystem.config.js --env production',
            ssh_options: [
                'StrictHostKeyChecking=no',
                'PasswordAuthentication=no',
            ],
        },
    },
};

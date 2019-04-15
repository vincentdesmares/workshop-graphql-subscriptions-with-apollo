module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'api',
      watch: true,
      ignore_watch: [
        'data',
        '.git/*',
        'cms',
        'node_modules',
        'node_modules/.*',
        'node_modules/.cache/*',
        'node_modules/.cache/babel-loader/*',
        'src/components'
      ],
      watch_options: {
        dot: true
      },
      script: 'server/index.js',
      node_args: ['--inspect'],
      log_date_format: 'YYYY-MM-DD HH:mm Z'
    }
  ],
  deploy: {}
}

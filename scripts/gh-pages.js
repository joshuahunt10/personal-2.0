var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'prod',
        repo: 'https://github.com/joshuahunt10/personal-2.0.git',
        user: {
            name: 'Josh Hunt',
            email: 'joshua.hunt88@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)


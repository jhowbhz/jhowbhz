const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const githubApiUrl = 'https://api.github.com/users/jhowbhz/repos';

app.get('/', async (req, res) => {

  try {

    const response = await axios.get(githubApiUrl);
    const repositories = response.data.map(repo => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
    }));

    //add message in response
    res.json({ 
        message: "Hey, how've you been? I'm John a software engineer based in Brazil 🇧🇷✈️",
        skills: "PHP, Laravel, Node JS, Python, MYSQL, DevOps, JavaScript, Cordova, React Native, Linux",
        experience: "👴 Experience: 8 years, sênior",
        mygist: "https://gist.github.com/jhowbhz",
        repositories: repositories
    });

} catch (error) {

    console.error('Error fetching GitHub repositories:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  
}

});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

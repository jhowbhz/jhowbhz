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
      skills: ["PHP", "Laravel", "Node JS", "Python", "MYSQL", "DevOps", "JavaScript", "Cordova", "React Native", "Linux"],
      tools: ["Visual Code", "Git", "Workbench", "Putty", "Figma", "Photoshop", "Adobe XD"],
      experience: "8 years, sênior 👴",
      examples: "https://gist.github.com/jhowbhz",
      projects: [
          {
              name: "APIBrasil",
              description: "Plataforma Multi API para desenvolvedores",
              url: "https://apibrasil.com.br"
          },
          {
              name: "DivulgaWhats",
              description: "Central de mensagens para WhatsApp",
              url: "https://whitelabel.divulgawhats.com",
          },
          {
              name: "API WhatsApp",
              description: "API para WhatsApp com diversos recursos",
              url: "https://whitelabel.apibrasil.com.br",
          }
      ],
      linkedin: "https://www.linkedin.com/in/jhowbhz",
      twitter: "https://twitter.com/jhowbhz",
      github: "https://github.com/jhowbhz",
      whatsapp: "https://wa.me/5531994359434",
      opensource: repositories
    });

} catch (error) {

    console.error('Error fetching GitHub repositories:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  
}

});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});



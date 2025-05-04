# FURIA Esports Website
![image](https://github.com/user-attachments/assets/232e01e3-3e96-4a68-9b21-469a7d8a4500)

## Overview
This is a single-page React application dedicated to showcasing the FURIA Esports team. It provides information about the team's players, achievements, and a chatbot for fan interaction. The application is styled with Tailwind CSS and uses React for dynamic components.

## Features
- **Navigation Bar**: A fixed navbar with links to different sections ("Siga-nos", "Jogadores", "Premiações", "Chat") and the FURIA logo.
- **Players Carousel**: Displays team members and coaches with their names, roles, descriptions, and external profile links. Includes a carousel navigation to cycle through players.
- **Awards Carousel**: Showcases FURIA's major awards with images, titles, and descriptions, navigable via dots.
- **Chatbot**: An interactive chat interface powered by an external API (Mistral AI via OpenRouter) that responds to questions about FURIA Esports.
- **Footer**: Links to FURIA’s social media profiles (Twitter, Instagram, Facebook).

## Technologies Used
- **React**: For building the user interface and managing component state.
- **Tailwind CSS**: For styling the application.
- **JavaScript (ES6+)**: For application logic and interactivity.
- **OpenRouter API**: For powering the chatbot with AI-driven responses.
- **CDN Libraries**:
  - React and ReactDOM (via cdn.jsdelivr.net)
  - Tailwind CSS (via CDN)

## Project Folder Structure
```
src/
├── assets/
│   └── images/
├── css/
│   └── styles.css
└── js/
    └── app.js
├── index.html
└── README.markdown
```
### Description
- **src/**: Main source folder for the project.
  - **assets/**: Contains static assets like images.
    - **images/**: Directory for image files.
  - **css/**: Directory for CSS files.
    - **styles.css**: Main stylesheet for the project.
  - **js/**: Directory for JavaScript files.
    - **app.js**: Main JavaScript file for the application logic.
  - **index.html**: The main HTML file for the project.
  - **README.markdown**: Documentation file for the project.


## Setup and Installation
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd furia-esports-website
   ```

2. **Install Dependencies**:
   Ensure you have Node.js installed. Then, install the required dependencies:
   ```bash
   npm install
   ```

3. **Run the Application**:
   Start the development server:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

4. **API Configuration**:
   The chatbot uses the OpenRouter API. Ensure you have a valid API key and replace the placeholder in the `ChatBot` component:
   ```javascript
   'Authorization': 'Bearer <your-api-key>'
   ```

## Usage
- Navigate through sections using the navbar.
  
 ![image](https://github.com/user-attachments/assets/063e7b7f-a2ae-4169-bf6e-f554c7b90ec4)

- Use the arrows in the `JogadoresCarousel` to view different players.
  
 ![Vídeo sem título ‐ Feito com o Clipchamp (3)](https://github.com/user-attachments/assets/d9e393f5-b345-4b31-9362-21408486da9e)

- Click the dots in the `PremiacoesCarousel` to view awards.
  
 ![Vídeo sem título ‐ Feito com o Clipchamp (2)](https://github.com/user-attachments/assets/8756c1a2-801e-4151-88f7-38df616fdf38)
 
- Type questions in the chatbot input to interact with the AI (e.g., "Who is FalleN?").
  
 ![image](https://github.com/user-attachments/assets/150baf4f-9496-4537-939a-b17e305c120f)
 
- Click social media links in the footer to visit FURIA’s profiles.
  
 ![image](https://github.com/user-attachments/assets/74d61753-7e40-44bb-a776-56789db6af96)


## Notes
- The chatbot is configured to respond to questions related to FURIA Esports.
- The chatbot may contain outdated information
- Image assets (e.g., `src/images/teamLogo-furia.png`, player images) must be placed in the correct directory as referenced in the code.
- The application assumes all external links (player profiles, social media) are valid and accessible.
- The chatbot API call has a `max_tokens` limit of 150 and a `temperature` of 0.7 for balanced responses.

## Future Improvements
- Add better accessibility resources
- Implement error handling for image loading failures.
- Enhance the chatbot with more context about FURIA’s history and events.

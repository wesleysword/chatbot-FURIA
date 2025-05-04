const NavBar = () => {
    return (
      <nav className="bg-black text-white p-4 fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col items-center">
          <img
            src="src/images/teamLogo-furia.png"
            alt="Logo Time Esportivo"
            className="h-12 w-auto"
          />
        </div>
          <ul className="flex space-x-6">
            <li><a href="#footer" className="hover:text-gray-300">Siga-nos</a></li>
            <li><a href="#jogadores" className="hover:text-gray-300">Jogadores</a></li>
            <li><a href="#premiacoes" className="hover:text-gray-300">Premiações</a></li>
            <li><a href="#chat" className="hover:text-gray-300">Chat</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  const JogadoresCarousel = () => {
    const jogadores = [
      { name: "FalleN", role: "Líder do time", desc: "Gabriel Toledo de Alcântara Sguario", img: "src/assets/images/fallen-furia.jpeg", link: "https://escharts.com/pt/players/fallen" },
      { name: "YEKINDAR", role: "", desc: "Mareks Gaļinskis", img: "src/assets/images/yekindar-furia.png", link: "https://escharts.com/pt/players/yekindar" },
      { name: "Hepa", role: "Coach", desc: "Juan Borges", img: "src/assets/images/hepa-furia.png", link: "https://escharts.com/pt/players/hepa" },
      { name: "Sidde", role: "Coach", desc: "Sidnei Macedo Pereira Filho", img: "src/assets/images/sidde-furia.jpg", link: "https://escharts.com/pt/players/sidde" },
      { name: "Yuurih", role: "", desc: "Yuri Gomes dos Santos Boian", img: "src/assets/images/yuurih-furia.png", link: "https://escharts.com/pt/players/yuurih" },
      { name: "KSCERATO", role: "", desc: "Kaike Silva Cerato", img: "src/assets/images/kscerato-furia.png", link: "https://escharts.com/pt/players/kscerato" },
      { name: "molodoy", role: "", desc: "Danil Golubenko", img: "src/assets/images/melodoy-furia.jpg", link: "https://escharts.com/pt/players/molodoy-kazakhstan" },
      { name: "skullz", role: "Reserva", desc: "Felipe Frank Medeiros", img: "src/assets/images/skullz-furia.jpg", link: "https://escharts.com/pt/players/skullz" },
      { name: "chelo", role: "Reserva", desc: "Marcelo Cespedes", img: "src/assets/images/chelo-furia.jpg", link: "https://escharts.com/pt/players/chelo" }
    ];
  
  const [centerIndex, setCenterIndex] = React.useState(0);

  const handlePrev = () => {
    setCenterIndex((prev) => (prev === 0 ? jogadores.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev === jogadores.length - 1 ? 0 : prev + 1));
  };

  const getVisibleJogadores = () => {
    const visible = [];
    const prevIndex = centerIndex === 0 ? jogadores.length - 1 : centerIndex - 1;
    const nextIndex = centerIndex === jogadores.length - 1 ? 0 : centerIndex + 1;
    visible.push(jogadores[prevIndex], jogadores[centerIndex], jogadores[nextIndex]);
    return visible;
  };

  const handleSaibaMaisClick = () => {
    const chatSection = document.getElementById("chat");
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="jogadores" className="py-16 bg-white jogadores-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Nossos Jogadores e Coach</h2>
        <div className="carousel-container">
          <div className="carousel-arrow left" onClick={handlePrev}>←</div>
          <div className="carousel">
            {getVisibleJogadores().map((jogador, index) => (
              <div
                key={jogador.name}
                className={`carousel-card ${index === 1 ? 'center' : 'side'}`}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={jogador.img} alt={jogador.name} className="w-full h-80 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-black">{jogador.name}</h3>
                    <p className="text-gray-600 mb-2">{jogador.role}</p>
                    <p className="text-gray-500 text-sm mb-4">{jogador.desc}</p>
                    <a
                      href={jogador.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleSaibaMaisClick}
                      className="text-blue-600 hover:underline"
                    >
                      Saiba mais
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-arrow right" onClick={handleNext}>→</div>
        </div>
      </div>
    </section>
  );
};
  
  const PremiacoesCarousel = () => {
    const premiacoes = [
      { title: "ESL Pro League Season 12 North America", desc: "1º Lugar", img: "src/assets/images/furia-ESL-12.jpg" },
      { title: "Esports Championship Series Season 7 Finals", desc: "2º Lugar", img: "src/assets/images/season7-furia.png" },
      { title: "Intel Extreme Masters Rio 2024", desc: "3º-4º Lugar", img: "src/assets/images/ExtremeMasters-furia.png" },
    ];
  
    const [activeIndex, setActiveIndex] = React.useState(0);
  
    const handleDotClick = (index) => {
      setActiveIndex(index);
    };

  
    return (
        <section id="premiacoes" className="py-16 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-black">Nossas Premiações</h2>
            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-[448px] h-[450px] flex flex-col justify-between">
                <div>
                  <img
                    src={premiacoes[activeIndex].img}
                    alt={premiacoes[activeIndex].title}
                    className="w-64 h-64 mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-black mb-2">{premiacoes[activeIndex].title}</h3>
                  <p className="text-gray-600 mb-4">{premiacoes[activeIndex].desc}</p>
                </div>
                <div className="flex justify-center space-x-2">
                  {premiacoes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === activeIndex ? 'bg-black' : 'bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };
  
    const ChatBot = () => {
      const [message, setMessage] = React.useState("");
      const [chat, setChat] = React.useState([]);
      const [isLoading, setIsLoading] = React.useState(false);

      const handleSend = async () => {
        if (message.trim()) {
          setChat([...chat, { user: "Você", text: message }]);
          setIsLoading(true);

          try {
            const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
              method: 'POST',
              headers: {
                'Authorization': 'Bearer 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',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                model: 'mistralai/mistral-7b-instruct:free',
                messages: [
                  { role: 'system', content: 'Você é um assistente de IA especialista na FURIA e-sports, amigável e conhecedor do time. Que responde apenas sobre perguntas relacionadas aos times.' },
                  { role: 'user', content: message },
                ],
                max_tokens: 150,
                temperature: 0.7,
              }),
            });

             const data = await response.json();
             const aiResponse = data.choices[0].message.content;
             setChat(prev => [...prev, { user: "Bot", text: aiResponse }]);
           } catch (error) {
             console.error('Erro ao chamar a API:', error);
             setChat(prev => [...prev, { user: "Bot", text: "Desculpe, houve um erro. Tente novamente!" }]);
           } finally {
             setIsLoading(false);
             setMessage("");
           }
         }
       };

      const handleKeyDown = (event) => {
        if (event.key === "Enter" && !isLoading) {
          handleSend();
        }
      };
  
    return (
      <section id="chat" className="py-16 chat-background">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto chat-box p-4 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Converse com a gente!</h2>
            <div className="h-64 overflow-y-auto mb-4 p-2 bg-white rounded">
              {chat.map((msg, index) => (
                <div key={index} className={`mb-2 ${msg.user === "Você" ? "text-right" : "text-left"}`}>
                  <span className="font-semibold">{msg.user}: </span>
                  <span>{msg.text}</span>
                </div>
              ))}
              {isLoading && (
                <div className="text-center text-gray-500">Carregando...</div>
              )}
            </div>
            <div className="flex">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua mensagem..."
                className="flex-1 p-2 rounded-l-lg border border-gray-300"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                className={`bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isLoading}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  const Footer = () => {
    return (
      <footer id="footer" className="bg-stone-800 text-white py-6">
        <div className="container mx-auto text-center">
          <h3 className="text-lg font-semibold mb-4">Siga-nos nas Redes Sociais</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://x.com/FURIA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/furiagg/?hl=pt-br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/furiagg/?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  const App = () => {
    return (
      <div>
        <NavBar />
        <main className="pt-16">
          <JogadoresCarousel />
          <PremiacoesCarousel />
          <ChatBot />
        </main>
        <Footer />
      </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
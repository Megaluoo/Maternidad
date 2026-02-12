import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Sparkles,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const botResponses: Record<string, string> = {
  hola: "¡Hola! 👋 Bienvenido a Maternidad La Floresta. ¿En qué puedo ayudarte hoy?",
  servicios:
    "Ofrecemos: Control Prenatal, Parto Humanizado, Cesárea, Pediatría, Ginecología, Neonatología, Ecografías 4D/5D y mucho más. ¿Te gustaría información específica?",
  precio: "Los precios varían según el servicio. Te invito a solicitar un presupuesto personalizado haciendo clic en 'Agendar Cita' o visitando nuestra sección de presupuestos.",
  horario:
    "Estamos abiertos de Lunes a Viernes de 8:00 AM a 8:00 PM. Nuestro servicio de emergencias está disponible 24/7.",
  emergencia:
    "Para emergencias, llama inmediatamente al +58 212-123-4567. Estamos disponibles 24/7 para atenderte.",
  ubicacion:
    "Nos encontramos en Av. Principal La Floresta, Caracas, Venezuela. ¿Necesitas indicaciones?",
  cita: "Para agendar una cita, puedes llamarnos al +58 212-123-4567 o hacer clic en el botón 'Agendar Cita' en el menú superior.",
  contacto:
    "Puedes contactarnos al +58 212-123-4567 o escribirnos a info@maternidadlafloresta.com",
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "¡Hola! Soy tu asistente virtual de Maternidad La Floresta. ¿En qué puedo ayudarte hoy?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const lowerInput = inputValue.toLowerCase();
      let botResponse =
        "Gracias por tu mensaje. Para ayudarte mejor, puedes preguntarme sobre: servicios, precios, horarios, ubicación, citas o emergencias.";

      for (const [key, value] of Object.entries(botResponses)) {
        if (lowerInput.includes(key)) {
          botResponse = value;
          break;
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="relative bg-gradient-to-br from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-2xl shadow-pink-500/50 hover:shadow-pink-500/70 transition-shadow"
            >
              <MessageCircle className="w-7 h-7" />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full -z-10"
              />
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold animate-pulse">
                1
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-pink-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Asistente Virtual</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                    <span className="text-xs text-white/90">En línea</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-pink-50/30 to-purple-50/30"
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${
                      message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        message.sender === "user"
                          ? "bg-gradient-to-br from-pink-400 to-purple-500"
                          : "bg-white border border-gray-200"
                      }`}
                    >
                      {message.sender === "user" ? (
                        <User className="w-5 h-5 text-white" />
                      ) : (
                        <Bot className="w-5 h-5 text-purple-600" />
                      )}
                    </div>
                    <div>
                      <div
                        className={`px-4 py-2.5 rounded-2xl ${
                          message.sender === "user"
                            ? "bg-gradient-to-br from-pink-500 to-purple-600 text-white"
                            : "bg-white border border-gray-200 text-gray-800"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                      </div>
                      <p className="text-xs text-gray-400 mt-1 px-2">
                        {message.timestamp.toLocaleTimeString("es", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start space-x-2"
                >
                  <div className="p-2 rounded-lg bg-white border border-gray-200">
                    <Bot className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl">
                    <div className="flex space-x-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                        className="w-2 h-2 bg-purple-500 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-pink-500 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Navigation,
  User,
  MessageSquare,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      lines: ["Av. Principal La Floresta", "Caracas, Venezuela", "Zona Postal 1060"],
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Phone,
      title: "Teléfonos",
      lines: ["+58 212-123-4567", "+58 414-987-6543", "Emergencias 24/7"],
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: Mail,
      title: "Email",
      lines: [
        "info@maternidadlafloresta.com",
        "emergencias@maternidadlafloresta.com",
        "citas@maternidadlafloresta.com",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Clock,
      title: "Horarios",
      lines: ["Lun - Vie: 8:00 AM - 8:00 PM", "Sábados: 9:00 AM - 2:00 PM", "Emergencias 24/7"],
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("¡Mensaje enviado con éxito!", {
        description: "Te responderemos lo antes posible.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 2000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCA0NGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-3xl">
                <MessageCircle className="w-16 h-16 text-white" />
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contáctanos</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Estamos aquí para responder todas tus preguntas y acompañarte en tu
              camino hacia la maternidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all h-full bg-white">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`bg-gradient-to-br ${info.gradient} w-14 h-14 rounded-2xl flex items-center justify-center mb-4`}
                  >
                    <info.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{info.title}</h3>
                  <div className="space-y-2">
                    {info.lines.map((line, i) => (
                      <p key={i} className="text-gray-600 text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 md:p-10 border-0 shadow-2xl bg-white">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Envíanos un Mensaje
                  </h2>
                  <p className="text-gray-600">
                    Completa el formulario y te responderemos lo antes posible
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <Label htmlFor="name" className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-purple-600" />
                      <span>Nombre Completo *</span>
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Tu nombre completo"
                      required
                      className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="email" className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-purple-600" />
                      <span>Correo Electrónico *</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="tu@email.com"
                      required
                      className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="phone" className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-purple-600" />
                      <span>Teléfono</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+58 414-123-4567"
                      className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="message" className="flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4 text-purple-600" />
                      <span>Mensaje *</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      rows={5}
                      required
                      className="border-gray-300 focus:border-pink-500 focus:ring-pink-500 resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg shadow-pink-500/30 py-6 text-lg group"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Clock className="w-5 h-5 mr-2" />
                          </motion.div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Enviar Mensaje
                          <motion.span
                            className="ml-2"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-center text-sm text-gray-500">
                    * Campos obligatorios
                  </p>
                </form>
              </Card>
            </motion.div>

            {/* Map and Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map */}
              <Card className="border-0 shadow-2xl overflow-hidden h-[400px] bg-white">
                <div className="relative h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.8!2d-66.8793!3d10.4961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI5JzQ2LjAiTiA2NsKwNTInNDUuNSJX!5e0!3m2!1sen!2sve!4v1234567890"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-pink-600" />
                      <span className="font-medium text-gray-800">La Floresta, Caracas</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href="tel:+582121234567"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-pink-50 to-purple-50 cursor-pointer">
                    <Phone className="w-8 h-8 text-purple-600 mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-gray-800 mb-1">Llamar Ahora</h3>
                    <p className="text-sm text-gray-600">Línea directa</p>
                  </Card>
                </motion.a>

                <motion.a
                  href="https://wa.me/584149876543"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-green-50 to-emerald-50 cursor-pointer">
                    <MessageCircle className="w-8 h-8 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-gray-800 mb-1">WhatsApp</h3>
                    <p className="text-sm text-gray-600">Chat directo</p>
                  </Card>
                </motion.a>

                <motion.a
                  href="mailto:info@maternidadlafloresta.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-blue-50 to-cyan-50 cursor-pointer">
                    <Mail className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                    <p className="text-sm text-gray-600">Escríbenos</p>
                  </Card>
                </motion.a>

                <motion.a
                  href="https://www.google.com/maps/dir/?api=1&destination=10.4961,-66.8793"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-orange-50 to-red-50 cursor-pointer">
                    <Navigation className="w-8 h-8 text-orange-600 mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-gray-800 mb-1">Cómo Llegar</h3>
                    <p className="text-sm text-gray-600">Ver ruta</p>
                  </Card>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="inline-block mb-4"
            >
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                <Phone className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Tienes una Emergencia?</h2>
            <p className="text-xl mb-6 text-white/90">
              Nuestro equipo está disponible 24/7 para atenderte
            </p>
            <motion.a
              href="tel:+582121234567"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 px-10 py-6 text-xl font-bold shadow-2xl"
              >
                <Phone className="w-6 h-6 mr-2" />
                +58 212-123-4567
              </Button>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

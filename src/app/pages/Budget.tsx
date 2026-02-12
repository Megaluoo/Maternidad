import { useState } from "react";
import { motion } from "motion/react";
import {
  Calendar,
  User,
  Mail,
  Phone,
  MessageSquare,
  Baby,
  CheckCircle2,
  Clock,
  FileText,
  Send,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Card } from "../components/ui/card";
import { toast } from "sonner";

export function Budget() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Control Prenatal",
    "Parto Humanizado",
    "Cesárea",
    "Pediatría",
    "Ginecología",
    "Neonatología",
    "Ecografía 4D/5D",
    "Laboratorio Clínico",
    "Otro",
  ];

  const steps = [
    {
      icon: FileText,
      title: "Completa el Formulario",
      description: "Cuéntanos qué servicio necesitas",
    },
    {
      icon: Clock,
      title: "Revisión en 24h",
      description: "Evaluamos tu solicitud",
    },
    {
      icon: CheckCircle2,
      title: "Recibe tu Presupuesto",
      description: "Te contactamos con toda la información",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("¡Solicitud enviada con éxito!", {
        description: "Te contactaremos en las próximas 24 horas.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
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
                <Calendar className="w-16 h-16 text-white" />
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Solicita tu Presupuesto
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Completa el formulario y te contactaremos en menos de 24 horas con
              toda la información personalizada para ti.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <Card className="p-8 border-0 shadow-lg text-center h-full bg-white hover:shadow-xl transition-shadow">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-pink-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="absolute -top-4 -right-4 bg-gradient-to-br from-pink-500 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <svg
                        className="w-8 h-8 text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 md:p-12 border-0 shadow-2xl bg-white">
                <div className="text-center mb-10">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="inline-block mb-4"
                  >
                    <Baby className="w-12 h-12 text-purple-600" />
                  </motion.div>
                  <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Formulario de Solicitud
                  </h2>
                  <p className="text-gray-600">
                    Completa todos los campos para recibir tu presupuesto
                    personalizado
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
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
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="phone" className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-purple-600" />
                        <span>Teléfono *</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+58 414-123-4567"
                        required
                        className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="date" className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-purple-600" />
                        <span>Fecha Preferida *</span>
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        required
                        className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="service" className="flex items-center space-x-2">
                      <Baby className="w-4 h-4 text-purple-600" />
                      <span>Servicio de Interés *</span>
                    </Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => handleChange("service", value)}
                      required
                    >
                      <SelectTrigger className="border-gray-300 focus:border-pink-500 focus:ring-pink-500">
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="message" className="flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4 text-purple-600" />
                      <span>Mensaje Adicional</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Cuéntanos más sobre tus necesidades..."
                      rows={5}
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
                          Enviar Solicitud
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
                    * Campos obligatorios. Tus datos están protegidos y no serán
                    compartidos.
                  </p>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                ¿Prefieres Contactarnos Directamente?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl"
                >
                  <Phone className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Llámanos</h3>
                  <p className="text-gray-600 mb-2">+58 212-123-4567</p>
                  <p className="text-gray-600">+58 414-987-6543</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-50 to-pink-50 p-8 rounded-2xl"
                >
                  <Mail className="w-10 h-10 text-pink-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Escríbenos</h3>
                  <p className="text-gray-600">info@maternidadlafloresta.com</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

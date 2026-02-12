import { motion } from "motion/react";
import {
  Baby,
  Heart,
  Activity,
  Stethoscope,
  HeartPulse,
  Microscope,
  Syringe,
  Shield,
  UserCheck,
  Clock,
  Award,
  CheckCircle2,
} from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const mainServices = [
    {
      icon: Baby,
      title: "Control Prenatal",
      description:
        "Seguimiento médico integral durante toda tu gestación con ecografías de alta definición, monitoreo fetal y atención personalizada.",
      features: [
        "Ecografías 4D/5D",
        "Monitoreo fetal",
        "Consultas especializadas",
        "Plan nutricional personalizado",
      ],
      image: "https://images.unsplash.com/photo-1579559798539-8386fd9bedc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRyYXNvdW5kJTIwcHJlZ25hbmN5JTIwc2NhbnxlbnwxfHx8fDE3NzA5MTI5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Heart,
      title: "Parto Humanizado",
      description:
        "Experiencia de parto natural y respetuosa, donde tú y tu familia son los protagonistas en un ambiente cálido y acogedor.",
      features: [
        "Acompañamiento continuo",
        "Técnicas de relajación",
        "Libertad de movimiento",
        "Contacto piel a piel inmediato",
      ],
      image: "https://images.unsplash.com/photo-1588495644868-1416d25d8b33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdib3JuJTIwYmFieSUyMG1vdGhlciUyMHNtaWxpbmd8ZW58MXx8fHwxNzcwOTEyOTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: Activity,
      title: "Cesárea",
      description:
        "Procedimiento quirúrgico seguro con tecnología avanzada y equipo especializado para garantizar tu bienestar y el de tu bebé.",
      features: [
        "Tecnología de punta",
        "Anestesia especializada",
        "Recuperación asistida",
        "Seguimiento post-operatorio",
      ],
      image: "https://images.unsplash.com/photo-1707303902323-6fb2aa97d269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwZXF1aXBtZW50JTIwaG9zcGl0YWx8ZW58MXx8fHwxNzcwODA5MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Stethoscope,
      title: "Pediatría",
      description:
        "Atención médica especializada para el crecimiento y desarrollo saludable de tu bebé desde sus primeros días de vida.",
      features: [
        "Control de crecimiento",
        "Vacunación completa",
        "Asesoría en lactancia",
        "Detección temprana",
      ],
      image: "https://images.unsplash.com/photo-1632053005736-6bd9cfc4daf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwZWRpYXRyaWNpYW4lMjBiYWJ5fGVufDF8fHx8MTc3MDkxMjk0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const additionalServices = [
    {
      icon: HeartPulse,
      title: "Ginecología",
      description: "Atención integral de la salud femenina",
    },
    {
      icon: Microscope,
      title: "Laboratorio Clínico",
      description: "Análisis y diagnósticos especializados",
    },
    {
      icon: Syringe,
      title: "Neonatología",
      description: "Cuidados intensivos para recién nacidos",
    },
    {
      icon: Shield,
      title: "Emergencias 24/7",
      description: "Atención de urgencias disponible siempre",
    },
  ];

  const benefits = [
    {
      icon: UserCheck,
      title: "Equipo Especializado",
      description: "Médicos certificados con amplia experiencia",
    },
    {
      icon: Clock,
      title: "Atención Inmediata",
      description: "Sin tiempos de espera prolongados",
    },
    {
      icon: Award,
      title: "Certificación Internacional",
      description: "Estándares de calidad certificados",
    },
    {
      icon: Heart,
      title: "Trato Humanizado",
      description: "Atención personalizada y cálida",
    },
  ];

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
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Nuestros Servicios
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/90 leading-relaxed"
            >
              Atención médica integral con tecnología de punta y el mejor equipo
              especializado para cuidar de ti y tu bebé en cada etapa.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`}
                    />
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg"
                    >
                      <service.icon className="w-10 h-10 text-purple-600" />
                    </motion.div>
                  </motion.div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
                      Servicio Especializado
                    </span>
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                      {service.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-1 rounded-lg">
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg"
                      asChild
                    >
                      <Link to="/presupuesto">Solicitar Información</Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Servicios Adicionales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cobertura completa para todas tus necesidades de salud
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all h-full bg-white">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-pink-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-center mb-3 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Ventajas de Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Compromiso con la excelencia en cada detalle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-pink-100 to-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <benefit.icon className="w-10 h-10 text-purple-600" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Necesitas Más Información?
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Nuestro equipo está listo para atenderte y resolver todas tus dudas
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 text-lg"
                asChild
              >
                <Link to="/presupuesto">Solicitar Presupuesto</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-10 py-6 text-lg"
                asChild
              >
                <Link to="/contacto">Contactar</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

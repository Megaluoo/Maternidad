import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Baby,
  Heart,
  Shield,
  Award,
  Users,
  Clock,
  ArrowRight,
  CheckCircle2,
  Star,
  Sparkles,
  Calendar,
  Phone,
  Activity,
  Stethoscope,
  HeartPulse,
  UserCheck,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const services = [
    {
      icon: Baby,
      title: "Control Prenatal",
      description: "Seguimiento integral durante toda tu gestación",
      gradient: "from-pink-500 to-rose-500",
      image: "https://images.unsplash.com/photo-1579559798539-8386fd9bedc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRyYXNvdW5kJTIwcHJlZ25hbmN5JTIwc2NhbnxlbnwxfHx8fDE3NzA5MTI5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Heart,
      title: "Parto Humanizado",
      description: "Experiencia natural y respetuosa para tu familia",
      gradient: "from-purple-500 to-indigo-500",
      image: "https://images.unsplash.com/photo-1588495644868-1416d25d8b33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdib3JuJTIwYmFieSUyMG1vdGhlciUyMHNtaWxpbmd8ZW58MXx8fHwxNzcwOTEyOTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Activity,
      title: "Cesárea",
      description: "Procedimiento seguro con tecnología avanzada",
      gradient: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1707303902323-6fb2aa97d269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwZXF1aXBtZW50JTIwaG9zcGl0YWx8ZW58MXx8fHwxNzcwODA5MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Stethoscope,
      title: "Pediatría",
      description: "Cuidado especializado para tu bebé",
      gradient: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1632053005736-6bd9cfc4daf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwZWRpYXRyaWNpYW4lMjBiYWJ5fGVufDF8fHx8MTc3MDkxMjk0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const stats = [
    { icon: Users, value: "15,000+", label: "Familias Felices" },
    { icon: Award, value: "25+", label: "Años de Experiencia" },
    { icon: Shield, value: "100%", label: "Certificación" },
    { icon: Clock, value: "24/7", label: "Emergencias" },
  ];

  const features = [
    { icon: HeartPulse, title: "Tecnología de Punta", description: "Equipos médicos de última generación" },
    { icon: UserCheck, title: "Equipo Especializado", description: "Médicos certificados y experimentados" },
    { icon: Shield, title: "Seguridad Total", description: "Protocolos internacionales de calidad" },
    { icon: Heart, title: "Atención Personalizada", description: "Cuidado individualizado para cada familia" },
  ];

  const testimonials = [
    {
      name: "María González",
      text: "La atención fue excepcional. El equipo me hizo sentir segura y acompañada en todo momento. ¡Gracias por hacer de este momento algo tan especial!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Carlos Ramírez",
      text: "Excelente servicio y profesionalismo. Las instalaciones son de primera y el personal es muy cálido. Totalmente recomendado.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Ana Martínez",
      text: "Mi bebé nació aquí y no pudo haber sido mejor experiencia. Desde el control prenatal hasta el parto, todo perfecto. Eternamente agradecida.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=5",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-200/30 to-pink-200/30 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
              >
                <Sparkles className="w-5 h-5 text-pink-500" />
                <span className="text-sm font-medium bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Más de 25 años cuidando familias
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
                >
                  Tu momento
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                  más especial
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                En Maternidad La Floresta brindamos atención integral con amor,
                tecnología de punta y el mejor equipo médico para ti y tu bebé.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-xl shadow-pink-500/30 px-8 py-6 text-lg group"
                  asChild
                >
                  <Link to="/presupuesto">
                    <Calendar className="w-5 h-5 mr-2" />
                    Agendar Cita
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-pink-300 hover:bg-pink-50 px-8 py-6 text-lg"
                  asChild
                >
                  <a href="tel:+123456789">
                    <Phone className="w-5 h-5 mr-2" />
                    Llamar Ahora
                  </a>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center space-x-6 pt-4"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                    >
                      <ImageWithFallback
                        src={`https://i.pravatar.cc/150?img=${i}`}
                        alt={`Cliente ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>15,000+</strong> familias satisfechas
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1548710123-e11f2e941a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMG5ld2Jvcm4lMjBob3NwaXRhbHxlbnwxfHx8fDE3NzA5MTI5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Familia feliz"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-3 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">100%</p>
                    <p className="text-sm text-gray-600">Certificado</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-pink-400 to-purple-500 p-3 rounded-xl">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">24/7</p>
                    <p className="text-sm text-gray-600">Emergencias</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCA0NGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.h3
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-4xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-pink-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
              Nuestros Servicios
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Atención Integral para Ti y Tu Bebé
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Servicios especializados con tecnología de punta y equipo médico certificado
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-xl h-full bg-white hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60 group-hover:opacity-40 transition-opacity`} />
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg"
                    >
                      <service.icon className="w-6 h-6 text-purple-600" />
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link
                      to="/servicios"
                      className="text-pink-600 hover:text-purple-600 font-medium inline-flex items-center group/link"
                    >
                      Ver más
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Compromiso con la excelencia y el cuidado de tu familia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-pink-500 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
              Testimonios
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Lo Que Dicen Nuestras Familias
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Miles de familias confían en nosotros para sus momentos más especiales
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all h-full bg-gradient-to-br from-white to-pink-50/30">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pink-200">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">Cliente Satisfecho</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-16 h-16 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ¿Lista Para Tu Momento Especial?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Agenda tu cita hoy y descubre por qué miles de familias confían en nosotros
              para los momentos más importantes de sus vidas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 shadow-2xl px-10 py-7 text-lg group"
                asChild
              >
                <Link to="/presupuesto">
                  <Calendar className="w-6 h-6 mr-2" />
                  Solicitar Presupuesto
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm px-10 py-7 text-lg"
                asChild
              >
                <Link to="/contacto">
                  <Phone className="w-6 h-6 mr-2" />
                  Contactar Ahora
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

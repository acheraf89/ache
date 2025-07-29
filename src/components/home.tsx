import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Code, Palette, Rocket, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: "Développement Web",
      description: "Applications web modernes avec React, TypeScript et les dernières technologies"
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-500" />,
      title: "Design UI/UX",
      description: "Interfaces utilisateur intuitives et expériences utilisateur optimisées"
    },
    {
      icon: <Rocket className="h-8 w-8 text-green-500" />,
      title: "Performance",
      description: "Sites rapides et optimisés pour tous les appareils et navigateurs"
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "Sécurité",
      description: "Solutions sécurisées avec les meilleures pratiques de l'industrie"
    }
  ];

  const stats = [
    { number: "100+", label: "Projets réalisés" },
    { number: "50+", label: "Clients satisfaits" },
    { number: "5+", label: "Années d'expérience" },
    { number: "24/7", label: "Support technique" }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "CEO, TechStart",
      content: "Une équipe exceptionnelle qui a transformé notre vision en réalité. Le résultat dépasse nos attentes.",
      rating: 5
    },
    {
      name: "Pierre Martin",
      role: "Directeur Marketing, InnovCorp",
      content: "Professionnalisme et expertise technique au rendez-vous. Je recommande vivement leurs services.",
      rating: 5
    },
    {
      name: "Sophie Laurent",
      role: "Fondatrice, DigitalFlow",
      content: "Un partenaire de confiance pour tous nos projets digitaux. Qualité et délais respectés.",
      rating: 5
    }
  ];

  const benefits = [
    "Consultation gratuite",
    "Devis personnalisé",
    "Support 24/7",
    "Garantie satisfaction",
    "Maintenance incluse",
    "Formation utilisateur"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 px-4 py-2">
              <Zap className="h-4 w-4 mr-2" />
              Nouveau : Solutions IA intégrées
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Transformez votre
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> vision digitale</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Nous créons des solutions web innovantes qui propulsent votre entreprise vers le succès. 
              De l'idée à la réalisation, nous vous accompagnons à chaque étape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 text-lg">
                Démarrer un projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg" asChild>
                <Link to="/about">Découvrir nos services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Expertises</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour répondre à tous vos besoins digitaux
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pourquoi nous choisir ?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Nous nous engageons à fournir des solutions de qualité supérieure 
                avec un service client exceptionnel.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <TrendingUp className="h-12 w-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Résultats garantis</h3>
                <p className="text-blue-100 mb-6">
                  Nos clients voient en moyenne une augmentation de 150% de leur 
                  engagement utilisateur après nos interventions.
                </p>
                <Button variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                  Voir nos cas d'étude
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent nos clients</h2>
            <p className="text-xl text-gray-600">
              La satisfaction client est notre priorité absolue
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer votre présence digitale ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez 
            comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg">
              Consultation gratuite
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
              Voir nos tarifs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
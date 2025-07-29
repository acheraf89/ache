import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Heart, ArrowRight, CheckCircle } from "lucide-react";

export function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet, en utilisant les meilleures pratiques et technologies."
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Collaboration",
      description: "Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins uniques."
    },
    {
      icon: <Award className="h-8 w-8 text-purple-500" />,
      title: "Innovation",
      description: "Nous restons à la pointe de la technologie pour offrir des solutions innovantes."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Passion",
      description: "Notre passion pour le développement web se reflète dans la qualité de notre travail."
    }
  ];

  const team = [
    {
      name: "Alex Dupont",
      role: "Fondateur & Développeur Full-Stack",
      bio: "10+ années d'expérience en développement web, spécialisé en React et Node.js",
      skills: ["React", "TypeScript", "Node.js", "AWS"]
    },
    {
      name: "Sarah Martin",
      role: "Designer UI/UX",
      bio: "Experte en design d'interface et expérience utilisateur, passionnée par l'accessibilité",
      skills: ["Figma", "Design System", "Accessibilité", "Prototypage"]
    },
    {
      name: "Thomas Leroy",
      role: "Développeur Backend",
      bio: "Spécialiste des architectures scalables et des bases de données performantes",
      skills: ["Python", "PostgreSQL", "Docker", "Microservices"]
    }
  ];

  const milestones = [
    { year: "2019", title: "Création de l'entreprise", description: "Lancement avec une vision claire : démocratiser le web" },
    { year: "2020", title: "Premier grand projet", description: "Développement d'une plateforme e-commerce pour 50k+ utilisateurs" },
    { year: "2021", title: "Expansion de l'équipe", description: "Recrutement de talents spécialisés en design et backend" },
    { year: "2022", title: "Certification qualité", description: "Obtention de certifications en sécurité et performance web" },
    { year: "2023", title: "100+ projets réalisés", description: "Franchissement du cap des 100 projets avec 98% de satisfaction client" },
    { year: "2024", title: "Innovation IA", description: "Intégration de solutions d'intelligence artificielle dans nos services" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              À propos de nous
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Une équipe passionnée au service de
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> votre réussite</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Depuis 2019, nous accompagnons les entreprises dans leur transformation digitale 
              en créant des solutions web sur mesure, performantes et évolutives.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nous croyons que chaque entreprise mérite une présence digitale exceptionnelle. 
                Notre mission est de transformer vos idées en solutions web innovantes qui 
                génèrent de la valeur pour votre business et vos utilisateurs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Solutions sur mesure</h4>
                    <p className="text-gray-600">Chaque projet est unique et mérite une approche personnalisée</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Technologies modernes</h4>
                    <p className="text-gray-600">Nous utilisons les dernières technologies pour garantir performance et évolutivité</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Accompagnement complet</h4>
                    <p className="text-gray-600">De la conception au déploiement, nous vous accompagnons à chaque étape</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
                <p className="text-blue-100 mb-6">
                  Devenir le partenaire de référence pour la transformation digitale des entreprises, 
                  en alliant expertise technique et compréhension business.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm text-blue-200">Satisfaction client</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-sm text-blue-200">Années d'expérience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-white rounded-full w-fit shadow-sm">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Notre Équipe</h2>
            <p className="text-xl text-gray-600">
              Des experts passionnés à votre service
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="h-24 w-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Notre Histoire</h2>
            <p className="text-xl text-gray-600">
              Les étapes clés de notre développement
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="outline">{milestone.year}</Badge>
                        <h3 className="text-lg font-semibold">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Travaillons ensemble sur votre prochain projet
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Parlons-en ! Nous serions ravis de vous accompagner 
            dans la réalisation de vos ambitions digitales.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg">
            Contactez-nous
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
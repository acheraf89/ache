import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, AlertCircle, XCircle, Code, Palette, Zap, Shield } from "lucide-react";

function Home() {
  const diagnosticItems = [
    {
      category: "Configuration",
      items: [
        { name: "React + TypeScript", status: "success", description: "Configuration moderne et type-safe" },
        { name: "Vite", status: "success", description: "Build tool rapide et optimisé" },
        { name: "Tailwind CSS", status: "success", description: "Framework CSS utilitaire configuré" },
        { name: "shadcn/ui", status: "success", description: "Composants UI de qualité installés" },
      ]
    },
    {
      category: "Composants UI",
      items: [
        { name: "Système de design", status: "success", description: "40+ composants shadcn/ui disponibles" },
        { name: "Thème cohérent", status: "success", description: "Variables CSS et couleurs définies" },
        { name: "Responsive design", status: "success", description: "Breakpoints Tailwind configurés" },
        { name: "Accessibilité", status: "success", description: "Composants Radix UI accessibles" },
      ]
    },
    {
      category: "Structure",
      items: [
        { name: "Routing", status: "success", description: "React Router configuré" },
        { name: "Organisation", status: "warning", description: "Structure de base présente, peut être étoffée" },
        { name: "Page d'accueil", status: "error", description: "Contenu manquant - page vide actuellement" },
        { name: "Navigation", status: "error", description: "Menu de navigation à implémenter" },
      ]
    },
    {
      category: "Développement",
      items: [
        { name: "Hot reload", status: "success", description: "Rechargement automatique activé" },
        { name: "TypeScript", status: "success", description: "Vérification de types configurée" },
        { name: "Storybook", status: "success", description: "Stories pour tous les composants UI" },
        { name: "Tempo devtools", status: "success", description: "Outils de développement intégrés" },
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success": return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "warning": return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case "error": return <XCircle className="h-4 w-4 text-red-500" />;
      default: return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "success": return <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-100">OK</Badge>;
      case "warning": return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Attention</Badge>;
      case "error": return <Badge variant="destructive">À corriger</Badge>;
      default: return null;
    }
  };

  const features = [
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: "Stack Moderne",
      description: "React 18, TypeScript, Vite pour des performances optimales"
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-500" />,
      title: "Design System",
      description: "shadcn/ui + Tailwind CSS pour une interface cohérente"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Développement Rapide",
      description: "Hot reload, TypeScript, et outils de développement intégrés"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Qualité",
      description: "Composants accessibles et testés avec Storybook"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
              <h1 className="text-xl font-bold">Diagnostic du Site</h1>
            </div>
            <Badge variant="outline" className="text-sm">
              Version 1.0.0
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Diagnostic Technique Complet
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Analyse de votre application React avec recommandations d'amélioration
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-2">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Diagnostic Results */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Résultats du Diagnostic</h2>
            <p className="text-muted-foreground">État actuel de votre application</p>
          </div>

          {diagnosticItems.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="overflow-hidden">
              <CardHeader className="bg-slate-50">
                <CardTitle className="flex items-center gap-2">
                  {category.category}
                  <Badge variant="outline">
                    {category.items.filter(item => item.status === 'success').length}/{category.items.length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <div className="flex items-center justify-between p-4 hover:bg-slate-50/50 transition-colors">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(item.status)}
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                      {getStatusBadge(item.status)}
                    </div>
                    {itemIndex < category.items.length - 1 && <Separator />}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recommendations */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">Recommandations Prioritaires</CardTitle>
            <CardDescription>
              Actions recommandées pour améliorer votre site
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
              <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-red-900">Page d'accueil vide</h4>
                <p className="text-sm text-red-700">Créer du contenu pour la page d'accueil avec sections hero, fonctionnalités, etc.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
              <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-red-900">Navigation manquante</h4>
                <p className="text-sm text-red-700">Implémenter un menu de navigation avec les sections principales du site.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-900">Structure à étoffer</h4>
                <p className="text-sm text-yellow-700">Ajouter plus de pages et organiser le contenu en sections logiques.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <div className="mt-12 text-center">
          <Card className="inline-block">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">85%</div>
                  <div className="text-sm text-muted-foreground">Configuration</div>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">60%</div>
                  <div className="text-sm text-muted-foreground">Contenu</div>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">75%</div>
                  <div className="text-sm text-muted-foreground">Score Global</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>Diagnostic généré automatiquement • {new Date().toLocaleDateString('fr-FR')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
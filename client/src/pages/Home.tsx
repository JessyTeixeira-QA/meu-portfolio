import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Code2, BookOpen, Award, Moon, Sun, Phone } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useState, useEffect } from "react";

interface Project {
  name: string;
  description: string;
  url: string;
  language?: string;
}

interface Formation {
  title: string;
  platform: string;
  hours: string;
  date: string;
}

interface Skill {
  category: string;
  items: string[];
  color: string;
}

const projects: Project[] = [
  { name: "allbooks", description: "Aplicação de gerenciamento de livros", url: "https://github.com/JessyTeixeira-QA/allbooks", language: "JavaScript" },
  { name: "api-alurabooks", description: "API para gerenciamento de livros", url: "https://github.com/JessyTeixeira-QA/api-alurabooks", language: "Node.js" },
  { name: "Carrinho-de-Compras", description: "Sistema de carrinho de compras", url: "https://github.com/JessyTeixeira-QA/Carrinho-de-Compras", language: "JavaScript" },
  { name: "Amigo-Secreto", description: "Aplicação de amigo secreto", url: "https://github.com/JessyTeixeira-QA/Amigo-Secreto", language: "JavaScript" },
  { name: "Jogo-do-numero-secreto", description: "Jogo interativo de adivinhação", url: "https://github.com/JessyTeixeira-QA/Jogo-do-numero-secreto", language: "JavaScript" },
  { name: "calculadora", description: "Calculadora web", url: "https://github.com/JessyTeixeira-QA/calculadora", language: "JavaScript" },
  { name: "Alugames", description: "Plataforma de aluguel de jogos", url: "https://github.com/JessyTeixeira-QA/Alugames", language: "JavaScript" },
];

const formations: Formation[] = [
  { title: "Formação: A partir do zero: iniciante em programação", platform: "Alura", hours: "5 cursos; 31 horas", date: "Outubro 2025" },
  { title: "Formação: Carreira QA: processos e automação de testes", platform: "Alura", hours: "6 cursos; 52 horas", date: "Outubro 2025" },
  { title: "Testes Automáticos + Curso Completo de Teste de Software", platform: "Udemy", hours: "1 curso; 5 horas", date: "Outubro 2025" },
  { title: "Carreira QA: avançando em Cypress e implementando integração contínua", platform: "Alura", hours: "7 cursos; 64 horas", date: "Início em Outubro 2025" },
  { title: "Engenharia de IA", platform: "Alura", hours: "Em progresso", date: "Outubro 2025" },
  { title: "Excel e Power BI Avançados", platform: "Alura", hours: "Em progresso", date: "Outubro 2025" },
];

const skills: Skill[] = [
  {
    category: "Testes & QA",
    items: ["Testes Manuais", "Testes Automáticos", "Cypress", "Testes de Software", "Casos de Teste"],
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
  },
  {
    category: "Ferramentas & Tecnologias",
    items: ["Cypress", "Postman", "Git", "GitHub", "Excel", "Power BI"],
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
  },
  {
    category: "Conhecimentos Técnicos",
    items: ["JavaScript", "HTML", "CSS", "Automação de Testes", "Testes API"],
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
  },
  {
    category: "Soft Skills",
    items: ["Atenção aos Detalhes", "Comunicação", "Trabalho em Equipe", "Resolução de Problemas", "Pensamento Crítico"],
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
  },
];

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background">
      {/* Header/Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur shadow-md" : "bg-transparent"}`}>
        <div className="container flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <img src="/foto-perfil.jpg" alt="Jéssica Ferreira Teixeira" className="w-10 h-10 rounded-full object-cover border-2 border-primary" />
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Jéssica Ferreira Teixeira</span>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projetos</a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors">Habilidades</a>
            <a href="#formations" className="text-foreground hover:text-primary transition-colors">Formações</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contato</a>
            <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-muted transition-colors">
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>
          <button onClick={toggleTheme} className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors">
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-32">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img src="/foto-perfil.jpg" alt="Jéssica Ferreira Teixeira" className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg" />
          </div>
          
          <div className="mb-8 inline-block">
            <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 text-sm">
              Engenheira de QA em Formação
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Bem-vindo ao meu Portfólio
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sou uma profissional apaixonada por garantia de qualidade e testes de software. Estou em formação para me tornar uma Engenheira de QA, com foco em testes manuais, automação de testes e processos de qualidade. Comprometida com a excelência e em constante aprendizado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <a href="#projects" className="flex items-center gap-2">
                Ver Meus Projetos
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="#contact" className="flex items-center gap-2">
                Entre em Contato
                <Mail className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">9+</div>
              <div className="text-sm text-muted-foreground">Projetos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary">6+</div>
              <div className="text-sm text-muted-foreground">Formações</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">150+</div>
              <div className="text-sm text-muted-foreground">Horas de Cursos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meus Projetos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Confira alguns dos projetos que desenvolvi durante minha jornada de aprendizado em testes de software e garantia de qualidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.name} className="hover:shadow-lg transition-shadow border-border/50 hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </div>
                    <Github className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    {project.language && (
                      <Badge variant="secondary" className="w-fit">
                        {project.language}
                      </Badge>
                    )}
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full" size="sm">
                        Ver no GitHub
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Minhas Habilidades</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Competências técnicas em QA e soft skills desenvolvidas durante minha formação como Engenheira de QA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category} className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} className={skillGroup.color}>
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

      {/* Formations Section */}
      <section id="formations" className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Formações & Cursos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meu compromisso com o aprendizado contínuo e desenvolvimento profissional.
            </p>
          </div>

          <div className="space-y-4">
            {formations.map((formation, index) => (
              <Card key={index} className="border-l-4 border-l-primary border-border/50 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                        {formation.title}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        <span className="font-semibold text-foreground">{formation.platform}</span> • {formation.hours}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{formation.date}</Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos Conversar?</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Estou sempre aberta a novas oportunidades e desafios. Entre em contato comigo através dos canais abaixo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 flex-wrap">
            <a href="https://github.com/JessyTeixeira-QA" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </a>
            <a href="mailto:seu-email@example.com">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Mail className="w-5 h-5 mr-2" />
                Email
              </Button>
            </a>
            <a href="tel:+5548991750255">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Phone className="w-5 h-5 mr-2" />
                (48) 99175-0255
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4 bg-muted/50">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2025 Jéssica Ferreira Teixeira. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/JessyTeixeira-QA" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:seu-email@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

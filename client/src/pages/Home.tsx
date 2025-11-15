import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Moon,
  Sun
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { fetchGitHubRepos, GitHubRepo } from "@/services/github";

interface Project {
  name: string;
  description: string;
  url: string;
  language?: string;
  updatedAt: string;
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

const staticProjects: Project[] = [
  {
    name: "allbooks",
    description: "Aplicação de gerenciamento de livros",
    url: "https://github.com/JessyTeixeira-QA/allbooks",
    language: "JavaScript",
    updatedAt: new Date().toLocaleDateString("pt-BR")
  },
  {
    name: "api-alurabooks",
    description: "API para gerenciamento de livros",
    url: "https://github.com/JessyTeixeira-QA/api-alurabooks",
    language: "Node.js",
    updatedAt: new Date().toLocaleDateString("pt-BR")
  }
];

const formations: Formation[] = [
  {
    title: "Formação: A partir do zero: iniciante em programação",
    platform: "Alura",
    hours: "5 cursos; 31 horas",
    date: "Outubro 2025"
  },
  {
    title: "Formação: Carreira QA: processos e automação de testes",
    platform: "Alura",
    hours: "6 cursos; 52 horas",
    date: "Outubro 2025"
  },
  {
    title: "Testes Automáticos + Curso Completo de Teste de Software",
    platform: "Udemy",
    hours: "1 curso; 5 horas",
    date: "Outubro 2025"
  }
];

const skills: Skill[] = [
  {
    category: "Testes & QA",
    items: [
      "Testes Manuais",
      "Testes Automáticos",
      "Cypress",
      "Testes de Software",
      "Casos de Teste"
    ],
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
  },
  {
    category: "Ferramentas & Tecnologias",
    items: ["Cypress", "Postman", "Git", "GitHub", "Excel", "Power BI"],
    color:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
  },
  {
    category: "Conhecimentos Técnicos",
    items: ["JavaScript", "HTML", "CSS", "Automação de Testes", "Testes API"],
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
  },
  {
    category: "Soft Skills",
    items: [
      "Atenção aos Detalhes",
      "Comunicação",
      "Trabalho em Equipe",
      "Resolução de Problemas",
      "Pensamento Crítico"
    ],
    color:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
  }
];

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Efeito para header com scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Buscar repositórios
  useEffect(() => {
    const loadRepos = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const repos = await fetchGitHubRepos("JessyTeixeira-QA");

        const formatted: Project[] = repos.map((repo: GitHubRepo) => ({
          name: repo.name,
          description: repo.description || "Sem descrição",
          url: repo.html_url,
          language: repo.language || "",
          updatedAt: new Date(repo.updated_at).toLocaleDateString("pt-BR")
        }));

        setProjects(formatted);
      } catch (err) {
        console.error("Erro ao carregar repositórios:", err);
        setError(
          "Não foi possível carregar os projetos do GitHub. Exibindo projetos estáticos."
        );
        setProjects(staticProjects);
      } finally {
        setIsLoading(false);
      }
    };

    loadRepos();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background">

      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <img
              src="/foto-perfil.jpg"
              alt="Jéssica Ferreira Teixeira"
              className="w-10 h-10 rounded-full object-cover border-2 border-primary"
            />
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Jéssica Ferreira Teixeira
            </span>
          </div>

          <nav className="hidden md:flex gap-8 items-center">
            <a href="#projects" className="hover:text-primary">
              Projetos
            </a>
            <a href="#skills" className="hover:text-primary">
              Habilidades
            </a>
            <a href="#formations" className="hover:text-primary">
              Formações
            </a>
            <a href="#contact" className="hover:text-primary">
              Contato
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted"
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
          </nav>

          {/* Mobile */}
          <button
            onClick={toggleTheme}
            className="md:hidden p-2 rounded-lg hover:bg-muted"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-32">
        <div className="container max-w-4xl mx-auto text-center">

          {/* Foto */}
          <img
            src="/foto-perfil.jpg"
            alt="Jéssica Ferreira Teixeira"
            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-primary shadow-lg mb-8"
          />

          <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 text-sm mb-8">
            Engenheira de QA em Formação
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Bem-vindo ao meu Portfólio
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sou apaixonada por garantia de qualidade e testes de software.
            Atualmente em formação como Engenheira de QA, com foco em testes
            manuais, automação e processos de qualidade.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <a href="#projects" className="flex items-center gap-2">
                Ver Meus Projetos <ExternalLink className="w-4 h-4" />
              </a>
            </Button>

            <Button size="lg" variant="outline">
              <a href="#contact" className="flex items-center gap-2">
                Entre em Contato <Mail className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Cards de números */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">9+</div>
              <div className="text-lg text-muted-foreground">Projetos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">4+</div>
              <div className="text-lg text-muted-foreground">Formações</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">2+</div>
              <div className="text-lg text-muted-foreground">Anos de Experiência</div>
            </div>
          </div>

        </div>
      </section>

      {/* PROJETOS */}
      <section id="projects" className="container max-w-6xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold mb-8">Projetos</h2>

        {isLoading && <p>Carregando projetos...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>

                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    Ver no GitHub
                  </a>
                  <div className="text-sm text-muted-foreground">
                    {project.language}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="skills" className="container max-w-6xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold mb-8">Habilidades</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{skill.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, j) => (
                    <Badge key={j} className={skill.color}>
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FORMAÇÕES */}
      <section id="formations" className="container max-w-6xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold mb-8">Formações</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formations.map((formation, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{formation.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    {formation.platform}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {formation.hours}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  {formation.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contact" className="container max-w-4xl mx-auto px-4 mt-20 pb-20">
        <h2 className="text-3xl font-bold mb-8">Contato</h2>

        <div className="flex flex-col gap-4 text-lg">
          <a
            href="mailto:jessyteixeiraqa@gmail.com"
            className="flex items-center gap-2 text-primary"
          >
            <Mail className="w-5 h-5" /> jessyteixeiraqa@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/jessyteixeiraqa/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary"
          >
            <Linkedin className="w-5 h-5" /> linkedin.com/in/jessyteixeiraqa
          </a>

          <a
            href="https://github.com/JessyTeixeira-QA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary"
          >
            <Github className="w-5 h-5" /> github.com/JessyTeixeira-QA
          </a>
        </div>
      </section>
    </div>
  );
}

import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Trophy, Plus, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const Grupos = () => {
  const grupos = [
    {
      id: "1",
      nome: "Nadadores Matinais 🌅",
      membros: 24,
      desafioAtual: "100km em Janeiro",
      progresso: 67,
      minhaContribuicao: 8.5,
      topMembro: "Maria Silva"
    },
    {
      id: "2",
      nome: "Time Águas Abertas",
      membros: 18,
      desafioAtual: "5 Provas este mês",
      progresso: 40,
      minhaContribuicao: 2,
      topMembro: "João Pedro"
    },
    {
      id: "3",
      nome: "Masters Natação",
      membros: 32,
      desafioAtual: "50.000 metros coletivos",
      progresso: 85,
      minhaContribuicao: 3200,
      topMembro: "Ana Costa"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navbar />
      
      <main className="container mx-auto px-4 py-4 md:py-8 max-w-4xl">
        <div className="mb-6 md:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center gap-2 md:gap-3">
              <Users className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              Grupos e Desafios
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mt-1">Compete e se motive com amigos</p>
          </div>
          
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 w-full sm:w-auto text-sm md:text-base">
            <Plus className="mr-2 h-4 w-4" />
            Criar Grupo
          </Button>
        </div>

        <div className="space-y-4 md:space-y-6">
          {grupos.map((grupo) => (
            <Card key={grupo.id} className="hover:shadow-[var(--shadow-elevated)] transition-all">
              <CardHeader className="pb-3 md:pb-6">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-base md:text-xl mb-2">{grupo.nome}</CardTitle>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                      <Users className="h-3 w-3 md:h-4 md:w-4" />
                      <span>{grupo.membros} membros</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="gap-1 text-xs">
                    <Trophy className="h-3 w-3" />
                    Ativo
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3 md:space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs md:text-sm font-semibold flex items-center gap-1.5 md:gap-2">
                      <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                      Desafio: {grupo.desafioAtual}
                    </span>
                    <span className="text-xs md:text-sm font-bold">{grupo.progresso}%</span>
                  </div>
                  <Progress value={grupo.progresso} className="h-1.5 md:h-2" />
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4 pt-3 md:pt-4 border-t">
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground mb-1">Sua Contribuição</p>
                    <p className="font-bold text-base md:text-lg text-primary">
                      {typeof grupo.minhaContribuicao === 'number' && grupo.minhaContribuicao < 100
                        ? `${grupo.minhaContribuicao} km`
                        : grupo.minhaContribuicao}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground mb-1">Líder do Grupo</p>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-5 w-5 md:h-6 md:w-6">
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${grupo.topMembro}`} />
                        <AvatarFallback>{grupo.topMembro.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <p className="font-semibold text-xs md:text-sm">{grupo.topMembro}</p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full text-xs md:text-sm">
                  Ver Detalhes do Grupo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6 md:mt-8 border-2 border-dashed">
          <CardContent className="text-center py-8 md:py-12">
            <Users className="h-10 w-10 md:h-12 md:w-12 text-muted-foreground mx-auto mb-3 md:mb-4" />
            <h3 className="text-base md:text-lg font-semibold mb-2">Descubra Novos Grupos</h3>
            <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
              Encontre grupos na sua região ou crie desafios com seus amigos
            </p>
            <Button variant="outline" className="text-xs md:text-sm">Explorar Grupos</Button>
          </CardContent>
        </Card>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Grupos;

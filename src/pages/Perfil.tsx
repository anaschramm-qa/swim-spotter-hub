import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Waves, Trophy, Target, Calendar, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Perfil = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navbar />
      
      <main className="container mx-auto px-4 py-4 md:py-8 max-w-4xl">
        {/* Header do Perfil */}
        <Card className="mb-6 md:mb-8">
          <CardContent className="pt-4 md:pt-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start">
              <Avatar className="h-24 w-24 md:h-32 md:w-32 ring-4 ring-primary/20">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Atleta Swimmer</h1>
                <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">Nadador apaixonado 🏊‍♂️</p>
                
                <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center md:justify-start mb-3 md:mb-4">
                  <Badge variant="secondary" className="text-xs">Piscina</Badge>
                  <Badge variant="secondary" className="text-xs">Águas Abertas</Badge>
                  <Badge variant="outline" className="text-xs">Membro desde Jan 2024</Badge>
                </div>
                
                <div className="flex gap-2 justify-center md:justify-start">
                  <Button className="text-xs md:text-sm">Editar Perfil</Button>
                  <Button variant="outline" className="text-xs md:text-sm">Configurações</Button>
                </div>
              </div>

              <div className="flex gap-6 md:gap-6 text-center">
                <div>
                  <p className="text-xl md:text-2xl font-bold text-primary">42</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Amigos</p>
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-secondary">156</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Atividades</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estatísticas Gerais */}
        <div className="grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4 mb-6 md:mb-8">
          <Card className="hover:shadow-[var(--shadow-elevated)] transition-all">
            <CardContent className="pt-4 md:pt-6">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <div className="p-1.5 md:p-2 rounded-full bg-primary/10">
                  <Waves className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <span className="text-xs md:text-sm text-muted-foreground">Distância</span>
              </div>
              <p className="text-lg md:text-2xl font-bold">287.5 km</p>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-1">Este ano</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-[var(--shadow-elevated)] transition-all">
            <CardContent className="pt-4 md:pt-6">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <div className="p-1.5 md:p-2 rounded-full bg-secondary/10">
                  <Calendar className="h-4 w-4 md:h-5 md:w-5 text-secondary" />
                </div>
                <span className="text-xs md:text-sm text-muted-foreground">Tempo</span>
              </div>
              <p className="text-lg md:text-2xl font-bold">142h 30m</p>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-1">Este ano</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-[var(--shadow-elevated)] transition-all">
            <CardContent className="pt-4 md:pt-6">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <div className="p-1.5 md:p-2 rounded-full bg-accent/10">
                  <Target className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                </div>
                <span className="text-xs md:text-sm text-muted-foreground">Sequência</span>
              </div>
              <p className="text-lg md:text-2xl font-bold">12 dias</p>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-1">Atual</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-[var(--shadow-elevated)] transition-all">
            <CardContent className="pt-4 md:pt-6">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <div className="p-1.5 md:p-2 rounded-full bg-primary/10">
                  <Trophy className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <span className="text-xs md:text-sm text-muted-foreground">Recordes</span>
              </div>
              <p className="text-lg md:text-2xl font-bold">8</p>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-1">Este mês</p>
            </CardContent>
          </Card>
        </div>

        {/* Atividade Mensal */}
        <Card className="mb-6 md:mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base md:text-lg">
              <TrendingUp className="h-4 w-4 md:h-5 md:w-5" />
              Atividade Este Mês
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div>
                <p className="text-xs md:text-sm text-muted-foreground mb-1">Treinos</p>
                <p className="text-2xl md:text-3xl font-bold text-primary">24</p>
              </div>
              <div>
                <p className="text-xs md:text-sm text-muted-foreground mb-1">Distância</p>
                <p className="text-2xl md:text-3xl font-bold text-secondary">48.2 km</p>
              </div>
              <div>
                <p className="text-xs md:text-sm text-muted-foreground mb-1">Tempo</p>
                <p className="text-2xl md:text-3xl font-bold">28h 15m</p>
              </div>
              <div>
                <p className="text-xs md:text-sm text-muted-foreground mb-1">Calorias</p>
                <p className="text-2xl md:text-3xl font-bold">12,450</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conquistas Recentes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base md:text-lg">
              <Trophy className="h-4 w-4 md:h-5 md:w-5" />
              Conquistas Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-3">
              <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 text-center">
                <div className="text-3xl md:text-4xl mb-2">🏆</div>
                <p className="font-semibold text-sm md:text-base">100km Nadados</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">25/12/2024</p>
              </div>
              
              <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-secondary/10 to-accent/10 text-center">
                <div className="text-3xl md:text-4xl mb-2">🔥</div>
                <p className="font-semibold text-sm md:text-base">30 Dias Seguidos</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">20/12/2024</p>
              </div>
              
              <div className="p-3 md:p-4 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 text-center">
                <div className="text-3xl md:text-4xl mb-2">⚡</div>
                <p className="font-semibold text-sm md:text-base">Ritmo Sub 1:30</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">15/12/2024</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Perfil;

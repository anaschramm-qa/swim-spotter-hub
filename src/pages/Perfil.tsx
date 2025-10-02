import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Waves, Trophy, Target, Calendar, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Perfil = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header do Perfil */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <Avatar className="h-32 w-32 ring-4 ring-primary/20">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">Atleta Swimmer</h1>
                <p className="text-muted-foreground mb-4">Nadador apaixonado 🏊‍♂️</p>
                
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                  <Badge variant="secondary">Piscina</Badge>
                  <Badge variant="secondary">Águas Abertas</Badge>
                  <Badge variant="outline">Membro desde Jan 2024</Badge>
                </div>
                
                <div className="flex gap-2 justify-center md:justify-start">
                  <Button>Editar Perfil</Button>
                  <Button variant="outline">Configurações</Button>
                </div>
              </div>

              <div className="flex gap-6 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">42</p>
                  <p className="text-sm text-muted-foreground">Amigos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondary">156</p>
                  <p className="text-sm text-muted-foreground">Atividades</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estatísticas Gerais */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="hover:shadow-[var(--shadow-elevated)] transition-all">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Waves className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Distância Total</span>
              </div>
              <p className="text-2xl font-bold">287.5 km</p>
              <p className="text-xs text-muted-foreground mt-1">Este ano</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-[var(--shadow-elevated)] transition-all">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-full bg-secondary/10">
                  <Calendar className="h-5 w-5 text-secondary" />
                </div>
                <span className="text-sm text-muted-foreground">Tempo Total</span>
              </div>
              <p className="text-2xl font-bold">142h 30m</p>
              <p className="text-xs text-muted-foreground mt-1">Este ano</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-[var(--shadow-elevated)] transition-all">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-full bg-accent/10">
                  <Target className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">Sequência</span>
              </div>
              <p className="text-2xl font-bold">12 dias</p>
              <p className="text-xs text-muted-foreground mt-1">Atual</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-[var(--shadow-elevated)] transition-all">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Recordes</span>
              </div>
              <p className="text-2xl font-bold">8</p>
              <p className="text-xs text-muted-foreground mt-1">Batidos este mês</p>
            </CardContent>
          </Card>
        </div>

        {/* Atividade Mensal */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Atividade Este Mês
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Treinos</p>
                <p className="text-3xl font-bold text-primary">24</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Distância</p>
                <p className="text-3xl font-bold text-secondary">48.2 km</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Tempo</p>
                <p className="text-3xl font-bold">28h 15m</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Calorias</p>
                <p className="text-3xl font-bold">12,450</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conquistas Recentes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Conquistas Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 text-center">
                <div className="text-4xl mb-2">🏆</div>
                <p className="font-semibold">100km Nadados</p>
                <p className="text-xs text-muted-foreground">Alcançado em 25/12/2024</p>
              </div>
              
              <div className="p-4 rounded-lg bg-gradient-to-br from-secondary/10 to-accent/10 text-center">
                <div className="text-4xl mb-2">🔥</div>
                <p className="font-semibold">30 Dias Seguidos</p>
                <p className="text-xs text-muted-foreground">Alcançado em 20/12/2024</p>
              </div>
              
              <div className="p-4 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 text-center">
                <div className="text-4xl mb-2">⚡</div>
                <p className="font-semibold">Ritmo Sub 1:30</p>
                <p className="text-xs text-muted-foreground">Alcançado em 15/12/2024</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Perfil;

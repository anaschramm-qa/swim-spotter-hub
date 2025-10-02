import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Zap, Target, Timer } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Recordes = () => {
  const recordesPiscina = [
    { distancia: "50m", tempo: "00:28.5", data: "15/12/2024" },
    { distancia: "100m", tempo: "01:02.3", data: "10/12/2024" },
    { distancia: "200m", tempo: "02:18.7", data: "08/12/2024" },
    { distancia: "400m", tempo: "05:02.1", data: "05/12/2024" },
    { distancia: "1000m", tempo: "13:45.8", data: "01/12/2024" },
  ];

  const recordesAguasAbertas = [
    { distancia: "1km", tempo: "14:32.0", data: "20/11/2024" },
    { distancia: "3km", tempo: "45:18.5", data: "15/11/2024" },
    { distancia: "5km", tempo: "01:18:42", data: "10/11/2024" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center gap-3">
            <Trophy className="h-8 w-8 text-primary" />
            Recordes Pessoais
          </h1>
          <p className="text-muted-foreground mt-1">Suas melhores marcas</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="hover:shadow-[var(--shadow-elevated)] transition-all">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Ritmo Mais Rápido</span>
              </div>
              <p className="text-2xl font-bold">1:15 min/100m</p>
              <p className="text-xs text-muted-foreground mt-1">Piscina • 15/12/2024</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-[var(--shadow-elevated)] transition-all">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-full bg-secondary/10">
                  <Target className="h-5 w-5 text-secondary" />
                </div>
                <span className="text-sm text-muted-foreground">Maior Distância</span>
              </div>
              <p className="text-2xl font-bold">5.0 km</p>
              <p className="text-xs text-muted-foreground mt-1">Águas Abertas • 10/11/2024</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-[var(--shadow-elevated)] transition-all">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-full bg-accent/10">
                  <Timer className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">Maior Duração</span>
              </div>
              <p className="text-2xl font-bold">2h 15min</p>
              <p className="text-xs text-muted-foreground mt-1">Águas Abertas • 10/11/2024</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="piscina" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="piscina">Piscina</TabsTrigger>
            <TabsTrigger value="aguas-abertas">Águas Abertas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="piscina">
            <Card>
              <CardHeader>
                <CardTitle>Melhores Tempos - Piscina</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recordesPiscina.map((recorde, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="text-base">
                          {recorde.distancia}
                        </Badge>
                        <div>
                          <p className="font-bold text-xl">{recorde.tempo}</p>
                          <p className="text-xs text-muted-foreground">{recorde.data}</p>
                        </div>
                      </div>
                      {index === 0 && (
                        <Trophy className="h-5 w-5 text-primary" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="aguas-abertas">
            <Card>
              <CardHeader>
                <CardTitle>Melhores Tempos - Águas Abertas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recordesAguasAbertas.map((recorde, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="text-base">
                          {recorde.distancia}
                        </Badge>
                        <div>
                          <p className="font-bold text-xl">{recorde.tempo}</p>
                          <p className="text-xs text-muted-foreground">{recorde.data}</p>
                        </div>
                      </div>
                      {index === 0 && (
                        <Trophy className="h-5 w-5 text-secondary" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Recordes;

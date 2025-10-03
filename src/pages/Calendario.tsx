import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Calendario = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Mock data - dias com treinos
  const trainingDays = [
    new Date(2025, 0, 1),
    new Date(2025, 0, 3),
    new Date(2025, 0, 5),
    new Date(2025, 0, 8),
    new Date(2025, 0, 10),
    new Date(2025, 0, 12),
    new Date(2025, 0, 15),
  ];

  const modifiers = {
    training: trainingDays,
  };

  const modifiersStyles = {
    training: {
      backgroundColor: "hsl(var(--primary))",
      color: "white",
      borderRadius: "50%",
    },
  };

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navbar />
      
      <main className="container mx-auto px-4 py-4 md:py-8 max-w-4xl">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Calendário de Treinos
          </h1>
          <p className="text-sm md:text-base text-muted-foreground mt-1">Acompanhe sua consistência</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Seus Treinos</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                modifiers={modifiers}
                modifiersStyles={modifiersStyles}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Estatísticas do Mês</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total de Treinos</span>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    <Check className="h-4 w-4 mr-2" />
                    12 treinos
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Distância Total</span>
                  <span className="font-bold text-xl text-primary">24.5 km</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Tempo Total</span>
                  <span className="font-bold text-xl text-secondary">18h 30min</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Calorias Queimadas</span>
                  <span className="font-bold text-xl">5,400 kcal</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sequência Atual</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    7
                  </div>
                  <p className="text-muted-foreground">dias consecutivos</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Calendario;

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { BottomNav } from "@/components/BottomNav";
import { ActivityFeed } from "@/components/ActivityFeed";
import { AddActivityDialog } from "@/components/AddActivityDialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Index = () => {
  const [showAddActivity, setShowAddActivity] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navbar />
      
      <main className="container mx-auto px-4 py-4 md:py-8 max-w-4xl">
        <div className="mb-6 md:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Feed de Atividades
            </h1>
            <p className="text-sm md:text-base text-muted-foreground mt-1">Acompanhe seus treinos e os de seus amigos</p>
          </div>
          
          <Button 
            onClick={() => setShowAddActivity(true)}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity w-full sm:w-auto"
            size="lg"
          >
            <Plus className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            <span className="text-sm md:text-base">Adicionar Treino</span>
          </Button>
        </div>

        <ActivityFeed />
      </main>

      <BottomNav />

      <AddActivityDialog 
        open={showAddActivity} 
        onOpenChange={setShowAddActivity}
      />
    </div>
  );
};

export default Index;

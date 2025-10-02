import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ActivityFeed } from "@/components/ActivityFeed";
import { AddActivityDialog } from "@/components/AddActivityDialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Index = () => {
  const [showAddActivity, setShowAddActivity] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Feed de Atividades
            </h1>
            <p className="text-muted-foreground mt-1">Acompanhe seus treinos e os de seus amigos</p>
          </div>
          
          <Button 
            onClick={() => setShowAddActivity(true)}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            size="lg"
          >
            <Plus className="mr-2 h-5 w-5" />
            Adicionar Treino
          </Button>
        </div>

        <ActivityFeed />
      </main>

      <AddActivityDialog 
        open={showAddActivity} 
        onOpenChange={setShowAddActivity}
      />
    </div>
  );
};

export default Index;

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

interface AddActivityDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddActivityDialog = ({ open, onOpenChange }: AddActivityDialogProps) => {
  const [activityType, setActivityType] = useState("treino");
  const [locationType, setLocationType] = useState("piscina");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Atividade adicionada com sucesso!");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Adicionar Nova Atividade
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tipo de Atividade */}
          <div className="space-y-3">
            <Label>Tipo de Atividade</Label>
            <RadioGroup value={activityType} onValueChange={setActivityType} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="treino" id="treino" />
                <Label htmlFor="treino">Treino</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="prova" id="prova" />
                <Label htmlFor="prova">Prova</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Local da Natação */}
          <div className="space-y-3">
            <Label>Local</Label>
            <RadioGroup value={locationType} onValueChange={setLocationType} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="piscina" id="piscina" />
                <Label htmlFor="piscina">Piscina</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="aguas-abertas" id="aguas-abertas" />
                <Label htmlFor="aguas-abertas">Águas Abertas</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Métricas principais */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="distance">Distância (metros)</Label>
              <Input id="distance" type="number" placeholder="2000" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duração (minutos)</Label>
              <Input id="duration" type="number" placeholder="60" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="calories">Calorias</Label>
              <Input id="calories" type="number" placeholder="450" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="avgPace">Ritmo Médio (min/100m)</Label>
              <Input id="avgPace" type="number" step="0.01" placeholder="1.80" />
            </div>
          </div>

          {/* Frequência Cardíaca */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="avgHeartRate">FC Média (bpm)</Label>
              <Input id="avgHeartRate" type="number" placeholder="145" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="maxHeartRate">FC Máxima (bpm)</Label>
              <Input id="maxHeartRate" type="number" placeholder="168" />
            </div>
          </div>

          {/* Descrição */}
          <div className="space-y-2">
            <Label htmlFor="description">Descrição (opcional)</Label>
            <Textarea 
              id="description" 
              placeholder="Como foi seu treino hoje?"
              className="min-h-[100px]"
            />
          </div>

          {/* Upload de foto */}
          <div className="space-y-2">
            <Label htmlFor="photo">Foto (opcional)</Label>
            <Input id="photo" type="file" accept="image/*" />
          </div>

          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button 
              type="submit"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              Adicionar Atividade
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

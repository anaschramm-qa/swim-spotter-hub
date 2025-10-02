import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Ruler, Clock, Flame, Activity, Zap } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";

interface ActivityCardProps {
  activity: {
    id: string;
    userName: string;
    userAvatar: string;
    activityType: string;
    swimType: string;
    distance: number;
    duration: number;
    calories: number;
    avgHeartRate: number;
    maxHeartRate: number;
    avgPace: number;
    date: Date;
    imageUrl?: string;
    likes: number;
    comments: number;
    description?: string;
  };
}

export const ActivityCard = ({ activity }: ActivityCardProps) => {
  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    }
    return `${minutes}m ${secs}s`;
  };

  const formatPace = (pace: number) => {
    const minutes = Math.floor(pace);
    const seconds = Math.round((pace - minutes) * 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')} min/100m`;
  };

  return (
    <Card className="overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-all duration-300">
      <CardContent className="p-0">
        {/* Header */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 ring-2 ring-primary/20">
              <AvatarImage src={activity.userAvatar} />
              <AvatarFallback>{activity.userName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{activity.userName}</p>
              <p className="text-sm text-muted-foreground">
                {formatDistanceToNow(activity.date, { addSuffix: true, locale: ptBR })}
              </p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Badge variant={activity.activityType === "Prova" ? "default" : "secondary"}>
              {activity.activityType}
            </Badge>
            <Badge variant="outline">{activity.swimType}</Badge>
          </div>
        </div>

        {/* Description */}
        {activity.description && (
          <div className="px-4 pb-3">
            <p className="text-sm">{activity.description}</p>
          </div>
        )}

        {/* Image */}
        {activity.imageUrl && (
          <div className="relative aspect-video overflow-hidden">
            <img 
              src={activity.imageUrl} 
              alt="Activity" 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 p-4 bg-muted/30">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-muted-foreground mb-1">
              <Ruler className="h-4 w-4" />
              <span className="text-xs">Distância</span>
            </div>
            <p className="font-bold text-lg">{(activity.distance / 1000).toFixed(1)} km</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-muted-foreground mb-1">
              <Clock className="h-4 w-4" />
              <span className="text-xs">Duração</span>
            </div>
            <p className="font-bold text-lg">{formatDuration(activity.duration)}</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-muted-foreground mb-1">
              <Flame className="h-4 w-4" />
              <span className="text-xs">Calorias</span>
            </div>
            <p className="font-bold text-lg">{activity.calories}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 px-4 pb-4 bg-muted/30">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-muted-foreground mb-1">
              <Activity className="h-4 w-4" />
              <span className="text-xs">FC Média</span>
            </div>
            <p className="font-bold">{activity.avgHeartRate} bpm</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-muted-foreground mb-1">
              <Zap className="h-4 w-4" />
              <span className="text-xs">FC Máxima</span>
            </div>
            <p className="font-bold">{activity.maxHeartRate} bpm</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-muted-foreground mb-1">
              <Clock className="h-4 w-4" />
              <span className="text-xs">Ritmo</span>
            </div>
            <p className="font-bold text-sm">{formatPace(activity.avgPace)}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="px-4 py-3 flex items-center gap-4 border-t">
          <Button variant="ghost" size="sm" className="gap-2">
            <Heart className="h-4 w-4" />
            <span>{activity.likes}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="gap-2">
            <MessageCircle className="h-4 w-4" />
            <span>{activity.comments}</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

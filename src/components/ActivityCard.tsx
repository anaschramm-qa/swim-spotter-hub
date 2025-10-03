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
        <div className="p-3 md:p-4 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 md:gap-3">
            <Avatar className="h-10 w-10 md:h-12 md:w-12 ring-2 ring-primary/20">
              <AvatarImage src={activity.userAvatar} />
              <AvatarFallback>{activity.userName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-sm md:text-base">{activity.userName}</p>
              <p className="text-xs md:text-sm text-muted-foreground">
                {formatDistanceToNow(activity.date, { addSuffix: true, locale: ptBR })}
              </p>
            </div>
          </div>
          
          <div className="flex gap-1.5 md:gap-2">
            <Badge variant={activity.activityType === "Prova" ? "default" : "secondary"} className="text-xs">
              {activity.activityType}
            </Badge>
            <Badge variant="outline" className="text-xs">{activity.swimType}</Badge>
          </div>
        </div>

        {/* Description */}
        {activity.description && (
          <div className="px-3 md:px-4 pb-2 md:pb-3">
            <p className="text-xs md:text-sm">{activity.description}</p>
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
        <div className="grid grid-cols-3 gap-2 md:gap-4 p-3 md:p-4 bg-muted/30">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-muted-foreground mb-1">
              <Ruler className="h-3 w-3 md:h-4 md:w-4" />
              <span className="text-[10px] md:text-xs">Distância</span>
            </div>
            <p className="font-bold text-sm md:text-lg">{(activity.distance / 1000).toFixed(1)} km</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-muted-foreground mb-1">
              <Clock className="h-3 w-3 md:h-4 md:w-4" />
              <span className="text-[10px] md:text-xs">Duração</span>
            </div>
            <p className="font-bold text-sm md:text-lg">{formatDuration(activity.duration)}</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-muted-foreground mb-1">
              <Flame className="h-3 w-3 md:h-4 md:w-4" />
              <span className="text-[10px] md:text-xs">Calorias</span>
            </div>
            <p className="font-bold text-sm md:text-lg">{activity.calories}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-4 px-3 md:px-4 pb-3 md:pb-4 bg-muted/30">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-muted-foreground mb-1">
              <Activity className="h-3 w-3 md:h-4 md:w-4" />
              <span className="text-[10px] md:text-xs">FC Média</span>
            </div>
            <p className="font-bold text-xs md:text-base">{activity.avgHeartRate} bpm</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-muted-foreground mb-1">
              <Zap className="h-3 w-3 md:h-4 md:w-4" />
              <span className="text-[10px] md:text-xs">FC Máxima</span>
            </div>
            <p className="font-bold text-xs md:text-base">{activity.maxHeartRate} bpm</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-muted-foreground mb-1">
              <Clock className="h-3 w-3 md:h-4 md:w-4" />
              <span className="text-[10px] md:text-xs">Ritmo</span>
            </div>
            <p className="font-bold text-[11px] md:text-sm">{formatPace(activity.avgPace)}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="px-3 md:px-4 py-2 md:py-3 flex items-center gap-2 md:gap-4 border-t">
          <Button variant="ghost" size="sm" className="gap-1.5 md:gap-2 text-xs md:text-sm">
            <Heart className="h-3.5 w-3.5 md:h-4 md:w-4" />
            <span>{activity.likes}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="gap-1.5 md:gap-2 text-xs md:text-sm">
            <MessageCircle className="h-3.5 w-3.5 md:h-4 md:w-4" />
            <span>{activity.comments}</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

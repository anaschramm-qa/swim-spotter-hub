import { ActivityCard } from "./ActivityCard";

const mockActivities = [
  {
    id: "1",
    userName: "Maria Silva",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    activityType: "Treino",
    swimType: "Piscina",
    distance: 2000,
    duration: 3600,
    calories: 450,
    avgHeartRate: 145,
    maxHeartRate: 168,
    avgPace: 1.8,
    date: new Date(Date.now() - 2 * 60 * 60 * 1000),
    imageUrl: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80",
    likes: 12,
    comments: 3,
    description: "Treino forte hoje! Focado em técnica e resistência 💪🏊‍♀️"
  },
  {
    id: "2",
    userName: "João Pedro",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao",
    activityType: "Prova",
    swimType: "Águas Abertas",
    distance: 5000,
    duration: 7200,
    calories: 780,
    avgHeartRate: 152,
    maxHeartRate: 178,
    avgPace: 1.44,
    date: new Date(Date.now() - 5 * 60 * 60 * 1000),
    imageUrl: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80",
    likes: 24,
    comments: 7,
    description: "Primeira prova em águas abertas do ano! Condições perfeitas 🌊"
  },
  {
    id: "3",
    userName: "Ana Costa",
    userAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
    activityType: "Treino",
    swimType: "Piscina",
    distance: 1500,
    duration: 2700,
    calories: 320,
    avgHeartRate: 138,
    maxHeartRate: 162,
    avgPace: 1.8,
    date: new Date(Date.now() - 24 * 60 * 60 * 1000),
    likes: 8,
    comments: 2,
    description: "Treino leve de recuperação"
  }
];

export const ActivityFeed = () => {
  return (
    <div className="space-y-6">
      {mockActivities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

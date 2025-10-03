import { Link } from "react-router-dom";
import { Home, Calendar, Trophy, Users, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <nav className="flex flex-col gap-4 mt-8">
          <Link 
            to="/" 
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors"
          >
            <Home className="h-5 w-5 text-primary" />
            <span className="font-medium">Feed</span>
          </Link>
          
          <Link 
            to="/calendario" 
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors"
          >
            <Calendar className="h-5 w-5 text-primary" />
            <span className="font-medium">Calendário</span>
          </Link>
          
          <Link 
            to="/recordes" 
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors"
          >
            <Trophy className="h-5 w-5 text-primary" />
            <span className="font-medium">Recordes</span>
          </Link>
          
          <Link 
            to="/grupos" 
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors"
          >
            <Users className="h-5 w-5 text-primary" />
            <span className="font-medium">Grupos</span>
          </Link>
          
          <Link 
            to="/perfil" 
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors"
          >
            <User className="h-5 w-5 text-primary" />
            <span className="font-medium">Perfil</span>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

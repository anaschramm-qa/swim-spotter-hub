import { Link } from "react-router-dom";
import { Shell, Home, Calendar, Trophy, Users, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Shell className="h-5 w-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Marola
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Feed
              </Link>
            </Button>
            
            <Button variant="ghost" size="sm" asChild>
              <Link to="/calendario">
                <Calendar className="h-4 w-4 mr-2" />
                Calendário
              </Link>
            </Button>
            
            <Button variant="ghost" size="sm" asChild>
              <Link to="/recordes">
                <Trophy className="h-4 w-4 mr-2" />
                Recordes
              </Link>
            </Button>
            
            <Button variant="ghost" size="sm" asChild>
              <Link to="/grupos">
                <Users className="h-4 w-4 mr-2" />
                Grupos
              </Link>
            </Button>
            
            <Button variant="ghost" size="sm" asChild>
              <Link to="/perfil">
                <User className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

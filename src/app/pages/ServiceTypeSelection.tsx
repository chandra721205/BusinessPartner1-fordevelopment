import { useNavigate } from "react-router";
import { PageLayout } from "../components/PageLayout";
import { Hotel, Car, UserCircle, Stethoscope, Mountain, Plane } from "lucide-react";

export default function ServiceTypeSelection() {
  const navigate = useNavigate();

  const serviceTypes = [
    {
      id: "accommodation",
      icon: Hotel,
      label: "Accommodation Provider",
      description: "Hotels, resorts, homestays, and lodges",
      path: "/profile/accommodation",
      color: "primary",
    },
    {
      id: "transport",
      icon: Car,
      label: "Transport Partner",
      description: "Vehicle operators and rental services",
      path: "/profile/transport",
      color: "secondary",
    },
    {
      id: "tour-guide",
      icon: UserCircle,
      label: "Tour Guide / Local Expert",
      description: "Licensed guides and local experts",
      path: "/profile/tour-guide",
      color: "accent",
    },
    {
      id: "health",
      icon: Stethoscope,
      label: "Health & Wellness Provider",
      description: "Doctors, clinics, wellness centers",
      path: "/profile/health",
      color: "primary",
    },
    {
      id: "adventure",
      icon: Mountain,
      label: "Adventure Tour Operator",
      description: "Trekking, water sports, and adventure activities",
      path: "/profile/adventure",
      color: "secondary",
    },
    {
      id: "medical-value",
      icon: Plane,
      label: "Medical Value Travel Facilitator",
      description: "Medical tourism and international patient care",
      path: "/profile/medical-value",
      color: "accent",
    },
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary hover:bg-primary/20 border-primary/30";
      case "secondary":
        return "bg-secondary/10 text-secondary hover:bg-secondary/20 border-secondary/30";
      case "accent":
        return "bg-accent/10 text-accent hover:bg-accent/20 border-accent/30";
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-200";
    }
  };

  return (
    <PageLayout showBack>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl mb-4">Choose Your Service Category</h1>
            <p className="text-xl text-muted-foreground">
              Select the category that best describes your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceTypes.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => navigate(service.path)}
                  className={`${getColorClass(
                    service.color
                  )} p-8 rounded-2xl border-2 transition-all hover:shadow-lg hover:scale-105 text-left`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center mb-4">
                      <Icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl mb-2">{service.label}</h3>
                    <p className="text-sm opacity-80">{service.description}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Not sure which category? You can add multiple service profiles later.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

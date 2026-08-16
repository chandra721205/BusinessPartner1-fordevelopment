import { Button } from "../components/ui/button";
import { useNavigate } from "react-router";
import { Hotel, Car, UserCircle, Stethoscope, Mountain, Plane } from "lucide-react";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          {/* Hero Illustration - Using icons to represent diverse service providers */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Hotel className="h-8 w-8 text-primary" />
            </div>
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
              <UserCircle className="h-8 w-8 text-secondary" />
            </div>
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
              <Stethoscope className="h-8 w-8 text-accent" />
            </div>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Car className="h-8 w-8 text-primary" />
            </div>
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
              <Mountain className="h-8 w-8 text-secondary" />
            </div>
          </div>

          {/* Logo/Brand */}
          <div className="mb-4">
            <h1 className="text-5xl font-bold mb-2">
              <span className="text-primary">Grok</span>
              <span className="text-secondary">Yatra</span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Plane className="h-4 w-4" />
              <span className="text-sm">Partner Portal</span>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl mb-4">Partner with GrokYatra</h2>
          
          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-8">
            Join India's most trusted travel ecosystem.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </div>
        </div>

        {/* Features or Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Hotel className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2">Multiple Categories</h3>
            <p className="text-sm text-muted-foreground">
              Hotels, transport, guides, healthcare & more
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCircle className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="mb-2">Easy Onboarding</h3>
            <p className="text-sm text-muted-foreground">
              Simple registration & verification process
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mountain className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mb-2">Grow Your Business</h3>
            <p className="text-sm text-muted-foreground">
              Reach millions of travelers across India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Button } from "../components/ui/button";
import { PageLayout } from "../components/PageLayout";
import { useNavigate } from "react-router";
import { CheckCircle2, TrendingUp, Users, Calendar } from "lucide-react";

export default function VerificationApproved() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl mb-4">🎉 Congratulations!</h1>
          
          {/* Message */}
          <p className="text-lg text-muted-foreground mb-8">
            Your profile has been verified and approved. You're now ready to start accepting bookings
            on GrokYatra!
          </p>

          {/* Welcome Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-primary/5 rounded-lg">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="text-sm mb-1">Grow Your Business</h3>
              <p className="text-xs text-muted-foreground">
                Reach millions of travelers
              </p>
            </div>
            <div className="p-4 bg-secondary/5 rounded-lg">
              <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
              <h3 className="text-sm mb-1">Connect with Travelers</h3>
              <p className="text-xs text-muted-foreground">
                Build lasting relationships
              </p>
            </div>
            <div className="p-4 bg-accent/5 rounded-lg">
              <Calendar className="h-8 w-8 text-accent mx-auto mb-2" />
              <h3 className="text-sm mb-1">Easy Management</h3>
              <p className="text-xs text-muted-foreground">
                Manage bookings effortlessly
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg mb-3">Next Steps</h3>
            <ul className="space-y-2 text-sm text-left list-disc list-inside text-muted-foreground">
              <li>Complete your profile with photos and detailed descriptions</li>
              <li>Set up your availability calendar</li>
              <li>Configure your pricing and policies</li>
              <li>Start receiving booking requests from travelers</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => navigate("/dashboard")}
            >
              Go to Dashboard
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/profile/setup")}
            >
              Complete Profile Setup
            </Button>
          </div>

          {/* Welcome Message */}
          <div className="mt-8 pt-6 border-t">
            <p className="text-sm text-muted-foreground">
              Welcome to the GrokYatra partner family! We're excited to have you on board. 🙏
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

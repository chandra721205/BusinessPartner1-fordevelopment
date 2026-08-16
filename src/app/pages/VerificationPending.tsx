import { Button } from "../components/ui/button";
import { PageLayout } from "../components/PageLayout";
import { useNavigate } from "react-router";
import { Clock, Mail, Phone } from "lucide-react";

export default function VerificationPending() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          {/* Icon */}
          <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="h-12 w-12 text-yellow-600" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl mb-4">Profile Under Verification</h1>
          
          {/* Message */}
          <p className="text-lg text-muted-foreground mb-8">
            Your details have been submitted successfully. Our team will verify them within{" "}
            <strong>2–3 business days</strong>.
          </p>

          {/* Status Card */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg mb-3">What happens next?</h3>
            <ul className="space-y-2 text-sm text-left list-disc list-inside text-muted-foreground">
              <li>Our verification team will review all submitted documents</li>
              <li>We may contact you if additional information is needed</li>
              <li>You'll receive an email notification once verification is complete</li>
              <li>You can check your verification status anytime from your dashboard</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg mb-4">Need help?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>partners@grokyatra.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 1800-XXX-XXXX</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              onClick={() => navigate("/service-selection")}
            >
              Edit Profile
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90"
              onClick={() => navigate("/")}
            >
              Go to Dashboard
            </Button>
          </div>

          {/* Reference Number */}
          <div className="mt-8 pt-6 border-t">
            <p className="text-xs text-muted-foreground">
              Reference ID: <span className="font-mono">GY-{Date.now().toString().slice(-8)}</span>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

import { Button } from "../components/ui/button";
import { PageLayout } from "../components/PageLayout";
import { useNavigate } from "react-router";
import { XCircle, AlertTriangle, Mail, Phone } from "lucide-react";

export default function VerificationRejected() {
  const navigate = useNavigate();

  // Mock rejection reasons - in real app, would come from API
  const rejectionReasons = [
    "Business PAN document is unclear or expired",
    "GST registration certificate does not match business name",
    "Missing required license documentation",
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          {/* Error Icon */}
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="h-12 w-12 text-red-600" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl mb-4">Verification Not Approved</h1>
          
          {/* Message */}
          <p className="text-lg text-muted-foreground mb-8">
            Unfortunately, we were unable to verify your profile at this time. Please review the
            reasons below and resubmit your application.
          </p>

          {/* Rejection Reasons */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h3 className="text-lg mb-3">Issues Found:</h3>
                <ul className="space-y-2 text-sm list-disc list-inside text-muted-foreground">
                  {rejectionReasons.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* What to do next */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg mb-3">What to do next?</h3>
            <ul className="space-y-2 text-sm text-left list-disc list-inside text-muted-foreground">
              <li>Review the issues mentioned above carefully</li>
              <li>Gather the correct and updated documents</li>
              <li>Ensure all documents are clear, legible, and valid</li>
              <li>Resubmit your profile with the corrected information</li>
            </ul>
          </div>

          {/* Contact Support */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg mb-4">Need clarification?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Our support team is here to help you understand the requirements
            </p>
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
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => navigate("/register")}
            >
              Resubmit Profile
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>
          </div>

          {/* Reference Number */}
          <div className="mt-8 pt-6 border-t">
            <p className="text-xs text-muted-foreground">
              Reference ID: <span className="font-mono">GY-{Date.now().toString().slice(-8)}</span>
              <br />
              You can quote this reference number when contacting support
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

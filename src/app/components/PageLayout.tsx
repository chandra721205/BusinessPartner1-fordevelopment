import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";

interface PageLayoutProps {
  children: React.ReactNode;
  showBack?: boolean;
  onBack?: () => void;
}

export function PageLayout({ children, showBack = false, onBack }: PageLayoutProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {showBack && (
        <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </div>
        </div>
      )}
      <div className={showBack ? "pt-16" : ""}>
        {children}
      </div>
    </div>
  );
}

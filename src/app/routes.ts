import { createBrowserRouter } from "react-router";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import GlobalRegistration from "./pages/GlobalRegistration";
import ServiceTypeSelection from "./pages/ServiceTypeSelection";
import AccommodationProfile from "./pages/AccommodationProfile";
import TransportProfile from "./pages/TransportProfile";
import TourGuideProfile from "./pages/TourGuideProfile";
import HealthProfile from "./pages/HealthProfile";
import AdventureProfile from "./pages/AdventureProfile";
import MedicalValueProfile from "./pages/MedicalValueProfile";
import VerificationPending from "./pages/VerificationPending";
import VerificationApproved from "./pages/VerificationApproved";
import VerificationRejected from "./pages/VerificationRejected";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Welcome,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: GlobalRegistration,
  },
  {
    path: "/service-selection",
    Component: ServiceTypeSelection,
  },
  {
    path: "/profile/accommodation",
    Component: AccommodationProfile,
  },
  {
    path: "/profile/transport",
    Component: TransportProfile,
  },
  {
    path: "/profile/tour-guide",
    Component: TourGuideProfile,
  },
  {
    path: "/profile/health",
    Component: HealthProfile,
  },
  {
    path: "/profile/adventure",
    Component: AdventureProfile,
  },
  {
    path: "/profile/medical-value",
    Component: MedicalValueProfile,
  },
  {
    path: "/verification/pending",
    Component: VerificationPending,
  },
  {
    path: "/verification/approved",
    Component: VerificationApproved,
  },
  {
    path: "/verification/rejected",
    Component: VerificationRejected,
  },
]);

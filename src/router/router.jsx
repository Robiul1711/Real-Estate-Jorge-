import AddFunds from "@/components/admin/AddFunds";
import BrowserOpportunities from "@/components/admin/BrowserOpportunities";
import Dashboard from "@/components/admin/Dashboard";
import Documents from "@/components/admin/Documents";
import MyInvestments from "@/components/admin/MyInvestments";
import Payment from "@/components/admin/Payment";
import ProjectViewdescription from "@/components/admin/ProjectViewdescription";
import PaymentDetails from "@/components/admin/PaymentDetails";
import Settings from "@/components/admin/Settings";
import Support from "@/components/admin/Support";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import About from "@/pages/about/About";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import Login from "@/pages/auth/Login";
import NewPassword from "@/pages/auth/NewPassword";
import SignUp from "@/pages/auth/SignUp";
import Home from "@/pages/home/Home";
import Properties from "@/pages/properties/Properties";
import Services from "@/pages/services/Services";

import { createBrowserRouter } from "react-router-dom";
import InvestmentVerification from "@/components/admin/InvestmentVerification";
import InvestmentTermsConditions from "@/components/admin/InvestmentTermsConditions ";
import InvestmentConfirmation from "@/components/admin/InvestmentConfirmation";
import InvestmentSuccess from "@/components/admin/InvestmentSuccess";
import PaymentSuccess from "@/components/admin/PaymentSuccess";
import CheckEmailBox from "@/pages/auth/CheckEmailBox";
import NewPasswordSuccess from "@/pages/auth/NewPasswordSuccess";
import Statistics from "@/pages/statistics/Statistics";
import Communications from "@/components/admin/Communications";
import WithdrawFunds from "@/components/admin/DigitalWallet/WithdrawFunds";
import WithdrawalMethod from "@/components/admin/DigitalWallet/WithdrawalMethod";
import ConfirmWithdrawal from "@/components/admin/DigitalWallet/ConfirmWithdrawal";
import WithdrawalRequestSuccessful from "@/components/admin/DigitalWallet/WithdrawalRequestSuccessful";
import RequestSubmittedSuccessfully from "@/components/admin/DigitalWallet/RequestSubmittedSuccessfully";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/properties",
        element: <Properties />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
  // Admin routes
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "browse-opportunities",
        element: <BrowserOpportunities />,
      },
      {
        path: "project-view-description/:id",
        element: <ProjectViewdescription />,
      },
      {
        path: "investment-verification",
        element: <InvestmentVerification />,
      },
      {
        path: "investment-terms-conditions",
        element: <InvestmentTermsConditions />,
      },
      {
        path: "investment-success",
        element: <InvestmentSuccess />,
      },
      {
        path: "investment-confirmation",
        element: <InvestmentConfirmation />,
      },
      {
        path: "my-investments",
        element: <MyInvestments />,
      },
      {
        path: "communication",
        element: <Communications />,
      },
      // Digital wallet start 
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "withdraw-funds",
        element: <WithdrawFunds />,
      },
      {
        path: "withdrawal-method",
        element: <WithdrawalMethod />,
      },
      {
        path: "confirm-withdrawal",
        element: <ConfirmWithdrawal />,
      },
      {
        path: "withdrawal-request-successful",
        element: <WithdrawalRequestSuccessful />,
      },
  
   
      // Digital wallet end
      {
        path: "add-funds",
        element: <AddFunds />,
      },
         {
        path: "request-submitted-successfully",
        element: <RequestSubmittedSuccessfully />,
      },

      {
        path: "payment-details",
        element: <PaymentDetails />,
      },
      {
        path: "payment-success",
        element: <PaymentSuccess />,
      },
      {
        path: "documents",
        element: <Documents />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "setting",
        element: <Settings />,
      },
    ],
  },

  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/check-email-box",
    element: <CheckEmailBox />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
  {
    path: "/new-password-success",
    element: <NewPasswordSuccess />,
  },
]);

export default router;

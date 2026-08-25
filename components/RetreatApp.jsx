"use client";

import { useAppState } from "../lib/useAppState";
import Header from "./Header";
import Toast from "./Toast";
import Landing from "./screens/Landing";
import Explore from "./screens/Explore";
import RetreatDetail from "./screens/RetreatDetail";
import Leaders from "./screens/Leaders";
import LeaderDetail from "./screens/LeaderDetail";
import CreateWizard from "./screens/CreateWizard";
import Apply from "./screens/Apply";
import Dashboard from "./screens/Dashboard";
import Applications from "./screens/Applications";
import Login from "./screens/Login";
import ResetPassword from "./screens/ResetPassword";
import Roles from "./screens/Roles";
import Cohort from "./screens/Cohort";

export default function RetreatApp() {
  const v = useAppState();

  return (
    <div style={{ minHeight: "100vh", background: "#fefaf4" }}>
      <Header v={v} />
      <Toast v={v} />

      {v.onLanding && <Landing v={v} />}
      {v.onExplore && <Explore v={v} />}
      {v.onRetreat && <RetreatDetail v={v} />}
      {v.onLeaders && <Leaders v={v} />}
      {v.onLeader && <LeaderDetail v={v} />}
      {v.onCreate && <CreateWizard v={v} />}
      {v.onApply && <Apply v={v} />}
      {v.onDash && <Dashboard v={v} />}
      {v.onApps && <Applications v={v} />}
      {v.onLogin && <Login v={v} />}
      {v.onReset && <ResetPassword v={v} />}
      {v.onRoles && <Roles v={v} />}
      {v.onCohort && <Cohort v={v} />}
    </div>
  );
}

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Bots from "../components/Bots";
import Loading from "../components/Loading";
import Selector from "../components/Selector";
import { useAuth } from "../firebase/auth";
import Notice from "./Notice";

export default function Dashboard() {
  const navigate = useNavigate();
  const { isLoading, authUser } = useAuth();
  const state = useSelector((st) => st);
  const { optionsOpen } = state.messages;
  const { onboarded } = state.notice;

  useEffect(() => {
    if (!isLoading && !authUser) navigate("/");
  }, [authUser, isLoading, navigate]);

  if (isLoading || (!isLoading && !authUser)) return <Loading />;

  return (
    <div>
      {!onboarded ? <Notice /> : !!optionsOpen ? <Selector /> : <Bots />}
    </div>
  );
}

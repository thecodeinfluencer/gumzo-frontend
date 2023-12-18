import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Bots from "../components/Bots";
import Loading from "../components/Loading";
import Selector from "../components/Selector";
import { useAuth } from "../firebase/auth";

export default function Dashboard() {
  const navigate = useNavigate();
  const { isLoading, authUser } = useAuth();
  const state = useSelector((st) => st);
  const { optionsOpen } = state.messages;

  useEffect(() => {
    if (!isLoading && !authUser) navigate("/");
  }, [authUser, isLoading, navigate]);

  if (isLoading || (!isLoading && !authUser)) return <Loading />;

  return (
    <div
      style={
        {
          // height: "100vh",
          // overflow: "hidden"
        }
      }
    >
      {!!optionsOpen ? <Selector /> : <Bots />}
    </div>
  );
}

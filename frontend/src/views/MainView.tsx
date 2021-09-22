import React, { useEffect } from "react";
import TopBar from "../components/TopBar";
import { useTasksQuery } from "../services/auth.service";

const MainView = () => {
  const {
    data: tasks,
    isFetching,
    isLoading,
  } = useTasksQuery("", {
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  if (isLoading) return <div>Loading...</div>;
  if (!tasks) return <div>No tasks</div>;

  return (
    <>
      <TopBar></TopBar>
      <main>{isFetching ? "Fetching tasks" : tasks}</main>
    </>
  );
};

export default MainView;

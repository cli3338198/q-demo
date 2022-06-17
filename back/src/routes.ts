import { Router } from "express";
import {
  getJobsHandler,
  getTeamMembersHandler,
  helloWorld,
  postJobHandler,
} from "./controllers";

const routes = Router();

routes.get("/", helloWorld);

routes.get("/team_members", getTeamMembersHandler);

routes.get("/jobs", getJobsHandler);

routes.post("/job/:id", postJobHandler);

export default routes;

import { Request, Response } from "express";
import { listJobs, listTeamMembers } from "./seed";

export function helloWorld(req: Request, res: Response) {
  res.json("Hello World");
}

export function getTeamMembersHandler(req: Request, res: Response) {
  res.json(listTeamMembers);
}

export function getJobsHandler(req: Request, res: Response) {
  res.json(listJobs);
}

export function postJobHandler(
  req: Request<
    { id: string },
    {},
    { fullname: string; email: string; linkedin: string }
  >,
  res: Response
) {
  const { id } = req.params;
  const { linkedin } = req.body;

  // check if valid linkedin linkedin
  const regex = new RegExp(
    /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile).+/
  );
  const isValidlinkedin = linkedin.match(regex);

  if (isValidlinkedin) {
    res.status(200).json(id);
  } else {
    res.status(400).json(id);
  }
}

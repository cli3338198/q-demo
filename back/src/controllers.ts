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
    { name: string; email: string; url: string }
  >,
  res: Response
) {
  console.log({});

  const { id } = req.params;
  const { url } = req.body;
  // check if valid linkedin url
  const regex = new RegExp(
    /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile).+/
  );
  const isValidUrl = url.match(regex);

  if (isValidUrl) {
    res.status(200).json(id);
  } else {
    res.status(400).json(id);
  }
}

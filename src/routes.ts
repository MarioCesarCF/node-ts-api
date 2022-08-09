import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(req: Request, res: Response) {
  CreateCourseService.execute({
    name: 'Node', 
    educator: "Cesar", 
    duration: 10,
  });

  CreateCourseService.execute({
    name: "React", 
    educator: "Dione", 
  });

  return res.send();
}


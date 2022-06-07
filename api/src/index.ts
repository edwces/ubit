import { environment, mikroORMConfig } from "./config";
import { app } from "./app";
import { MikroORM, RequestContext } from "@mikro-orm/core";
import { NextFunction, Request, Response } from "express";
import { EntityManager } from "@mikro-orm/postgresql";
import { auth } from "./modules/auth";
import { post } from "./modules/post";

const bootstrap = async () => {
  const orm = await MikroORM.init(mikroORMConfig);

  app.use((request: Request, _: Response, next: NextFunction) => {
    RequestContext.create(orm.em, () => {
      request.em = orm.em.fork() as EntityManager;
      next();
    });
  });
  app.use("/auth", auth);
  app.use("/posts", post);

  app.listen(environment.PORT, () => {
    console.log(`Running on http://localhost:${environment.PORT}`);
  });
};

bootstrap();

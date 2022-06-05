import { environment, mikroORMConfig } from "./config";
import { app } from "./app";
import { MikroORM, RequestContext } from "@mikro-orm/core";
import { NextFunction, Request, Response } from "express";
import { EntityManager } from "@mikro-orm/postgresql";

const bootstrap = async () => {
  const orm = await MikroORM.init(mikroORMConfig);

  app.use((request: Request, _: Response, next: NextFunction) => {
    RequestContext.create(orm.em, () => {
      request.em = orm.em as EntityManager;
      next();
    });
  });

  app.listen(environment.PORT, () => {
    console.log(`Running on http://localhost:${environment.PORT}`);
  });
};

bootstrap();

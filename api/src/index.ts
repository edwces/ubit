import { environment, mikroORMConfig } from "./config";
import { app } from "./app";
import { MikroORM, RequestContext } from "@mikro-orm/core";
import { NextFunction, Request, Response } from "express";
import { EntityManager } from "@mikro-orm/postgresql";
import { auth } from "./modules/auth";
import { post } from "./modules/post";
import { user } from "./modules/user";
import cloudinary from "cloudinary";
import { profile } from "./modules/profile";

const bootstrap = async () => {
  const orm = await MikroORM.init(mikroORMConfig);

  cloudinary.v2.config({
    cloud_name: environment.CLOUDINARY_NAME,
    api_key: environment.CLOUDINARY_API_KEY,
    api_secret: environment.CLOUDINARY_API_SECRET,
  });

  app.use((request: Request, _: Response, next: NextFunction) => {
    RequestContext.create(orm.em, () => {
      request.em = orm.em.fork() as EntityManager;
      next();
    });
  });
  app.use("/auth", auth);
  app.use("/posts", post);
  app.use("/users", user);
  app.use("/profiles", profile);

  app.listen(environment.PORT, () => {
    console.log(`Running on http://localhost:${environment.PORT}`);
  });
};

bootstrap();

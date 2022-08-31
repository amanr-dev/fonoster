/*
 * Copyright (C) 2022 by Fonoster Inc (https://fonoster.com)
 * http://github.com/fonoster/fonoster
 *
 * This file is part of Fonoster
 *
 * Licensed under the MIT License (the "License");
 * you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *    https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable require-jsdoc */
import logger from "@fonoster/logger";
import { checker } from "@fonoster/grpc-health-check";
import { getClientCredentials } from "./trust_util";

const host = process.env.SERVICE_ADDRESS || "localhost";
const port = parseInt(process.env.SERVICE_PORT) || 50052;
const service = process.env.SERVICE_NAME || "";

export default async function () {
  logger.info("[@fonoster/common]: Starting the health check...");

  const options = {
    address: `${host}:${port}`,
    credentials: getClientCredentials()
  };

  await checker(service, options);
}

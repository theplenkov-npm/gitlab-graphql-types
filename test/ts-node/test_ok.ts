import { Project, PipelineStatusEnum } from "gitlab-graphql-types";

console.log({
  id: "project_id",
  description: "test project",
  // pipelines: {
  //   nodes: [{ status: PipelineStatusEnum.SCHEDULED, active: true }],
  // },
} as Project);

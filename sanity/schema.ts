import { type SchemaTypeDefinition } from "sanity";

import project from "./schemas/project";
import experience from "./schemas/experience";
import pageInfo from "./schemas/pageInfo";
import skill from "./schemas/skill";
import social from "./schemas/social";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, skill, project, experience, social],
};

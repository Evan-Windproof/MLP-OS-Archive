import { projectCategories, projectSchema } from './projects';

const files = import.meta.glob('../content/projects/*.json', {
  eager: true,
  import: 'default',
});

const ids = new Set<string>();

export const projects = Object.entries(files).map(([path, data]) => {
  const record = projectSchema.safeParse(data);
  if (!record.success) {
    throw new Error(`${path}: ${record.error.message}`);
  }

  if (path.split('/').at(-1) !== `${record.data.id}.json`) {
    throw new Error(`${path}: expected the filename ${record.data.id}.json`);
  }
  if (ids.has(record.data.id)) {
    throw new Error(`${path}: duplicate project ID ${record.data.id}`);
  }
  ids.add(record.data.id);
  return record.data;
}).sort((a, b) => a.id.localeCompare(b.id, 'en'));

export const projectsByCategory = Object.fromEntries(
  projectCategories.map((category) => [category, projects.filter((project) => project.category === category)]),
) as Record<(typeof projectCategories)[number], typeof projects>;

export const historicalEvents = projects.flatMap((project) =>
  (project.events ?? []).map((event) => ({
    ...event,
    projectId: project.id,
    projectName: project.name,
    language: event.language ?? project.originalLanguage,
  })),
).sort((a, b) => {
  if (!a.date || !b.date) return Number(!a.date) - Number(!b.date);
  return a.date.value.localeCompare(b.date.value, 'en');
});

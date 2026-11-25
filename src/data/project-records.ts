import { projectSchema } from './projects';

const files = import.meta.glob('../content/projects/*.json', {
  eager: true,
  import: 'default',
});

export const projects = Object.entries(files).map(([path, data]) => {
  const record = projectSchema.safeParse(data);
  if (!record.success) {
    throw new Error(`${path}: ${record.error.message}`);
  }

  if (path.split('/').at(-1) !== `${record.data.id}.json`) {
    throw new Error(`${path}: expected the filename ${record.data.id}.json`);
  }
  return record.data;
}).sort((a, b) => a.id.localeCompare(b.id, 'en'));

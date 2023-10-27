export default function createSlug(title) {
  return title.split(/\s+/).join('-').toLowerCase();
}

export default async function ({ store }) {
  await store.dispatch('favorites/fetch')
}

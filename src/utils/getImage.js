export const getImage = (path)=>{
  return new URL(`/src/assets/images/${ path }`, import.meta.url)
}

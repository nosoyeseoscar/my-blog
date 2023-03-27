export const Tube = ({ episode }) => {
  return (
    <iframe
      width='560'
      height='315'
      src={`https://www.youtube.com/embed/${episode}`}
      title='YouTube video player'
      frameborder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowfullscreen
    />
  )
}

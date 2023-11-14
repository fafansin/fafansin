export default Pad({key, onPress}){
  return(
    <button className="drum-pad"
      value={pad}
      onClick={onPress}
    />
  )
}
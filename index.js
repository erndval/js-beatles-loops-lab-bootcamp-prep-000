function theBeatlesPlay(musicians, instruments) {
  var blank = [];
  for (let i = 1; i < 4; i++) {
    blank.push(`${musicians[i]} plays ${instruments[i]}.`);
  }
  return blank;
}

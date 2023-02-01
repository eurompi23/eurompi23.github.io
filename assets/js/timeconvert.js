function getTimezoneName() {
  const today = new Date();
  const short = today.toLocaleDateString(undefined);
  const full = today.toLocaleDateString(undefined, { timeZoneName: 'short' });

  // Trying to remove date from the string in a locale-agnostic way
  const shortIndex = full.indexOf(short);
  if (shortIndex >= 0) {
    const trimmed = full.substring(0, shortIndex) + full.substring(shortIndex + short.length);
    
    // by this time `trimmed` should be the timezone's name with some punctuation -
    // trim it from both sides
    return trimmed.replace(/^[\s,.\-:;]+|[\s,.\-:;]+$/g, '');

  } else {
    // in some magic case when short representation of date is not present in the long one, just return the long one as a fallback, since it should contain the timezone's name
    return full;
  }
}

function myDateTime(datetime, until) {
    var st = datetime.toLocaleString('default', {dateStyle: 'long', timeStyle: 'short'}).bold() + " - ".bold()
        + until.toLocaleString('default', {timeStyle: 'short'}).bold() + " "
        + getTimezoneName().bold()
        + "<br>"
        + datetime.toLocaleString('default', {timeZone: "UTC", dateStyle: "long", timeStyle: "short"}).bold() + " - ".bold()
        + until.toLocaleString('default', {timeZone: "UTC", timeStyle: "short"}).bold() + " "
        + "UTC".bold() 
        + "<br>";

    document.write(st);
}

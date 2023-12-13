// 🏆 TASK TITTLE : Extract the domain name from a URL

//  ❓ TASK : Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// ✔️ SOLUTION :
function domainName(url) {
  let arr = [];
  let firstPoint = null;
  let secondPoint = null;
  for (let i = 0; i < url.length; i++) {
    if (url.substr(i, 4) === 'www.') {
      firstPoint = i + 4;
      i =+ 4;
    }
    if (url.substr(i, 2) === '//') {
      if (url.substr(i, 4) === 'www.') {
        firstPoint = i + 6;
        i + 6;
      } else {
        firstPoint = i + 2;
        i + 2;
      }
    } else if (firstPoint !== null && url[i] === '.') {
      secondPoint = i;
      i++;
      break;
    }
  }
  return url.substr(firstPoint, secondPoint - firstPoint);
}

console.log(domainName('www.xakep.ru'));

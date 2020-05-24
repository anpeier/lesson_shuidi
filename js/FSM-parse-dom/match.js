/**
let element = {
      type: 'element',
      children: [],
      attributes: [{name: id, value: myid}, {name: 'class', value: 'text'}],
      tagName: token.tagName
    }
#myid . tagName

*/
module.exports = function(element, selector) {
  if (!selector || !element.attributes) {
    return false;
  }
  if (selector.charAt(0) === '#') {
    let attr = element.attributes.filter(attr => attr.name === 'id');
    if (attr && attr[0] && attr[0].value  === selector.replace('#', '')) {
      return true;
    }
  } else if (selector.charAt(0) === '.') {
    let attr = element.attributes.filter(attr => attr.name === 'class');
    if (attr && attr[0] && attr[0].value  === selector.replace('.', '')) {
      return true;
    }
  } else {
    if (element.tagName === selector) {
      return true;
    }
  }
  return false;
}

/**
 * Преобразовать строку с тире между словами в строку текста в стиле CamelCase
 */
function toCamelCase(str) {
  let text = str.replace(/-\w/g, $0 => $0.toUpperCase());
  let text2 = text.replace(/_\w/g, $0 => $0.toUpperCase());
  let textCamelCase = text2.split('-').join('');
  let textCamelCase2 = textCamelCase.split('_').join('');
  return textCamelCase2
}

console.log(toCamelCase("-The_stealth-warrior"))

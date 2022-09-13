const doGet = (e = {}) => {
const { parameter } = e;
const { nombre = 'Arnold', apellido = 'GetSchwarzenegger', tel = '225288', dir = 'Narnia' } = parameter;
const salida = `Hola ${nombre} ${apellido} &{tel} ${dir}`;
return ContentService.createTextOutput(salida);
};
// regresa de forma textual los parámetros leidos con post
const doPost = (e = {}) => {
const { parameter } = e;
const { nombre = 'Arnold', apellido = 'PostSchwarzenegger', tel '225288', dir = 'Narnia'} = parameter;
const salida = `Hola ${nombre} ${apellido} ${tel} ${dir}`;
return ContentService.createTextOutput(salida);
};
import anxions from 'axios';

const api = anxions.create({
    baseURL: 'https://www.tecmundo.com.br/api/v1/materia/minha-serie/165454-the-vampire-diaries-ultima-temporada-de-diarios-de-um-vampiro-estreia-na-tv-aberta.htm?1640537116',
});

export default api;
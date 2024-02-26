const {Router} = require('express');

const route = Router();

route.get('/', (res, req) => {
	res.jsonn({
		msg: 'hola',
	});
});

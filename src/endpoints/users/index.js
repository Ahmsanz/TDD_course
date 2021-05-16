
const handlers = ({axios, url}) => ({
    get: async (req, res) => {
        try {
            const { data } = await axios.get(url);
            res.status(200).send(data);
        } catch (e) {
            throw new Error(e);
        }    
    },
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            console.log(id);
            const { data } = await axios.get(url);
            const result = data.find( val => val.id === parseInt(id));
            console.log(result)
            res.status(200).send(result);
        } catch (e) {
            throw new Error(e);
        }    
    },
    post: async (req, res) => {
        try {
            const { body } = req;
            const { data } = await axios.post(url, body);
    
            res.status(201).send(data);
        } catch (e) {
            throw new Error(e);
        }
    },
    put: async (req, res) => {
        try {
            const { id } = req.params;
            const { body } = req;
            const { data } = await axios.put(`${url}/${id}`, body);
    
            res.status(203).send(data);
        } catch (e) {
            throw new Error(e);
        }
    }, 
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            await axios.put(`${url}/${id}`);
    
            res.sendStatus(204);
        } catch(e) {
            throw new Error(e);
        }
    },
});

module.exports = handlers;
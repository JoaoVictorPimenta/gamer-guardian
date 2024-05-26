const API_URL = 'https://api.rawg.io/api/games?key=d33aba0e05d8406baa8c97de778e2c50';

export default async function handler(req, res) {
    const {method, body, query} = req;
    const {id} = query;

    try {
        switch (method) {
          case 'GET':
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Failed to fetch tasks');
            const data = await response.json();
            res.status(200).json(data);
            break;
          case 'POST':
            const postResponse = await fetch(API_URL, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
            });
            if (!postResponse.ok) throw new Error('Failed to create task');
            const postData = await postResponse.json();
            res.status(201).json(postData);
            break;
          case 'PUT':
            const putResponse = await fetch(`${API_URL}/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
            });
            if (!putResponse.ok) throw new Error('Failed to update task');
            const putData = await putResponse.json();
            res.status(200).json(putData);
            break;
          case 'DELETE':
            const deleteResponse = await fetch(`${API_URL}/${id}`, {
              method: 'DELETE'
            });
            if (!deleteResponse.ok) throw new Error('Failed to delete task');
            res.status(204).end();
            break;
          default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

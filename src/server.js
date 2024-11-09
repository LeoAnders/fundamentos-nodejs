import http from 'http'

const user = []

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(user))
  }

  if (method === "PUT" && url === "/users") {

    user.push({
      id: 1,
      name: "John Don",
      email: "johndon@example.com"
    })

    return res.end("Usuário criado com sucesso")
  }

  return res.end("Hello World")
})

server.listen(3000)
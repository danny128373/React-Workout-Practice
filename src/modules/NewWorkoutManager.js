const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/new-workout/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/workoutLogs?_expand=workout`).then(result => result.json())
  }
}
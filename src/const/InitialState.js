const initialState = {
  data: [
    {id: 0, text: "text", additionalText: "some text"},
    {id: 1, text: "tax", additionalText: "some more text"},
    {id: 2, text: "taxo", additionalText: "want  more text?"},
    {id: 3, text: "user", additionalText: "secret data"},
  ],
  system: {
    text: '',
    currentUserId: 0,
    isEdit: 0,
  }
}

export default initialState

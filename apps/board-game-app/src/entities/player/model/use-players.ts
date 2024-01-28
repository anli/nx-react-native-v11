const data = [
  {
    id: 'P1',
    name: 'John',
    isMe: true,
    imageUrl: 'https://avatar.iran.liara.run/public?username=John',
  },
  {
    id: 'P2',
    name: 'Ashley',
    imageUrl: 'https://avatar.iran.liara.run/public?username=Ashley',
  },
  {
    id: 'P3',
    name: 'Mary',
    imageUrl: 'https://avatar.iran.liara.run/public?username=Mary',
  },
  {
    id: 'P4',
    name: 'Jane',
    imageUrl: 'https://avatar.iran.liara.run/public?username=Jane',
  },
];

export const usePlayers = () => {
  return { data }
}


export const usePlayerOne = (id: string) => {
  return {
    data: data.find(player => player.id === id)
  }
}

export const useCurrentPlayer = () => {
  return {
    data: data.find(player => player.isMe)
  }
}

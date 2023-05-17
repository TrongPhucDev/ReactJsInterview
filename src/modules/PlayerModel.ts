export type PlayerModel = {
    id: number
    name: string
    positions: Array<string>
    team: string
    image: string
}

export const HaalandPlayerDummy: PlayerModel = {
    id: 1,
    name: 'Erling Haaland',
    positions: ['forward'],
    team: 'Manchester City',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Erling_Haaland_2023_%28cropped%29.jpg/800px-Erling_Haaland_2023_%28cropped%29.jpg',
}

export const PlayerListDummy: PlayerModel[] = [
    {
        id: 1,
        name: 'Erling Haaland',
        positions: ['forward'],
        team: 'Manchester City',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Erling_Haaland_2023_%28cropped%29.jpg',
    },
    {
        id: 2,
        name: 'Thibaut Courois',
        positions: ['goalkeeper'],
        team: 'Real Madrid',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Courtois_2018_%28cropped%29.jpg',
    },
]

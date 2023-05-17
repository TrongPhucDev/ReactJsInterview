import React from 'react'
import { PlayerCard } from './modules/PlayerCard'
import { Navigation } from './modules/Navigation'
import { Routes, Route } from 'react-router-dom'
import { PlayerList } from './modules/PlayerList'

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<PlayerCard />} />
                <Route path="/player-list" element={<PlayerList />} />
            </Routes>
        </>
    )
}

export default App

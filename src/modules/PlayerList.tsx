import React, { useEffect, useState } from 'react'
import { PlayerModel, PlayerListDummy } from './PlayerModel'

export const PlayerList = () => {
    const [players, setPlayers] = useState<PlayerModel[]>([])
    const [selectedValue, setSelectedValue] = useState('1')

    const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(e.target.value)
    }
    useEffect(() => {
        setPlayers(PlayerListDummy)
    }, [])

    return (
        <>
            <div className="flex justify-around w-full">
                <div className="p-4">
                    <label htmlFor="dropdown" className="mr-2">
                        Please choose a team:
                    </label>
                    <select
                        id="dropdown"
                        name="dropdown"
                        className="px-4 py-2 border rounded-md"
                        value={selectedValue}
                        onChange={handleDropdownChange}
                    >
                        <option value="1">Please choose a team:</option>

                        <option value="Manchester City">Manchester City</option>
                        <option value="Real Madrid"> Real Madrid</option>
                    </select>
                </div>
                {selectedValue === '1'
                    ? players.map((player: PlayerModel) => {
                          return (
                              <>
                                  <section className="  bg-slate-300 w-screen h-screen">
                                      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                          <a href="#">
                                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                  <img
                                                      src={player?.image}
                                                      className="w-auto h-auto bg-auto rounded"
                                                  />
                                              </h5>
                                          </a>
                                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                              Name: {player?.name}
                                          </p>
                                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                              Positions: {player?.positions}
                                          </p>
                                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                              Team: {player?.team}
                                          </p>
                                      </div>
                                  </section>
                              </>
                          )
                      })
                    : players.map((player) => {
                          return (
                              player.team === selectedValue && (
                                  <section className="  bg-slate-300 w-screen h-screen">
                                      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                          <a href="#">
                                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                  <img
                                                      src={player?.image}
                                                      className="w-auto h-auto bg-auto rounded"
                                                  />
                                              </h5>
                                          </a>
                                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                              Name: {player?.name}
                                          </p>
                                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                              Positions: {player?.positions}
                                          </p>
                                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                              Team: {player?.team}
                                          </p>
                                      </div>
                                  </section>
                              )
                          )
                      })}
            </div>
        </>
    )
}

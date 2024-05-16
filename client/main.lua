local player = GetPlayerServerId(PlayerId())

Citizen.CreateThread(function()
    local heading 

    while true do
        Citizen.Wait(1)

        heading = GetEntityHeading(player)

        SendNUIMessage({
            type = 'updateHeading',
            heading = heading
        })
   end
end)

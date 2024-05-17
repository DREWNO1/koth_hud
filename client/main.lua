local player = GetPlayerPed(-1)

Citizen.CreateThread(function()
    local heading 

    while true do
        Citizen.Wait(1)

        heading = GetGameplayCamRot().z
        -- print(GetGameplayCamRot().z)
        heading = heading
        SendNUIMessage({
            type = 'updateHeading',
            heading = heading
        })
   end
end)


Citizen.CreateThread(function()
    while true do
        Citizen.Wait(1)
            if IsControlPressed(0, 27) then
                SendNUIMessage({
                    type = 'toggle-open',
                })
                Citizen.Wait(1500)
        end
    end
end)

Citizen.CreateThread(function()
    local minimap = RequestScaleformMovie("minimap")
        SetRadarBigmapEnabled(true, false)
        Wait(0)
        SetRadarBigmapEnabled(false, false)
    while true do
        Wait(0)
        BeginScaleformMovieMethod(minimap, "SETUP_HEALTH_ARMOUR")
        ScaleformMovieMethodAddParamInt(3)
        EndScaleformMovieMethod()
    end
end)
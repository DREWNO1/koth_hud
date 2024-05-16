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

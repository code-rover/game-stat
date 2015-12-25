local _M = {}

function pr (t, name, indent)   
    local tableList = {}   
    function table_r (t, name, indent, full)   
        local id = not full and name or type(name)~="number" and tostring(name) or '['..name..']'   
        local tag = indent .. id .. ' = '   
        local out = {}  -- result   
        if type(t) == "table" then   
            if tableList[t] ~= nil then   
                table.insert(out, tag .. '{} -- ' .. tableList[t] .. ' (self reference)')   
            else  
                tableList[t]= full and (full .. '.' .. id) or id  
                if next(t) then -- Table not empty   
                    table.insert(out, tag .. '{')   
                    for key,value in pairs(t) do   
                        table.insert(out,table_r(value,key,indent .. '|  ',tableList[t]))   
                    end   
                    table.insert(out,indent .. '}')   
                else table.insert(out,tag .. '{}') end   
            end   
        else  
            local val = type(t)~="number" and type(t)~="boolean" and '"'..tostring(t)..'"' or tostring(t)   
            table.insert(out, tag .. val)   
        end   
        return table.concat(out, '\n')   
    end   
    return table_r(t,name or 'Value',indent or '')   
end   
function _M.print_r (t, name)   
    print(pr(t,name))   
end   


function _M.gettime(r)
	local y= string.sub(r, 1, 4)
	local m = string.sub(r, 6, 7)
    	local d = string.sub(r, 9, 10)

    	local h = string.sub(r, 12, 13)
    	local mm = string.sub(r, 15, 16)
    	local s = string.sub(r, 18, 19)

	local t = os.time({year=y,month=m,day=d, hour=h, min=mm, sec=s})
	    
    	return t
end

return _M

require('comm')
require('mysql')


local conn = Mysql.connect('192.168.1.2', 'data_log', 'qirui', 'Haisky1987')
print(conn)


local r = Mysql.select(conn, 'select count(*) count from BI_item');

--print_r(num)
--
--

--print(os)

for i, row in pairs(r) do
	for k, v in pairs(row) do
		print(k .. " = " .. v)		
	end

end



--[[
local result = Mysql.select(conn, 'select id, users from BI_online')

for i, row in pairs(result) do
    local str = ''
    for k, v in pairs(row) do
        str = str..string.format('%s=%d\t\t', k, v)
    end
    print(str)
    print()
end
]]

Mysql.close(conn)

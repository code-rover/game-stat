local _M = {}


local mysql = require "resty.mysql"


function _M:connect(host, port, database, user, password) 

	local db, err = mysql:new()

	if not db then
		return nil, err
	end

	db:set_timeout(10000)

	local ok,err,errno,sqlstate = db:connect{
		host = host or "127.0.0.1",
		port = port or 3306,
		database = database,
		user = user,
		password = password,
		max_package_size = 1024
	}

	if not ok then
		return nil, err
	end

	return db
end


return _M

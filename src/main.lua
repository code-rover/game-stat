package.path = package.path .. ";./src/?.lua"

local comm = require "comm"
local ldb = require "db"

--local db ,err = ldb:connect("192.168.1.2", 3306, "data_log", "qirui", "Haisky1987")
local db ,err = ldb:connect("10.141.64.3", 3306, "data_log", "dalianxiaohuoban", "Haisky1987")

if not db then
	ngx.say("db connect error  " .. tostring(err))
	return
end

local arg = ngx.req.get_uri_args()
local req = tonumber(arg.req) --request type 
local serverid = tonumber(arg.serverid) --server id
local snid = tonumber(arg.snid) --snid
local start_time = arg.start_time
local end_time = arg.end_time

if req == nil then
	ngx.say("param req is nil")
	return 
end

local sql = ""

if req == 1 then   --请求在线人数
	sql = "select online_date, online_time, users from BI_online where 1=1 "
	
	if serverid and serverid ~= 0 then
		sql = sql .. " and clientid="..serverid
	end		
	if snid and snid ~= 0 then
		sql = sql .. " and snid="..snid
	end
	if start_time and start_time ~= "0" then
		sql = sql .. " and online_date >= '"..start_time .. "'"
	end
	if end_time and end_time ~= "0" then
		sql = sql .. " and online_date <= '".. end_time .. "'"
	end
	

elseif req == 2 then  --玩家等级
	--sql = "select val as level,  userid from (select * from BI_levelup where levelup = 'master_up' order by val desc)  as b group by userid"
	--sql = "select pre_val as level,count(id) as count from BI_levelup where levelup = 'master_up'  group by pre_val where 1=1 "
	--sql = "select val as level,count(id) as count from BI_levelup where levelup = 'master_up' "

	local cond = ""
	if serverid and serverid ~= 0 then
		cond = " and clientid="..serverid
	end		
	if snid and snid ~= 0 then
		cond = cond .. " and snid="..snid
	end

	sql = "select count(*) as count, a.b as level from (select max(cast(val as unsigned)) as b from bi_levelup where levelup='master_up' " .. cond .. "  group by userid) as a group by a.b"

	--sql = sql .. " group by val"

elseif req == 3 then --钻石任务
	--sql = "select phylum, abs(sum(amount)) as amount from BI_economy where currency = 'zuanshi' and amount < 0 and phylum <> 0 group by phylum"
	sql = "select phylum, abs(sum(amount)) as amount from BI_economy where currency = 'zuanshi' and amount < 0 and phylum <> 0 "
	if serverid and serverid ~= 0 then
		sql = sql .. " and clientid="..serverid
	end		
	if snid and snid ~= 0 then
		sql = sql .. " and snid="..snid
	end
	if start_time and start_time ~= "0" then
		sql = sql .. " and economy_date >= '"..start_time .. "'"
	end
	if end_time and end_time ~= "0" then
		sql = sql .. " and economy_date <= '".. end_time .. "'"
	end

	sql = sql .. " group by phylum"


elseif req == 4 then --金币消费
	--sql = "select phylum, abs(sum(amount)) as amount from BI_economy where currency = 'jinbi' and amount < 0 and phylum <> 0 group by phylum"
	sql = "select phylum, abs(sum(amount)) as amount from BI_economy where currency = 'jinbi' and amount < 0 and phylum <> 0 "
	if serverid and serverid ~= 0 then
		sql = sql .. " and clientid="..serverid
	end		
	if snid and snid ~= 0 then
		sql = sql .. " and snid="..snid
	end

	if start_time and start_time ~= "0" then
		sql = sql .. " and economy_date >= '"..start_time .. "'"
	end
	if end_time and end_time ~= "0" then
		sql = sql .. " and economy_date <= '".. end_time .. "'"
	end
	sql = sql .. " group by phylum"

elseif req == 5 then  --新手任务
	--sql = "select kingdom as kingdom, count(id) as count from BI_mission where mission = 'tutorial'  group by kingdom"
	sql = "select kingdom as kingdom, count(id) as count from BI_mission where mission = 'tutorial'  "
	if serverid and serverid ~= 0 then
		sql = sql .. " and clientid="..serverid
	end		
	if snid and snid ~= 0 then
		sql = sql .. " and snid="..snid
	end

	if start_time and start_time ~= "0" then
		sql = sql .. " and mission_date >= '"..start_time .. "'"
	end
	if end_time and end_time ~= "0" then
		sql = sql .. " and mission_date <= '".. end_time .. "'"
	end
	sql = sql .. " group by kingdom"

elseif req == 6 then  --主线任务
	--sql = "select kingdom, count(kingdom) as count from BI_mission where mission = 'main' group by kingdom"
	--sql = "select classfield, count(classfield) as count from BI_counter where counter = 'fuben' group by classfield order by classfield"
	sql = "select classfield, count(classfield) as count from BI_counter where counter = 'fuben' "
	if serverid and serverid ~= 0 then
		sql = sql .. " and clientid="..serverid
	end		
	if snid and snid ~= 0 then
		sql = sql .. " and snid="..snid
	end
	if start_time and start_time ~= "0" then
		sql = sql .. " and counter_date >= '"..start_time .. "'"
	end
	if end_time and end_time ~= "0" then
		sql = sql .. " and counter_date <= '".. end_time .. "'"
	end

	sql = sql .. " group by classfield order by classfield"
end

local res,err,errno,sqlstate = db:query(sql);
if not res then
	ngx.say("bad result: ", err, ": ", errno, ": ", sqlstate, ".")
	return
end

local nowtime = os.time()

local sdata = {}

if req == 1 then
	local data = {}

	for i, row in pairs(res) do
		local tb = {}
		local datestr = string.format("%s %s", row.online_date, row.online_time)

		tb[1] = comm.gettime(datestr)
		tb[2] = row.users

		local skip = false
		if period ~= nil then
			if (nowtime - tb[1] > period * 60 * 60) then
				skip = true			
			end
		end
		
		if skip == false then
			data[#data+1] = tb 
		end
	end

	sdata.label = "在线人数"
	sdata.data = data

elseif req == 2 then
	local data = {}	

	for i, row in pairs(res) do
		local tb = {}

		if row.level and row.count then
			tb[1] = row.level
			tb[2] = row.count

			data[#data+1] = tb 
		end
	end

	sdata.label = "level"
	sdata.data = data

elseif req == 3 then
	local data = {}	

	for i, row in pairs(res) do
		local tb = {}

		if row.phylum and row.amount then
			tb[1] = row.phylum
			tb[2] = row.amount

			data[#data+1] = tb 
		end
	end

	sdata.label = "Diamond"
	sdata.data = data
	
elseif req == 4 then
	local data = {}	

	for i, row in pairs(res) do
		local tb = {}

		if row.phylum and row.amount then
			tb[1] = row.phylum
			tb[2] = row.amount

			data[#data+1] = tb 
		end
	end

	sdata.label = "Gold"
	sdata.data = data

elseif req == 5 then
	local data = {}	

	for i, row in pairs(res) do
		local tb = {}

		if row.kingdom and row.count then
			tb[1] = row.kingdom
			tb[2] = row.count

			data[#data+1] = tb 
		end
	end

	sdata.label = "tutorial"
	sdata.data = data

elseif req == 6 then
	local data = {}	

	for i, row in pairs(res) do
		local tb = {}

		if row.classfield and row.count then
			tb[1] = row.classfield
			tb[2] = row.count

			data[#data+1] = tb 
		end
	end

	sdata.label = "fuben"
	sdata.data = data
end	


local cjson = require "cjson"

ngx.say(cjson.encode(sdata))



CC=g++

#INCLUDE_DIRS=-I/usr/include/mysql
INCLUDE_DIRS1=-Imysql-connector-c64/include
INCLUDE_DIRS2=-I/usr/local/openresty/luajit/include/luajit-2.1

LIB_DIRS=-L/usr/local/openresty/luajit/lib/
#LIB_DIRS=-Lmysql-connector-c64/lib
CFLAGS=-fPIC -shared -O2 -Wall 
SO=./mysql.so

${SO}:lmysql.cc
	g++ -o ${SO} ${CFLAGS} lmysql.cc ${INCLUDE_DIRS1} ${INCLUDE_DIRS2} ${LIB_DIRS} -lluajit-5.1 -lmysqlclient

clean:
	rm -rf ${SO}

install:
	cp -r ${SO} ../../lib

test:
	../../bin/luaexe test.lua

﻿# all-abt-node
1) import and exports -es module
2) require and exports.module - common js
3) diff between sync and async (module fs(file operations), readline (terminal io), https (api call))
4) with v8 js is a single threaded sync execution (call stack)
5) with node (libuv - async event driven architecture), when js sees the asyn io operations, it offloads to libuv
6) weather-app  --->  uses a https, readline module
